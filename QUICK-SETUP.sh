#!/bin/bash

# Beadsyde 2.0 - Quick Wix Setup Script
# This will set up your local Wix environment

echo "🚀 Setting up Beadsyde 2.0 for Wix..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the beadsyde-wix123 directory"
    exit 1
fi

echo "Step 1: Installing dependencies..."
npm install

echo ""
echo "Step 2: Installing Wix CLI globally..."
npm install -g @wix/cli

echo ""
echo "Step 3: Checking if you're logged into Wix..."
wix whoami 2>/dev/null || {
    echo ""
    echo "⚠️  You need to log into Wix first."
    echo "Running: wix login"
    echo ""
    wix login
}

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Start the Local Editor:"
echo "   wix dev"
echo ""
echo "2. This will open your site in a local editor where you can:"
echo "   - Design your pages visually"
echo "   - See your code changes in real-time"
echo "   - Test everything before publishing"
echo ""
echo "3. When you're happy with the changes:"
echo "   - Save in the Local Editor"
echo "   - Changes will automatically sync to Git"
echo "   - Then publish: wix publish"
echo ""
echo "🎨 All your Beadsyde 2.0 code is ready!"
echo "   The Local Editor will show you what to do next."
echo ""
