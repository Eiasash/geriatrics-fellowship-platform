#!/bin/bash

# Geriatrics Fellowship Platform Deployment Script
# Supports both Netlify and Vercel deployment

set -e

echo "🏥 Geriatrics Fellowship Platform Deployment"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if platform is specified
PLATFORM=${1:-"netlify"}

if [ "$PLATFORM" != "netlify" ] && [ "$PLATFORM" != "vercel" ]; then
    print_error "Invalid platform. Use 'netlify' or 'vercel'"
    echo "Usage: ./deploy.sh [netlify|vercel]"
    exit 1
fi

print_status "Deploying to $PLATFORM..."

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if [ "$PLATFORM" = "netlify" ]; then
        if ! command -v netlify &> /dev/null; then
            print_error "Netlify CLI not found. Install with: npm install -g netlify-cli"
            exit 1
        fi
    elif [ "$PLATFORM" = "vercel" ]; then
        if ! command -v vercel &> /dev/null; then
            print_error "Vercel CLI not found. Install with: npm install -g vercel"
            exit 1
        fi
    fi
    
    print_success "Dependencies check passed"
}

# Validate project structure
validate_project() {
    print_status "Validating project structure..."
    
    required_files=(
        "index.html"
        "patient-dashboard-fixed.html"
        "dashboard/index.html"
        "package.json"
    )
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$file" ]; then
            print_error "Required file missing: $file"
            exit 1
        fi
    done
    
    print_success "Project structure validation passed"
}

# Deploy to Netlify
deploy_netlify() {
    print_status "Deploying to Netlify..."
    
    # Check if logged in
    if ! netlify status &> /dev/null; then
        print_warning "Not logged in to Netlify. Please run: netlify login"
        exit 1
    fi
    
    # Deploy
    if [ "$2" = "preview" ]; then
        print_status "Creating preview deployment..."
        netlify deploy
    else
        print_status "Creating production deployment..."
        netlify deploy --prod
    fi
    
    print_success "Netlify deployment completed"
}

# Deploy to Vercel
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    # Check if logged in
    if ! vercel whoami &> /dev/null; then
        print_warning "Not logged in to Vercel. Please run: vercel login"
        exit 1
    fi
    
    # Deploy
    if [ "$2" = "preview" ]; then
        print_status "Creating preview deployment..."
        vercel
    else
        print_status "Creating production deployment..."
        vercel --prod
    fi
    
    print_success "Vercel deployment completed"
}

# Main deployment logic
main() {
    check_dependencies
    validate_project
    
    if [ "$PLATFORM" = "netlify" ]; then
        deploy_netlify "$@"
    elif [ "$PLATFORM" = "vercel" ]; then
        deploy_vercel "$@"
    fi
    
    print_success "Deployment completed successfully!"
    print_status "Your Geriatrics Fellowship Platform is now live!"
}

# Run main function
main "$@"