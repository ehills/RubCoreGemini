output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution."
  value       = aws_cloudfront_distribution.main.domain_name
}

output "acm_certificate_dns_validation" {
  description = "DNS CNAME record required to validate the ACM certificate"
  value       = tolist(aws_acm_certificate.cert.domain_validation_options)[0]
}
