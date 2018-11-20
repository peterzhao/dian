provider "google" {
  region  = "us-east1"
  project     = "dian-8888"
}

resource "google_container_cluster" "primary" {
  name               = "dian-cluster"
  zone               = "us-east1-b"
  initial_node_count = 1
}
