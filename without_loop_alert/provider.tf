terraform {
  required_providers {
    newrelic = {
      source = "newrelic/newrelic"
      version = "3.26.0"
    }
  }
}
provider "newrelic" {
  account_id = 4038254
#   api_key = "**********"   # Usually prefixed with 'NRAK'
  region = "US"  

}