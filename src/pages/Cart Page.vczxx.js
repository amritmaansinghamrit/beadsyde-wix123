// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// Beadsyde 2.0 - Cart Page

import { getCartItems, removeFromCart } from './masterPage';
import { formatPrice } from '../public/beadsyde-config';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

$w.onReady(function () {
    console.log('🛒 Beadsyde Cart Page Loaded');

    // Load and display cart
    displayCart();

    // Set up checkout button
    setupCheckoutButton();

    // Apply beadsyde styling
    applyCartStyling();
});

function displayCart() {
    const cartItems = getCartItems();

    if (cartItems.length === 0) {
        showEmptyCart();
        return;
    }

    // Use repeater to display cart items
    if ($w('#cartRepeater')) {
        displayCartWithRepeater(cartItems);
    }

    // Update totals
    updateCartTotals(cartItems);
}

function displayCartWithRepeater(cartItems) {
    $w('#cartRepeater').data = cartItems;

    $w('#cartRepeater').onItemReady(($item, itemData, index) => {
        // Product image
        if ($item('#cartItemImage')) {
            $item('#cartItemImage').src = itemData.image;
            $item('#cartItemImage').alt = itemData.name;
        }

        // Product name
        if ($item('#cartItemName')) {
            $item('#cartItemName').text = itemData.name;
        }

        // Product price
        if ($item('#cartItemPrice')) {
            $item('#cartItemPrice').text = formatPrice(itemData.price);
        }

        // Quantity
        if ($item('#cartItemQuantity')) {
            $item('#cartItemQuantity').text = `Qty: ${itemData.quantity}`;
        }

        // Subtotal
        if ($item('#cartItemSubtotal')) {
            const subtotal = itemData.price * itemData.quantity;
            $item('#cartItemSubtotal').text = formatPrice(subtotal);
        }

        // Remove button
        if ($item('#removeButton')) {
            $item('#removeButton').onClick(() => {
                removeFromCart(itemData.id);
                displayCart(); // Refresh cart display
            });
        }

        // Update quantity buttons
        if ($item('#decreaseQtyButton')) {
            $item('#decreaseQtyButton').onClick(() => {
                updateItemQuantity(itemData.id, -1);
            });
        }

        if ($item('#increaseQtyButton')) {
            $item('#increaseQtyButton').onClick(() => {
                updateItemQuantity(itemData.id, 1);
            });
        }
    });
}

function updateItemQuantity(productId, change) {
    const cart = getCartItems();
    const item = cart.find(i => i.id === productId);

    if (item) {
        const newQuantity = item.quantity + change;

        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity <= 5) {
            item.quantity = newQuantity;
            wixWindow.storage.local.setItem('beadsyde_cart', JSON.stringify(cart));
        }

        displayCart(); // Refresh display
    }
}

function updateCartTotals(cartItems) {
    // Calculate subtotal
    const subtotal = cartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    // Shipping (free over ₹1000)
    const shipping = subtotal >= 1000 ? 0 : 50;

    // Total
    const total = subtotal + shipping;

    // Update UI
    if ($w('#cartSubtotal')) {
        $w('#cartSubtotal').text = formatPrice(subtotal);
    }

    if ($w('#cartShipping')) {
        $w('#cartShipping').text = shipping === 0 ? 'FREE' : formatPrice(shipping);
    }

    if ($w('#cartTotal')) {
        $w('#cartTotal').text = formatPrice(total);
    }

    // Show free shipping message
    if ($w('#freeShippingMessage')) {
        if (subtotal >= 1000) {
            $w('#freeShippingMessage').text = '🎉 You got FREE shipping!';
            $w('#freeShippingMessage').show();
        } else {
            const remaining = 1000 - subtotal;
            $w('#freeShippingMessage').text = `Add ${formatPrice(remaining)} more for FREE shipping!`;
            $w('#freeShippingMessage').show();
        }
    }
}

function showEmptyCart() {
    // Hide cart items
    if ($w('#cartRepeater')) {
        $w('#cartRepeater').hide();
    }

    // Show empty message
    if ($w('#emptyCartMessage')) {
        $w('#emptyCartMessage').show();
        $w('#emptyCartMessage').text = 'Your cart is empty';
    }

    if ($w('#emptyCartSubtext')) {
        $w('#emptyCartSubtext').show();
        $w('#emptyCartSubtext').text = 'Add some beautiful infinity jewelry to get started!';
    }

    // Show continue shopping button
    if ($w('#continueShoppingButton')) {
        $w('#continueShoppingButton').show();
        $w('#continueShoppingButton').onClick(() => {
            wixLocation.to('/');
        });
    }

    // Hide checkout section
    if ($w('#checkoutSection')) {
        $w('#checkoutSection').hide();
    }
}

function setupCheckoutButton() {
    if ($w('#checkoutButton')) {
        $w('#checkoutButton').onClick(() => {
            const cartItems = getCartItems();

            if (cartItems.length === 0) {
                console.log('Cart is empty');
                return;
            }

            // Navigate to checkout
            wixLocation.to('/checkout');
        });
    }
}

function applyCartStyling() {
    try {
        // Apply Beadsyde 2.0 colors
        if ($w('#checkoutButton')) {
            $w('#checkoutButton').style.backgroundColor = '#2E5BBA';
            $w('#checkoutButton').style.borderRadius = '8px';
        }

        if ($w('#continueShoppingButton')) {
            $w('#continueShoppingButton').style.backgroundColor = '#FFFFFF';
            $w('#continueShoppingButton').style.borderColor = '#2E5BBA';
            $w('#continueShoppingButton').style.color = '#2E5BBA';
            $w('#continueShoppingButton').style.borderRadius = '8px';
        }

        if ($w('#cartTotal')) {
            $w('#cartTotal').style.color = '#2E5BBA';
        }
    } catch (error) {
        console.log('Error applying cart styling:', error);
    }
}
