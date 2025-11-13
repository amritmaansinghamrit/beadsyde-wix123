// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// Beadsyde 2.0 - Home Page with Product Display

import { addToCart } from './masterPage';
import wixData from 'wix-data';

// Product configuration - matching beadsyde 2.0
const PRODUCTS = [
    {
        id: '1',
        name: 'Silver Infinity Necklace',
        price: 499,
        category: 'necklaces',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/placeholder-silver-necklace.png'
    },
    {
        id: '2',
        name: 'Golden Infinity Necklace',
        price: 499,
        category: 'necklaces',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/placeholder-golden-necklace.jpg'
    },
    {
        id: '3',
        name: 'Silver Infinity Bracelet',
        price: 349,
        category: 'bracelets',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/placeholder-silver-bracelet.jpg'
    },
    {
        id: '4',
        name: 'Golden Infinity Bracelet',
        price: 349,
        category: 'bracelets',
        description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
        image: 'https://static.wixstatic.com/media/placeholder-golden-bracelet.jpg'
    }
];

let currentCategory = 'all';

$w.onReady(function () {
    console.log('🚀 Beadsyde 2.0 Home Page Loaded');

    // Set up category filters
    setupCategoryFilters();

    // Display products
    displayProducts();

    // Apply beadsyde 2.0 styling
    applyBeadsydeStyle();
});

function setupCategoryFilters() {
    // Set up category buttons if they exist
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
        console.log('Category buttons not found, using repeater approach');
    }
}

function filterProducts(category) {
    currentCategory = category;
    displayProducts();

    // Update active button styling
    updateActiveButton(category);
}

function updateActiveButton(category) {
    try {
        // Reset all buttons
        ['#allButton', '#necklacesButton', '#braceletsButton'].forEach(btnId => {
            if ($w(btnId)) {
                $w(btnId).style.backgroundColor = '#FFFFFF';
                $w(btnId).style.color = '#4a4a4a';
            }
        });

        // Set active button
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
    // Filter products based on category
    let filteredProducts = PRODUCTS;
    if (currentCategory !== 'all') {
        filteredProducts = PRODUCTS.filter(p => p.category === currentCategory);
    }

    // Use Wix repeater if available
    if ($w('#productsRepeater')) {
        displayWithRepeater(filteredProducts);
    } else {
        console.log('Products to display:', filteredProducts);
    }
}

function displayWithRepeater(products) {
    $w('#productsRepeater').data = products;

    $w('#productsRepeater').onItemReady(($item, itemData, index) => {
        // Set product image
        if ($item('#productImage')) {
            $item('#productImage').src = itemData.image;
            $item('#productImage').alt = itemData.name;
        }

        // Set product name
        if ($item('#productName')) {
            $item('#productName').text = itemData.name;
        }

        // Set product price
        if ($item('#productPrice')) {
            $item('#productPrice').text = `₹${itemData.price}`;
        }

        // Set product description
        if ($item('#productDescription')) {
            $item('#productDescription').text = itemData.description;
        }

        // Set up quantity controls
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

        // Set up add to cart button
        if ($item('#addToCartButton')) {
            $item('#addToCartButton').onClick(() => {
                const quantity = parseInt($item('#quantity').value) || 1;
                addToCart({
                    ...itemData,
                    quantity: quantity
                });

                // Visual feedback
                $item('#addToCartButton').label = '✓ Added!';
                $item('#addToCartButton').style.backgroundColor = '#10B981';

                setTimeout(() => {
                    $item('#addToCartButton').label = 'Add to Cart';
                    $item('#addToCartButton').style.backgroundColor = '#2E5BBA';
                }, 2000);
            });
        }

        // Apply beadsyde 2.0 product card styling
        applyProductCardStyle($item);
    });
}

function applyProductCardStyle($item) {
    try {
        // Apply beadsyde 2.0 colors to product cards
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
        // Apply hero section styling if exists
        if ($w('#heroTitle')) {
            $w('#heroTitle').text = 'Choose Your Infinity';
        }

        if ($w('#heroSubtitle')) {
            $w('#heroSubtitle').text = 'Premium Anti-Tarnish Stainless Steel • Waterproof with Love and Care';
        }

        if ($w('#heroSection')) {
            $w('#heroSection').style.backgroundColor = '#2E5BBA';
        }

        // Set page background
        if ($w('#page')) {
            $w('#page').background.src = 'https://static.wixstatic.com/media/beadsyde-background.jpg';
        }
    } catch (error) {
        console.log('Some styling elements not found:', error);
    }
}
