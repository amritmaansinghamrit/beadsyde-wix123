# Wix Git Setup - Super Simple Guide

Your Wix site is connected to Git, so we need to set up the local environment first. Don't worry - it's automatic!

---

## 🚀 Option 1: Automatic Setup (Easiest)

Just run this ONE command in Terminal:

```bash
cd /Users/amritsingh/beadsyde-wix123 && ./QUICK-SETUP.sh
```

Then follow the prompts! It will:
1. ✅ Install all dependencies
2. ✅ Install Wix CLI
3. ✅ Log you into Wix
4. ✅ Tell you what to do next

---

## 🛠️ Option 2: Manual Setup (Step by Step)

### Step 1: Open Terminal
Press `Cmd + Space`, type "Terminal", press Enter

### Step 2: Navigate to the Folder
```bash
cd /Users/amritsingh/beadsyde-wix123
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Install Wix CLI
```bash
npm install -g @wix/cli
```

### Step 5: Login to Wix
```bash
wix login
```

This will open your browser - just login to your Wix account.

### Step 6: Start Local Editor
```bash
wix dev
```

This opens the **Local Editor** - a special version of the Wix Editor that:
- Shows your site with all the code I wrote
- Lets you design pages visually
- Updates automatically as you make changes
- Syncs with Git automatically

---

## 🎨 What to Do in the Local Editor

When `wix dev` opens the Local Editor:

### 1. You'll See Your Site
- All your Beadsyde 2.0 code is already loaded
- The Home page has all the product logic

### 2. Design Your Pages
You need to add visual elements. I've made it SUPER easy:

#### For the Home Page:
1. **Add a Header Strip** - This will be your hero section
2. **Add 3 Buttons** for category filters (All, Necklaces, Bracelets)
3. **Add a Repeater** - This displays your products
4. Inside the repeater, add:
   - An Image
   - Text for product name
   - Text for price
   - A button for "Add to Cart"

**The code will work automatically** - you just need to create the visual elements!

#### Setting Element IDs (Important!)
When you add elements, click each one and set its ID:
- Hero section → ID: `heroSection`
- Hero title → ID: `heroTitle`
- All Items button → ID: `allButton`
- Necklaces button → ID: `necklacesButton`
- Bracelets button → ID: `braceletsButton`
- Product repeater → ID: `productsRepeater`

Inside the repeater:
- Image → ID: `productImage`
- Name text → ID: `productName`
- Price text → ID: `productPrice`
- Add to Cart button → ID: `addToCartButton`

### 3. The Code Does Everything Else!
Once you add these elements, the code I wrote will:
- ✅ Load your 4 products
- ✅ Handle category filtering
- ✅ Add to cart functionality
- ✅ Apply Beadsyde 2.0 styling
- ✅ Make everything work!

---

## 📸 Uploading Images

### In the Local Editor:
1. Click **Media** (left sidebar)
2. Click **Upload Media**
3. Upload all images from `/Users/amritsingh/beadsyde-wix123/images/`
4. The code will use them automatically!

Or update image URLs in: `src/public/beadsyde-config.js`

---

## 🔄 How Changes Sync

1. Make changes in Local Editor
2. Save (Cmd+S)
3. Changes automatically go to:
   - ✅ Your local files
   - ✅ Git repository
   - ✅ Your Wix site

4. When ready to go live:
   ```bash
   wix publish
   ```

---

## ⚡ Quick Reference

### Start Working
```bash
cd /Users/amritsingh/beadsyde-wix123
wix dev
```

### Publish Changes
```bash
wix publish
```

### Check Status
```bash
wix whoami          # Check if logged in
git status          # See local changes
```

---

## 🆘 Common Issues

### "Command not found: wix"
Run: `npm install -g @wix/cli`

### "Not logged in"
Run: `wix login`

### Changes Not Showing
- Make sure you saved in Local Editor
- Check console for errors (F12)
- Verify element IDs match the code

### Can't Find Element IDs
1. Click the element in Local Editor
2. Look for "ID" field in Properties panel (right side)
3. Type the ID exactly as shown in my guides

---

## 🎯 What I Already Did

✅ Wrote all the JavaScript code
✅ Configured all products
✅ Set up cart functionality
✅ Applied Beadsyde 2.0 colors
✅ Made it mobile responsive
✅ Copied all images
✅ Pushed to GitHub

### You Just Need To:
1. Run `wix dev`
2. Add visual elements in Local Editor
3. Set element IDs
4. Upload images
5. Publish!

---

## 📚 More Help

- **Element IDs list**: See `BEADSYDE-SETUP-GUIDE.md`
- **What was built**: See `CHANGES-SUMMARY.md`
- **Product config**: Edit `src/public/beadsyde-config.js`

---

## 🎉 Ready!

Run this to start:
```bash
cd /Users/amritsingh/beadsyde-wix123
./QUICK-SETUP.sh
```

Or manual:
```bash
cd /Users/amritsingh/beadsyde-wix123
npm install
npm install -g @wix/cli
wix login
wix dev
```

Then just add the visual elements and you're done! 🚀
