# Easy Wix Setup - No Manual Element Creation Needed!

## 🎯 Two Options: Choose the Easiest for You

---

## ⚡ OPTION 1: Standalone Embed (Recommended - 5 Minutes)

This option requires **NO manual element setup** in Wix. Just copy and paste!

### Step 1: Open Your Wix Site
1. Go to your Wix site editor
2. Navigate to the page where you want your store

### Step 2: Add Custom HTML Element
1. Click **Add Elements** (+) on the left
2. Go to **Embed Code** → **Custom Element**
3. Click **Choose Source** → **Code**
4. Select **HTML**

### Step 3: Paste Your Store Code
1. Open `STANDALONE-EMBED.html` from this repository
2. Copy ALL the code (Cmd+A, Cmd+C)
3. Paste into the Wix HTML editor
4. Click **Update**

### Step 4: Resize and Position
1. Drag the element to full width
2. Set height to at least 1500px
3. Position wherever you want on the page

### Step 5: Upload Images
1. Go to **Wix Media Manager**
2. Upload images from the `images/` folder:
   - beadsyde logo.jpg
   - silver necklace.png
   - infinity necklace gold.jpg
   - infinity necklace silver.jpg
   - infinity bracelet gold.jpg
   - infinity bracelet silver.jpg

3. For each image:
   - Click the image in Media Manager
   - Copy the URL

4. Edit the HTML code in Wix:
   - Find the `PRODUCT_CONFIG` section
   - Replace placeholder URLs with your Wix Media URLs

### Step 6: Publish!
Click **Publish** and you're done! 🎉

---

## 🔧 OPTION 2: Use Wix Velo (Full Integration)

If you want to use Wix's native elements and have more control:

### Prerequisites
```bash
cd /Users/amritsingh/beadsyde-wix123
npm install
npm install -g @wix/cli
```

### Step 1: Start Local Editor
```bash
wix dev
```

This opens the Wix Local Editor where you can design and code simultaneously.

### Step 2: Create Page Elements

I've already written all the code. You just need to add elements with these IDs:

#### Home Page Elements:
1. **Add a Box** → Set ID: `heroSection`
   - Background color: #2E5BBA

2. **Add Text** inside hero → Set ID: `heroTitle`
   - Type: "Choose Your Infinity"

3. **Add Text** inside hero → Set ID: `heroSubtitle`
   - Type: "Premium Anti-Tarnish Stainless Steel • Waterproof"

4. **Add 3 Buttons** for categories:
   - Button 1 → ID: `allButton` → Label: "All Items"
   - Button 2 → ID: `necklacesButton` → Label: "∞ Infinity Necklace"
   - Button 3 → ID: `braceletsButton` → Label: "∞ Infinity Bracelet"

5. **Add a Repeater** → Set ID: `productsRepeater`

6. **Inside the repeater**, add:
   - Box → ID: `productCard`
   - Image → ID: `productImage`
   - Text → ID: `productName`
   - Text → ID: `productPrice`
   - Text → ID: `productDescription`
   - Number Input → ID: `quantity`
   - Button → ID: `minusButton` → Label: "−"
   - Button → ID: `plusButton` → Label: "+"
   - Button → ID: `addToCartButton` → Label: "Add to Cart"

#### Header (Master Page) Elements:
1. **Add Text** → ID: `brandName` → Type: "Beadsyde"
2. **Add Button** → ID: `cartIcon` → Add cart icon
3. **Add Text** → ID: `cartCount` → Type: "0"
4. **Add Text** → ID: `notification` → Hide by default

### Step 3: Upload Images
1. Upload images to Wix Media Manager
2. Update URLs in `src/public/beadsyde-config.js`

### Step 4: Test in Local Editor
- Test all functionality
- Verify products display
- Test add to cart
- Check mobile view

### Step 5: Publish
```bash
wix publish
```

---

## 📊 Comparison: Which Option?

| Feature | Option 1: Standalone | Option 2: Wix Velo |
|---------|---------------------|-------------------|
| **Setup Time** | 5 minutes | 30-60 minutes |
| **Difficulty** | Very Easy | Moderate |
| **Manual Work** | Minimal (just paste code) | More (add elements) |
| **Customization** | Edit code | Visual + Code |
| **Wix Integration** | Limited | Full |
| **Maintenance** | Edit one file | Edit multiple files |

### Choose Option 1 if:
- ✅ You want it done quickly
- ✅ You're comfortable editing HTML
- ✅ You want a standalone store
- ✅ You don't need deep Wix integration

### Choose Option 2 if:
- ✅ You want to use Wix's visual editor
- ✅ You need Wix e-commerce features
- ✅ You want to integrate with Wix Payments
- ✅ You're building a full Wix site

---

## 🚀 Recommended: Start with Option 1

I recommend starting with **Option 1** because:
1. It's faster (5 minutes vs 30-60 minutes)
2. No manual element creation needed
3. Everything already works
4. You can always switch to Option 2 later

Once you have Option 1 working, you can decide if you want to migrate to Option 2 for deeper Wix integration.

---

## 📸 Quick Image Update Guide

After uploading images to Wix Media Manager:

### For Option 1 (Standalone):
1. In Wix Editor, click your embedded element
2. Click **Edit Code**
3. Find this section (around line 590):
```javascript
images: {
    logo: 'PASTE_YOUR_WIX_URL_HERE',
    silverNecklace: 'PASTE_YOUR_WIX_URL_HERE',
    goldenNecklace: 'PASTE_YOUR_WIX_URL_HERE',
    silverBracelet: 'PASTE_YOUR_WIX_URL_HERE',
    goldenBracelet: 'PASTE_YOUR_WIX_URL_HERE'
}
```
4. Replace each placeholder with your actual Wix Media URL
5. Click **Update**

### For Option 2 (Velo):
1. Edit `src/public/beadsyde-config.js`
2. Update the `image` field for each product
3. Save and let Wix CLI sync automatically

---

## ✅ What's Already Done for You

I've already completed:
- ✅ All the code (HTML, CSS, JavaScript)
- ✅ Product configuration (4 products with pricing)
- ✅ Cart functionality (add, remove, persist)
- ✅ Category filtering (All, Necklaces, Bracelets)
- ✅ Quantity controls (1-5 items)
- ✅ Beadsyde 2.0 design (colors, styling, branding)
- ✅ Mobile responsive layout
- ✅ All images copied to `images/` folder

You just need to:
1. Choose an option
2. Follow the steps above
3. Upload images and update URLs
4. Publish!

---

## 🆘 Need Help?

### Option 1 Issues:
- **Element not showing**: Increase height (try 2000px)
- **Images not loading**: Check URLs are correct and images are public
- **Styling looks off**: Wix may be overriding CSS, add `!important` to critical styles

### Option 2 Issues:
- **Elements not found**: Double-check element IDs match exactly
- **Code not running**: Check console for errors in Local Editor
- **Products not showing**: Verify repeater is set up correctly

### Still Stuck?
Check these files:
- `BEADSYDE-SETUP-GUIDE.md` - Detailed Velo setup
- `CHANGES-SUMMARY.md` - What was implemented
- `STANDALONE-EMBED.html` - The complete standalone code

---

## 🎉 You're Almost There!

Pick **Option 1** for the fastest setup, or **Option 2** if you want full Wix integration.

Either way, your Beadsyde 2.0 store will be live in no time! 🚀
