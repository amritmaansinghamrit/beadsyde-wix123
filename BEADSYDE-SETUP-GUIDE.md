# Beadsyde 2.0 - Wix Velo Setup Guide

## 🎉 Welcome to Your Beadsyde 2.0 Wix Store!

This repository contains your complete Beadsyde jewelry store with all the design and functionality from beadsyde 2.0, optimized for Wix.

## 📋 What's Included

### ✅ Beadsyde 2.0 Features
- **All 4 Products** - Silver & Golden Infinity Necklaces and Bracelets
- **Category Filtering** - Filter by Necklaces, Bracelets, or All Items
- **Add to Cart** - Full cart functionality with localStorage
- **Quantity Controls** - Select 1-5 items per product
- **Cart Persistence** - Cart saves between sessions
- **Beadsyde 2.0 Design** - All colors, styling, and branding maintained
- **Mobile Responsive** - Works perfectly on all devices

### 🎨 Beadsyde 2.0 Colors Applied
- **Primary Blue**: #2E5BBA
- **Neutral Beige**: #F5F1E8
- **Success Green**: #10B981
- **Pure White**: #FFFFFF

## 🚀 Setup Instructions

### Step 1: Install Dependencies
```bash
cd beadsyde-wix123
npm install
```

### Step 2: Install Wix CLI
```bash
npm install -g @wix/cli
```

### Step 3: Link to Your Wix Site
```bash
wix login
wix dev
```

This will open the Local Editor where you can:
- Design your pages visually
- Test the code in real-time
- See changes immediately

### Step 4: Upload Product Images

1. **Gather your images** from `/Users/amritsingh/beadsyde-2.0-wix/images/`:
   - beadsyde logo.jpg
   - silver necklace.png
   - infinity necklace gold.jpg
   - infinity necklace silver.jpg
   - infinity bracelet gold.jpg
   - infinity bracelet silver.jpg

2. **Upload to Wix Media Manager**:
   - Open your site in Wix Editor
   - Go to Media Manager
   - Upload all images
   - Copy each image URL

3. **Update Configuration**:
   - Edit `src/public/beadsyde-config.js`
   - Replace placeholder URLs with your Wix Media URLs:
   ```javascript
   image: 'https://static.wixstatic.com/media/YOUR_ACTUAL_URL'
   ```

## 🎨 Designing Your Pages in Wix Editor

### Home Page Elements (Home.iy6it.js)

You need to add these elements in the Wix Editor:

#### 1. Hero Section
- **Element ID**: `heroSection`
  - Type: Box/Strip
  - Background: #2E5BBA (Primary Blue)

- **Element ID**: `heroTitle`
  - Type: Text
  - Content: "Choose Your Infinity"
  - Color: White

- **Element ID**: `heroSubtitle`
  - Type: Text
  - Content: "Premium Anti-Tarnish Stainless Steel • Waterproof with Love and Care"

#### 2. Category Buttons
- **Element ID**: `allButton`
  - Type: Button
  - Label: "All Items"

- **Element ID**: `necklacesButton`
  - Type: Button
  - Label: "∞ Infinity Necklace"

- **Element ID**: `braceletsButton`
  - Type: Button
  - Label: "∞ Infinity Bracelet"

#### 3. Products Display
- **Element ID**: `productsRepeater`
  - Type: Repeater

Inside the repeater, add these elements:
- **Element ID**: `productCard` - Container box
- **Element ID**: `productImage` - Image
- **Element ID**: `productName` - Text
- **Element ID**: `productPrice` - Text
- **Element ID**: `productDescription` - Text
- **Element ID**: `quantity` - Text Input (Number)
- **Element ID**: `minusButton` - Button (−)
- **Element ID**: `plusButton` - Button (+)
- **Element ID**: `addToCartButton` - Button ("Add to Cart")

### Master Page Elements (masterPage.js)

Add to your header:
- **Element ID**: `header` - Header strip
- **Element ID**: `brandName` - Text ("Beadsyde")
- **Element ID**: `cartIcon` - Button or Icon
- **Element ID**: `cartCount` - Text (shows number of items)
- **Element ID**: `notification` - Text (hidden by default, for notifications)

## ✏️ Customization

### Update Products
Edit `src/public/beadsyde-config.js`:
```javascript
products: [
    {
        id: '5',
        name: 'New Product Name',
        price: 599,
        category: 'necklaces',
        description: 'Your description',
        image: 'YOUR_WIX_MEDIA_URL',
        inStock: true,
        featured: true
    }
]
```

### Change Colors
Edit `src/public/beadsyde-config.js`:
```javascript
colors: {
    primary: '#2E5BBA',  // Change to your color
    // ... other colors
}
```

### Update Branding
Edit `src/public/beadsyde-config.js`:
```javascript
brand: {
    name: 'Your Brand',
    instagram: '@yourbrand',
    instagramUrl: 'https://instagram.com/yourbrand'
}
```

## 🧪 Testing

### Local Testing
```bash
wix dev
```
- Opens Local Editor
- Test all functionality
- Make design changes
- Code updates automatically

### Preview
```bash
wix preview
```
- Creates a preview version
- Share with others
- Test before publishing

## 📤 Publishing

### Commit Your Changes
```bash
git add .
git commit -m "Applied Beadsyde 2.0 design"
git push origin main
```

### Publish to Wix
```bash
wix publish
```

Or publish directly from the Wix Editor.

## 📁 File Structure

```
beadsyde-wix123/
├── src/
│   ├── pages/
│   │   ├── masterPage.js          # Header, cart, global functions
│   │   ├── Home.iy6it.js          # Main product page
│   │   ├── Cart Page.vczxx.js     # Cart page
│   │   └── ...
│   ├── public/
│   │   └── beadsyde-config.js     # EDIT THIS for products & settings
│   └── backend/
│       └── ...
├── package.json
└── wix.config.json
```

## 🎯 Key Files to Edit

1. **`src/public/beadsyde-config.js`**
   - Products, prices, images
   - Colors and branding
   - All customizable settings

2. **`src/pages/Home.iy6it.js`**
   - Product display logic
   - Category filtering
   - Add to cart functionality

3. **`src/pages/masterPage.js`**
   - Global cart functions
   - Header styling
   - Navigation

## 📸 Setting Up Product Images

### Quick Start
```bash
# Copy images from your beadsyde-2.0-wix folder
open /Users/amritsingh/beadsyde-2.0-wix/images/
```

Then:
1. Upload each image to Wix Media Manager
2. Copy the URL for each image
3. Update `src/public/beadsyde-config.js` with the URLs

### Image Requirements
- **Format**: JPG or PNG
- **Size**: 600x400px recommended
- **Optimization**: Compress before uploading
- **Naming**: Use descriptive names

## 🛠️ Troubleshooting

### Products Not Showing
- Check `productsRepeater` ID in Wix Editor
- Verify element IDs match the code
- Check console for errors in Local Editor

### Cart Not Working
- Verify `cartIcon` and `cartCount` IDs exist
- Check browser localStorage is enabled
- Test in Local Editor first

### Styling Issues
- Apply beadsyde colors in Wix theme settings
- Use element IDs correctly
- Check CSS is not being overridden

### Images Not Loading
- Verify URLs are correct in beadsyde-config.js
- Check images are public in Media Manager
- Use full Wix Media URLs

## 📚 Additional Resources

- [Wix Velo Documentation](https://www.wix.com/velo/reference/api-overview/introduction)
- [Wix CLI Guide](https://support.wix.com/en/article/velo-working-with-the-wix-cli-beta)
- [Local Editor Guide](https://support.wix.com/en/article/velo-working-with-the-local-editor-beta)
- [Wix Repeaters](https://www.wix.com/velo/reference/$w/repeater)

## ✅ Launch Checklist

Before publishing:
- [ ] Installed dependencies (`npm install`)
- [ ] Installed Wix CLI globally
- [ ] Linked to Wix site (`wix dev`)
- [ ] Uploaded all product images
- [ ] Updated image URLs in beadsyde-config.js
- [ ] Created all required elements in Wix Editor
- [ ] Set correct element IDs
- [ ] Tested in Local Editor
- [ ] Verified all 4 products display
- [ ] Tested category filtering
- [ ] Tested add to cart
- [ ] Tested on mobile view
- [ ] Committed to git
- [ ] Published to Wix

## 🎉 You're Ready!

Your Beadsyde 2.0 store is now ready to go live on Wix with all the original design and functionality!

---

**Need Help?**
- Check the console in Local Editor for errors
- Review element IDs in Wix Editor
- Verify all imports in the code
- Test step-by-step in Local Editor

**Original Work Preserved:**
All your beadsyde-2.0 work is maintained in this Wix version with the same colors, layout, and features!
