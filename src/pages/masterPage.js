// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// Beadsyde 2.0 - Master Page Configuration

import wixWindow from 'wix-window';

$w.onReady(function () {
    console.log('🚀 Beadsyde 2.0 Master Page Loaded');

    // Initialize cart from storage
    initializeCart();

    // Set up cart icon if it exists
    setupCartIcon();

    // Apply beadsyde branding
    applyBeadsydeBranding();
});

function initializeCart() {
    // Check if cart exists in local storage
    if (!wixWindow.rendering.env === 'browser') return;

    const cart = getCart();
    updateCartCount(cart.length);
}

function setupCartIcon() {
    // If you have a cart icon element with ID 'cartIcon'
    if ($w('#cartIcon')) {
        $w('#cartIcon').onClick(() => {
            // Navigate to cart page
            wixWindow.openLightbox('Side Cart');
        });
    }
}

function applyBeadsydeBranding() {
    // Apply Beadsyde 2.0 colors and styling
    // This can be customized based on your Wix site structure

    // Set header colors if elements exist
    try {
        if ($w('#header')) {
            $w('#header').style.backgroundColor = '#FFFFFF';
        }

        // Set brand name styling
        if ($w('#brandName')) {
            $w('#brandName').text = 'Beadsyde';
        }
    } catch (error) {
        console.log('Some elements not found:', error);
    }
}

// Cart utility functions
function getCart() {
    try {
        const cartData = wixWindow.storage.local.getItem('beadsyde_cart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error loading cart:', error);
        return [];
    }
}

function updateCartCount(count) {
    try {
        if ($w('#cartCount')) {
            $w('#cartCount').text = count.toString();
        }
    } catch (error) {
        console.log('Cart count element not found');
    }
}

// Export for use in other pages
export function addToCart(product) {
    const cart = getCart();

    // Check if product already exists
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex >= 0) {
        cart[existingIndex].quantity += (product.quantity || 1);
    } else {
        cart.push({
            ...product,
            quantity: product.quantity || 1
        });
    }

    // Save to storage
    wixWindow.storage.local.setItem('beadsyde_cart', JSON.stringify(cart));

    // Update UI
    updateCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));

    // Show notification
    showNotification(`${product.name} added to cart!`);
}

export function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);

    wixWindow.storage.local.setItem('beadsyde_cart', JSON.stringify(cart));
    updateCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
}

export function getCartItems() {
    return getCart();
}

function showNotification(message) {
    // Use Wix's built-in notification or create custom
    console.log('✅', message);

    // If you have a notification element
    try {
        if ($w('#notification')) {
            $w('#notification').text = message;
            $w('#notification').show();

            setTimeout(() => {
                $w('#notification').hide();
            }, 3000);
        }
    } catch (error) {
        console.log('Notification element not found');
    }
}
