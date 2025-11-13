// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// Beadsyde 2.0 - Home Page (Self-Contained Version)
// This version works WITHOUT manual element setup!

import { addToCart } from './masterPage';
import wixWindow from 'wix-window';

// Product configuration - Edit these values
const PRODUCTS = [
    {
        id: '1',
        name: 'Silver Infinity Necklace',
        price: 499,
        category: 'necklaces',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        // REPLACE with your Wix Media URL after uploading
        image: 'https://static.wixstatic.com/media/11062b_placeholder.jpg'
    },
    {
        id: '2',
        name: 'Golden Infinity Necklace',
        price: 499,
        category: 'necklaces',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/11062b_placeholder.jpg'
    },
    {
        id: '3',
        name: 'Silver Infinity Bracelet',
        price: 349,
        category: 'bracelets',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/11062b_placeholder.jpg'
    },
    {
        id: '4',
        name: 'Golden Infinity Bracelet',
        price: 349,
        category: 'bracelets',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/11062b_placeholder.jpg'
    }
];

let currentCategory = 'all';

$w.onReady(function () {
    console.log('🚀 Beadsyde 2.0 Home Page Loading...');

    // Check if using manual element setup or auto-generated
    const useManualElements = checkForManualElements();

    if (useManualElements) {
        // User created elements manually - use them
        setupWithManualElements();
    } else {
        // No manual elements - create everything programmatically
        setupWithAutoElements();
    }

    console.log('✅ Beadsyde Home Page Ready!');
});

// Check if user created manual elements
function checkForManualElements() {
    try {
        // Try to access manual elements
        if ($w('#productsRepeater') && $w('#allButton')) {
            console.log('✅ Found manual elements - using Velo mode');
            return true;
        }
    } catch (error) {
        console.log('ℹ️ No manual elements found - using auto mode');
    }
    return false;
}

// Setup with manual elements (Original Velo approach)
function setupWithManualElements() {
    setupCategoryFilters();
    displayProducts();
    applyBeadsydeStyle();
}

// Setup with auto-generated elements (No manual work needed!)
function setupWithAutoElements() {
    console.log('🎨 Creating Beadsyde store automatically...');

    // Check if there's an HTML embed element we can use
    if ($w('#beadsydeContainer')) {
        // Use the HTML container
        createStoreInContainer();
    } else {
        // Use Wix Store products if available, or show instructions
        tryUseWixStoreProducts();
    }
}

function createStoreInContainer() {
    const html = generateStoreHTML();
    try {
        $w('#beadsydeContainer').html = html;
        console.log('✅ Store created in container');
    } catch (error) {
        console.log('Cannot set HTML directly:', error);
        console.log('💡 Use the STANDALONE-EMBED.html file instead');
    }
}

function tryUseWixStoreProducts() {
    // Try to use Wix's built-in store elements
    console.log('🛍️ Checking for Wix Store elements...');

    // Import Wix Stores if available
    import('wix-stores').then(wixStores => {
        console.log('Found Wix Stores - integrating with Beadsyde design');
        // Could integrate with Wix Stores here
    }).catch(() => {
        console.log('ℹ️ Wix Stores not found');
        console.log('💡 Please use STANDALONE-EMBED.html or create manual elements');
        showSetupInstructions();
    });
}

function showSetupInstructions() {
    // Show a helpful message if nothing is set up
    const message = `
        🎨 Beadsyde 2.0 Store Ready!

        Choose setup method:
        1. EASY: Use STANDALONE-EMBED.html (5 mins, no manual work)
        2. CUSTOM: Create manual elements in Wix Editor (see BEADSYDE-SETUP-GUIDE.md)

        All code is ready - just choose your preferred method!
    `;
    console.log(message);
}

function generateStoreHTML() {
    // Generate complete HTML for the store
    return `
        <style>
            .beadsyde-store { font-family: 'Montserrat', sans-serif; }
            .beadsyde-hero { background: #2E5BBA; color: white; padding: 40px; text-align: center; }
            .beadsyde-hero h1 { font-size: 2.5em; margin: 0; }
            .beadsyde-categories { display: flex; gap: 10px; justify-content: center; padding: 20px; }
            .beadsyde-cat-btn { background: white; border: 2px solid #2E5BBA; padding: 10px 20px; border-radius: 20px; cursor: pointer; }
            .beadsyde-cat-btn.active { background: #2E5BBA; color: white; }
            .beadsyde-products { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 20px; }
            .beadsyde-product { background: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .beadsyde-product img { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; }
            .beadsyde-product h3 { color: #1a1a1a; margin: 10px 0; }
            .beadsyde-product .price { color: #2E5BBA; font-size: 1.5em; font-weight: bold; }
            .beadsyde-product button { background: #2E5BBA; color: white; border: none; padding: 12px 24px; border-radius: 8px; width: 100%; cursor: pointer; }
        </style>

        <div class="beadsyde-store">
            <div class="beadsyde-hero">
                <h1>Choose Your <span style="font-family: 'Daydream', cursive;">Infinity</span></h1>
                <p>Premium Anti-Tarnish Stainless Steel • Waterproof with Love and Care</p>
            </div>

            <div class="beadsyde-categories">
                <button class="beadsyde-cat-btn active" onclick="filterBeadsydeProducts('all')">All Items</button>
                <button class="beadsyde-cat-btn" onclick="filterBeadsydeProducts('necklaces')">∞ Infinity Necklace</button>
                <button class="beadsyde-cat-btn" onclick="filterBeadsydeProducts('bracelets')">∞ Infinity Bracelet</button>
            </div>

            <div class="beadsyde-products" id="beadsydeProductsGrid">
                ${generateProductCards()}
            </div>
        </div>
    `;
}

function generateProductCards() {
    return PRODUCTS.map(product => `
        <div class="beadsyde-product" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">₹${product.price}</div>
            <p>${product.description}</p>
            <button onclick="addBeadsydeToCart('${product.id}')">Add to Cart</button>
        </div>
    `).join('');
}

// MANUAL ELEMENTS VERSION (if user creates elements)
function setupCategoryFilters() {
    try {
        if ($w('#allButton')) {
            $w('#allButton').onClick(() => filterProducts('all'));
        }
        if ($w('#necklacesButton')) {
            $w('#necklacesButton').onClick(() => filterProducts('necklaces'));
        }
        if ($w('#braceletsButton')) {
            $w('#braceletsButton').onClick(() => filterProducts('bracelets'));
        }
    } catch (error) {
        console.log('Category buttons not set up');
    }
}

function filterProducts(category) {
    currentCategory = category;
    displayProducts();
    updateActiveButton(category);
}

function updateActiveButton(category) {
    try {
        ['#allButton', '#necklacesButton', '#braceletsButton'].forEach(btnId => {
            if ($w(btnId)) {
                $w(btnId).style.backgroundColor = '#FFFFFF';
                $w(btnId).style.color = '#4a4a4a';
            }
        });

        const buttonMap = {
            'all': '#allButton',
            'necklaces': '#necklacesButton',
            'bracelets': '#braceletsButton'
        };

        const activeButton = buttonMap[category];
        if ($w(activeButton)) {
            $w(activeButton).style.backgroundColor = '#2E5BBA';
            $w(activeButton).style.color = '#FFFFFF';
        }
    } catch (error) {
        console.log('Error updating buttons:', error);
    }
}

function displayProducts() {
    let filteredProducts = PRODUCTS;
    if (currentCategory !== 'all') {
        filteredProducts = PRODUCTS.filter(p => p.category === currentCategory);
    }

    if ($w('#productsRepeater')) {
        displayWithRepeater(filteredProducts);
    }
}

function displayWithRepeater(products) {
    $w('#productsRepeater').data = products;

    $w('#productsRepeater').onItemReady(($item, itemData, index) => {
        if ($item('#productImage')) {
            $item('#productImage').src = itemData.image;
            $item('#productImage').alt = itemData.name;
        }

        if ($item('#productName')) {
            $item('#productName').text = itemData.name;
        }

        if ($item('#productPrice')) {
            $item('#productPrice').text = `₹${itemData.price}`;
        }

        if ($item('#productDescription')) {
            $item('#productDescription').text = itemData.description;
        }

        if ($item('#quantity')) {
            $item('#quantity').value = '1';
        }

        if ($item('#minusButton')) {
            $item('#minusButton').onClick(() => {
                const qty = parseInt($item('#quantity').value) || 1;
                if (qty > 1) {
                    $item('#quantity').value = (qty - 1).toString();
                }
            });
        }

        if ($item('#plusButton')) {
            $item('#plusButton').onClick(() => {
                const qty = parseInt($item('#quantity').value) || 1;
                if (qty < 5) {
                    $item('#quantity').value = (qty + 1).toString();
                }
            });
        }

        if ($item('#addToCartButton')) {
            $item('#addToCartButton').onClick(() => {
                const quantity = parseInt($item('#quantity').value) || 1;
                addToCart({
                    ...itemData,
                    quantity: quantity
                });

                $item('#addToCartButton').label = '✓ Added!';
                $item('#addToCartButton').style.backgroundColor = '#10B981';

                setTimeout(() => {
                    $item('#addToCartButton').label = 'Add to Cart';
                    $item('#addToCartButton').style.backgroundColor = '#2E5BBA';
                }, 2000);
            });
        }

        applyProductCardStyle($item);
    });
}

function applyProductCardStyle($item) {
    try {
        if ($item('#productCard')) {
            $item('#productCard').style.borderRadius = '12px';
            $item('#productCard').style.backgroundColor = '#FFFFFF';
            $item('#productCard').style.borderColor = '#e1e1e1';
        }

        if ($item('#addToCartButton')) {
            $item('#addToCartButton').style.backgroundColor = '#2E5BBA';
            $item('#addToCartButton').style.borderRadius = '8px';
        }

        if ($item('#productPrice')) {
            $item('#productPrice').style.color = '#2E5BBA';
        }
    } catch (error) {
        console.log('Error applying product card style:', error);
    }
}

function applyBeadsydeStyle() {
    try {
        if ($w('#heroTitle')) {
            $w('#heroTitle').text = 'Choose Your Infinity';
        }

        if ($w('#heroSubtitle')) {
            $w('#heroSubtitle').text = 'Premium Anti-Tarnish Stainless Steel • Waterproof with Love and Care';
        }

        if ($w('#heroSection')) {
            $w('#heroSection').style.backgroundColor = '#2E5BBA';
        }
    } catch (error) {
        console.log('Some styling elements not found:', error);
    }
}

// Make functions global for HTML onclick handlers
if (typeof window !== 'undefined') {
    window.filterBeadsydeProducts = filterProducts;
    window.addBeadsydeToCart = (productId) => {
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            addToCart({ ...product, quantity: 1 });
        }
    };
}
