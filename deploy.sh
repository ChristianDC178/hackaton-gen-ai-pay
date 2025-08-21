#!/bin/bash

echo "🚀 Starting deployment process..."

# Navigate to frontend directory
cd frontend

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building application..."
npm run build

echo "☁️ Syncing files to S3..."
aws s3 sync dist/ s3://banking-app-hackaton-frontend/ --delete --region us-west-2

echo "🔄 Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id E2A2U5E64JY2OG --paths "/*" --region us-west-2

echo "✅ Deployment completed successfully!"
echo "🌐 Your app is available at:"
echo "   S3: http://banking-app-hackaton-frontend.s3-website.us-west-2.amazonaws.com/"
echo "   CloudFront: https://d1r8xtqjhx68zh.cloudfront.net/"
