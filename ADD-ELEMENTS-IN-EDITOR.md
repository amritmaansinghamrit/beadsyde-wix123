# ✨ Add Elements in Local Editor - Step by Step

Your code is working! You just need to add the visual elements. Super easy!

---

## 🎯 Why You Don't See Anything Yet

The JavaScript code I wrote is loaded and running (check the console - you'll see "🚀 Beadsyde 2.0 Home Page Loading...")

BUT - Wix needs you to add the **visual elements** first. Once you add them with the right IDs, the code will make everything work automatically!

---

## 📍 Step-by-Step: Add Elements to Home Page

### Step 1: Make Sure You're on the Home Page
- Look at the top of the editor
- It should say "Home" or "Home Page"
- If not, click **Pages** (left sidebar) → **Home**

---

### 🎨 SECTION 1: Hero Banner (Top Section)

#### 1.1 Add the Hero Background Box
1. Click **Add Elements** (+) on the left
2. Click **Box** (or **Strip**)
3. Drag it to the top of your page
4. Make it **full width** and about **200px tall**
5. Click the box → Properties panel (right side)
6. Find **"ID"** field → Type: `heroSection`
7. Change background color to **#2E5BBA** (blue)

#### 1.2 Add Hero Title Text
1. Click **Add Elements** (+) → **Text**
2. Drag it inside the blue hero box
3. Double-click the text → Type: **"Choose Your Infinity"**
4. Make it **big** (48px font)
5. Make it **white** color
6. Click the text → Properties → ID: `heroTitle`

#### 1.3 Add Hero Subtitle
1. Add another **Text** element
2. Place it below the title (inside the blue box)
3. Type: **"Premium Anti-Tarnish Stainless Steel • Waterproof with Love and Care"**
4. Make it white, smaller (18px)
5. Properties → ID: `heroSubtitle`

✅ **Hero section done!**

---

### 🔘 SECTION 2: Category Buttons

#### 2.1 Add "All Items" Button
1. Click **Add Elements** (+) → **Button**
2. Place it below the hero section
3. Double-click → Change label to: **"All Items"**
4. Click button → Properties → ID: `allButton`
5. Style: Background **#2E5BBA** (blue), Text **white**

#### 2.2 Add "Necklaces" Button
1. Add another **Button**
2. Place it next to the "All Items" button
3. Label: **"∞ Infinity Necklace"**
4. Properties → ID: `necklacesButton`
5. Style: Background **white**, Border **#2E5BBA**, Text **#4a4a4a**

#### 2.3 Add "Bracelets" Button
1. Add another **Button**
2. Place it next to the Necklaces button
3. Label: **"∞ Infinity Bracelet"**
4. Properties → ID: `braceletsButton`
5. Same style as Necklaces button

💡 **Tip**: Select all 3 buttons and align them horizontally, centered on page

✅ **Category buttons done!**

---

### 🛍️ SECTION 3: Products Grid (The Important Part!)

#### 3.1 Add a Repeater
1. Click **Add Elements** (+) → **Repeater**
2. Drag it below the category buttons
3. Make it **full width**, about **400px tall**
4. Click the repeater → Properties → ID: `productsRepeater`

#### 3.2 Design ONE Product Card (it repeats automatically!)

Now, inside the **first repeating item** of the repeater, add these:

##### A. Product Image
1. Click **Add Elements** (+) → **Image**
2. Drag it to the top of the repeating item
3. Click image → Properties → ID: `productImage`
4. Size: About 300px wide × 200px tall

##### B. Product Name Text
1. Add **Text** element
2. Place below the image
3. Type placeholder: "Product Name"
4. Make it **bold**, size 20px
5. Properties → ID: `productName`

##### C. Product Price Text
1. Add **Text** element
2. Place below the name
3. Type placeholder: "₹499"
4. Make it **bold**, size 24px, color **#2E5BBA** (blue)
5. Properties → ID: `productPrice`

##### D. Product Description Text
1. Add **Text** element
2. Place below price
3. Type placeholder: "Description here"
4. Smaller text, gray color
5. Properties → ID: `productDescription`

##### E. Quantity Controls
1. Add **Number Input** field
2. Place it below description
3. Properties → ID: `quantity`
4. Set default value: 1, min: 1, max: 5

5. Add a **Button** next to it
6. Label: **"−"** (minus sign)
7. Properties → ID: `minusButton`

8. Add another **Button**
9. Label: **"+"** (plus sign)
10. Properties → ID: `plusButton`

##### F. Add to Cart Button
1. Add a **Button**
2. Place at bottom of product card
3. Label: **"Add to Cart"**
4. Properties → ID: `addToCartButton`
5. Style: Background **#2E5BBA**, text **white**, make it **full width**

✅ **Products section done!**

---

## 🎉 That's It!

Once you've added these elements with the correct IDs, **save the page** (Cmd+S).

### What Will Happen:
- Products will automatically appear (all 4 of them!)
- Category buttons will filter products
- Add to cart will work
- Quantities will update
- Cart will persist
- Beadsyde 2.0 styling will apply

---

## 🔍 How to Check It's Working

### Open Console (in Local Editor):
1. Press **F12** or **Cmd+Option+I**
2. Go to **Console** tab
3. You should see:
   - "🚀 Beadsyde 2.0 Home Page Loading..."
   - "✅ Found manual elements - using Velo mode"
   - "✅ Beadsyde Home Page Ready!"

### Test It:
1. Click category buttons → Products should filter
2. Click + and − → Quantity should change
3. Click "Add to Cart" → Should show notification
4. Product cards should display with real data

---

## 📸 Upload Images After

Once everything is working:
1. Click **Media** (left sidebar)
2. Upload images from `/Users/amritsingh/beadsyde-wix123/images/`
3. They'll automatically show in products!

Or update URLs in: `src/public/beadsyde-config.js`

---

## 🎨 Quick Visual Layout

```
┌─────────────────────────────────────┐
│    HERO SECTION (Blue #2E5BBA)      │
│         Choose Your Infinity         │
│    Premium Anti-Tarnish Stainless   │
└─────────────────────────────────────┘

    [All Items] [Necklaces] [Bracelets]

┌────────────┬────────────┬────────────┐
│  Product 1 │  Product 2 │  Product 3 │
│  [Image]   │  [Image]   │  [Image]   │
│  Name      │  Name      │  Name      │
│  ₹499      │  ₹499      │  ₹349      │
│  Desc      │  Desc      │  Desc      │
│  [-] 1 [+] │  [-] 1 [+] │  [-] 1 [+] │
│  [Add Cart]│  [Add Cart]│  [Add Cart]│
└────────────┴────────────┴────────────┘
```

---

## ⚡ Element IDs Summary

Copy this list - you need these exact IDs:

**Hero:**
- `heroSection` - Box/Strip
- `heroTitle` - Text
- `heroSubtitle` - Text

**Categories:**
- `allButton` - Button
- `necklacesButton` - Button
- `braceletsButton` - Button

**Products Repeater:**
- `productsRepeater` - Repeater

**Inside Repeater:**
- `productImage` - Image
- `productName` - Text
- `productPrice` - Text
- `productDescription` - Text
- `quantity` - Number Input
- `minusButton` - Button
- `plusButton` - Button
- `addToCartButton` - Button

---

## 🆘 Troubleshooting

### "Can't find ID field"
- Click the element
- Look at **Properties panel** (right side)
- Scroll down - you'll see "ID" or "Element ID"

### "Products not showing"
- Check console for errors (F12)
- Verify all IDs are typed exactly right (case-sensitive!)
- Make sure repeater ID is `productsRepeater` (with 's')

### "Buttons don't filter"
- Check button IDs are exact matches
- Open console - should show "Found manual elements"

### "Add to Cart doesn't work"
- Check `addToCartButton` ID is correct
- Verify it's inside the repeater

---

## 📝 Save & Test Checklist

- [ ] Added hero section with 3 elements
- [ ] Added 3 category buttons
- [ ] Added repeater with ID
- [ ] Added all elements inside repeater
- [ ] Set ALL element IDs correctly
- [ ] Saved page (Cmd+S)
- [ ] Tested category filtering
- [ ] Tested add to cart
- [ ] Checked console for success messages

---

## 🎉 When Everything Works:

The code will:
- ✅ Load your 4 products automatically
- ✅ Show correct names, prices, descriptions
- ✅ Filter by category
- ✅ Handle add to cart
- ✅ Update quantities
- ✅ Apply Beadsyde 2.0 colors
- ✅ Make it all beautiful!

**Just add the elements and the magic happens!** ✨
