#!/bin/bash

set -e

echo "🚀 Portfolio Deployment Script"
echo "================================"

# Configuration
IMAGE_NAME="portfolio-app"
REGISTRY="${REGISTRY:-your-registry}"
TAG="${TAG:-latest}"

# Functions
build_image() {
    echo "📦 Building Docker image..."
    docker build -t $IMAGE_NAME:$TAG -f Dockerfile.prod .
    echo "✅ Image built successfully"
}

push_image() {
    echo "📤 Pushing image to registry..."
    docker tag $IMAGE_NAME:$TAG $REGISTRY/$IMAGE_NAME:$TAG
    docker push $REGISTRY/$IMAGE_NAME:$TAG
    echo "✅ Image pushed successfully"
}

deploy_docker_compose() {
    echo "🐳 Deploying with Docker Compose..."
    docker-compose -f docker-compose.prod.yml up -d
    echo "✅ Deployed successfully"
}

deploy_kubernetes() {
    echo "☸️  Deploying to Kubernetes..."
    kubectl apply -f k8s-deployment.yaml
    echo "✅ Deployed to Kubernetes"
}

seed_database() {
    echo "🌱 Seeding database..."
    docker-compose -f docker-compose.prod.yml exec portfolio npm run seed
    echo "✅ Database seeded"
}

show_logs() {
    echo "📋 Showing logs..."
    docker-compose -f docker-compose.prod.yml logs -f
}

# Main menu
case "${1}" in
    build)
        build_image
        ;;
    push)
        build_image
        push_image
        ;;
    deploy)
        deploy_docker_compose
        ;;
    k8s)
        deploy_kubernetes
        ;;
    seed)
        seed_database
        ;;
    logs)
        show_logs
        ;;
    all)
        build_image
        push_image
        deploy_docker_compose
        seed_database
        ;;
    *)
        echo "Usage: $0 {build|push|deploy|k8s|seed|logs|all}"
        echo ""
        echo "Commands:"
        echo "  build   - Build Docker image"
        echo "  push    - Build and push to registry"
        echo "  deploy  - Deploy with Docker Compose"
        echo "  k8s     - Deploy to Kubernetes"
        echo "  seed    - Seed database"
        echo "  logs    - Show application logs"
        echo "  all     - Build, push, deploy, and seed"
        exit 1
        ;;
esac
