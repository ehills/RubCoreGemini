terraform {
  backend "s3" {
    use_lockfile = false
    bucket = "terraform-state-316086360555"
    key    = "rubcoreairsoft/terraform.tfstate"
    region = "ap-southeast-2"
  }
}
