#!/bin/bash

set -e

echo "🚀 Deploying Portfolio to Google Cloud Run"
echo "==========================================="

# Configuration
read -p "Enter GCP Project ID: " PROJECT_ID
read -p "Enter MongoDB URI: " MONGODB_URI
read -p "Enter Service Name [portfolio]: " SERVICE_NAME
SERVICE_NAME=${SERVICE_NAME:-portfolio}
REGION="us-central1"

# Generate secret if not provided
NEXTAUTH_SECRET=$(openssl rand -base64 32)

echo ""
echo "📋 Configuration:"
echo "  Project: $PROJECT_ID"
echo "  Service: $SERVICE_NAME"
echo "  Region: $REGION"
echo ""

# Set project
echo "🔧 Setting GCP project..."
gcloud config set project $PROJECT_ID

# Check if service exists
echo "🔍 Checking if service exists..."
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)' 2>/dev/null || echo "")

if [ -z "$SERVICE_URL" ]; then
  echo "📦 First deployment - service will be created"
  SERVICE_URL="https://$SERVICE_NAME-xxx.run.app"
else
  echo "🔄 Updating existing service"
fi

# Deploy
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --source=. \
  --region=$REGION \
  --platform=managed \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --port=3000 \
  --min-instances=0 \
  --max-instances=10 \
  --timeout=300 \
  --set-env-vars="NODE_ENV=production,MONGODB_URI=$MONGODB_URI,NEXTAUTH_SECRET=$NEXTAUTH_SECRET,NEXTAUTH_URL=$SERVICE_URL"

# Get final URL
FINAL_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)')

# Update NEXTAUTH_URL with actual URL
if [ "$SERVICE_URL" != "$FINAL_URL" ]; then
  echo "🔄 Updating NEXTAUTH_URL with actual service URL..."
  gcloud run services update $SERVICE_NAME \
    --region=$REGION \
    --update-env-vars="NEXTAUTH_URL=$FINAL_URL"
fi

echo ""
echo "✅ Deployment Complete!"
echo "======================="
echo "🌐 Service URL: $FINAL_URL"
echo "🔐 Admin Panel: $FINAL_URL/admin/login"
echo "👤 Default Credentials: admin / admin123"
echo ""
echo "⚠️  Next Steps:"
echo "1. Visit $FINAL_URL/api/init-admin to create admin user"
echo "2. Login to admin panel and update content"
echo "3. Change default admin password"
echo ""
echo "📊 View logs:"
echo "gcloud run services logs tail $SERVICE_NAME --region=$REGION"
echo ""
