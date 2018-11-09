provider "google" {
  region  = "us-central1"
}

resource "google_app_engine_application" "app" {
  project     = "terraform-spike"
  location_id = "us-central"
}
