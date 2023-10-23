resource "google_cloudbuild_trigger" "frontend-deploy-trigger" {
  name      = "frontend-deploy-trigger"
  location  = "us-west1"
  project   = "atomic-aurora"

  github {
    owner = "zachhornung"
    name = "AtomicAuroraBackend"
    push {
      branch = "^development$"
    }
  }

  substitutions = {
    _BUCKET = "atomic_aurora_dev_frontend"
  }

  filename = "deploy/cloudbuild-deploy.yaml"
}
