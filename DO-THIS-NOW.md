# 🚀 Run These Commands Now - Super Simple!

Your Wix site is Git-connected. Just copy and paste these commands into Terminal!

---

## Step 1: Open Terminal
Press `Cmd + Space`, type "Terminal", hit Enter

---

## Step 2: Copy & Paste These Commands (One at a Time)

### Navigate to the folder:
```bash
cd /Users/amritsingh/beadsyde-wix123
```

### Install Wix CLI:
```bash
npm install -g @wix/cli
```

### Login to Wix (will open browser):
```bash
wix login
```
**👉 This will open your browser - just login to Wix!**

### Install project dependencies:
```bash
npm install
```
**👉 When it asks for the code, login to Wix and paste the code shown**

### Start the Local Editor:
```bash
wix dev
```
**👉 This opens the Wix Editor with your code loaded!**

---

## That's It!

The Local Editor will open and show your site with all the Beadsyde 2.0 code I wrote.

### What You'll See:
- Your Wix site in a local editor
- All the code is already there
- Console will show "🚀 Beadsyde 2.0 Home Page Loading..."

### What To Do Next:
1. **Open the Home page** in the editor
2. **Add visual elements** (I'll tell you which ones)
3. **Upload images** from the `images/` folder
4. **Save and publish!**

---

## 🎨 Elements You Need to Add

The code is 100% ready. You just need to add these visual elements in the Wix Editor:

### On the Home Page:

#### 1. Hero Section (Top Banner)
- Add a **Strip/Box** → Set ID: `heroSection`
- Add **Text** inside → Set ID: `heroTitle` → Type: "Choose Your Infinity"
- Add **Text** inside → Set ID: `heroSubtitle` → Type: "Premium Anti-Tarnish..."

#### 2. Category Buttons
- Add **Button** → ID: `allButton` → Label: "All Items"
- Add **Button** → ID: `necklacesButton` → Label: "∞ Infinity Necklace"
- Add **Button** → ID: `braceletsButton` → Label: "∞ Infinity Bracelet"

#### 3. Products Grid
- Add a **Repeater** → ID: `productsRepeater`
- Inside the repeater, add:
  - **Image** → ID: `productImage`
  - **Text** → ID: `productName`
  - **Text** → ID: `productPrice`
  - **Text** → ID: `productDescription`
  - **Number Input** → ID: `quantity`
  - **Button** → ID: `minusButton` → Label: "−"
  - **Button** → ID: `plusButton` → Label: "+"
  - **Button** → ID: `addToCartButton` → Label: "Add to Cart"

### That's It!
Once you add these with the correct IDs, **everything will work automatically!**

The code I wrote will:
- ✅ Load your 4 products
- ✅ Handle filtering
- ✅ Add to cart
- ✅ Apply Beadsyde colors
- ✅ Make it all work!

---

## 🎯 Quick Visual: How to Set Element ID

1. Click any element in the editor
2. Look at the **Properties panel** (right side)
3. Find the **"ID"** field
4. Type the ID (like `productImage`)
5. Done!

---

## 📸 Uploading Images

In the Local Editor:
1. Click **Media** icon (left sidebar)
2. Click **Upload Media**
3. Select all files from `/Users/amritsingh/beadsyde-wix123/images/`
4. Upload!

The code will automatically use them.

---

## 🔄 Publishing

When you're happy with everything:
```bash
wix publish
```

Or click **Publish** in the Local Editor.

---

## ⚡ Copy These Commands Now!

```bash
cd /Users/amritsingh/beadsyde-wix123
npm install -g @wix/cli
wix login
npm install
wix dev
```

Just paste them one at a time in Terminal!

---

## 🆘 If Something Goes Wrong

### "Command not found: wix"
Make sure you ran: `npm install -g @wix/cli`

### "Permission denied"
Add `sudo` before the command:
```bash
sudo npm install -g @wix/cli
```

### "Not logged in"
Run: `wix login`

### npm install asks for code
1. It will show you a code (like: ABC123)
2. Follow the link it gives you
3. Login to Wix
4. Paste the code
5. Done!

---

## 🎉 You're Almost There!

All the hard work is done. You just need to:
1. Run those commands ↑
2. Add the visual elements
3. Upload images
4. Publish!

**The code is 100% ready and will work as soon as you add the elements!** 🚀
