# ACM Certificate for both root + www
resource "aws_acm_certificate" "cert" {
  provider                  = aws.us-east-1
  domain_name               = "www.${var.domain_name}"
  subject_alternative_names = [var.domain_name]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "cert" {
  provider        = aws.us-east-1
  certificate_arn = aws_acm_certificate.cert.arn
}

# --- Redirect setup (apex -> www) ---
resource "aws_s3_bucket" "redirect" {
  bucket = var.domain_name
}

resource "aws_s3_bucket_website_configuration" "redirect" {
  bucket = aws_s3_bucket.redirect.id

  redirect_all_requests_to {
    host_name = "www.${var.domain_name}"
    protocol  = "https"
  }
}

resource "aws_cloudfront_distribution" "redirect" {
  tags = {"Name" = var.domain_name }
  origin {
    domain_name = aws_s3_bucket_website_configuration.redirect.website_endpoint
    origin_id   = "S3-redirect"
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }
  enabled = true
  comment = "CloudFront distribution for redirection of ${var.domain_name}"
  aliases = [var.domain_name]
  default_cache_behavior {
    target_origin_id       = "S3-redirect"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["NZ", "AU", "US"]
    }
  }
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# --- Main S3 bucket (www) ---
resource "aws_s3_bucket" "main" {
  bucket = "www.${var.domain_name}"
}

resource "aws_cloudfront_origin_access_identity" "main" {
  comment = "OAI for www.${var.domain_name}"
}

data "aws_iam_policy_document" "main_s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.main.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.main.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "main" {
  bucket = aws_s3_bucket.main.id
  policy = data.aws_iam_policy_document.main_s3_policy.json
}

# --- Main CloudFront distribution (www) ---
resource "aws_cloudfront_distribution" "main" {
  tags = {"Name" = "www.${var.domain_name}"}
  origin {
    domain_name = aws_s3_bucket.main.bucket_regional_domain_name
    origin_id   = "S3-www.${var.domain_name}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
  }

  enabled             = true
  comment             = "CloudFront distribution for www.${var.domain_name}"
  default_root_object = "index.html"
  aliases             = ["www.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-www.${var.domain_name}"
    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized
  }

  ordered_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    path_pattern           = "/assets/*"
    target_origin_id       = "S3-www.${var.domain_name}"
    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized
  }
  price_class = "PriceClass_All"
  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["NZ", "AU", "US"]
    }
  }
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

output "cloudfront_main_domain" {
  value = aws_cloudfront_distribution.main.domain_name
}

output "cloudfront_redirect_domain" {
  value = aws_cloudfront_distribution.redirect.domain_name
}
