// Beadsyde 2.0 Configuration
// This file contains all the customizable settings for your Beadsyde store

export const BEADSYDE_CONFIG = {
    // Brand Information
    brand: {
        name: 'Beadsyde',
        tagline: 'Your Infinity, Your Style',
        instagram: '@beadsyde',
        instagramUrl: 'https://www.instagram.com/beadsyde/',
        whatsappCommunity: 'https://chat.whatsapp.com/BTUOnwDzoLgBfCnrjNcL6j'
    },

    // Color Scheme - Beadsyde 2.0 Colors
    colors: {
        primary: '#2E5BBA',         // Primary Blue
        neutralBeige: '#F5F1E8',    // Neutral Beige
        white: '#FFFFFF',           // Pure White
        textDark: '#1a1a1a',        // Dark Text
        textMedium: '#4a4a4a',      // Medium Text
        textLight: '#888888',       // Light Text
        success: '#10B981',         // Success Green
        error: '#EF4444',           // Error Red
        borderLight: '#e1e1e1'      // Light Border
    },

    // Products - Update image URLs after uploading to Wix Media
    products: [
        {
            id: '1',
            name: 'Silver Infinity Necklace',
            price: 499,
            category: 'necklaces',
            description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
            image: 'https://static.wixstatic.com/media/YOUR_IMAGE_URL_HERE',
            inStock: true,
            featured: true
        },
        {
            id: '2',
            name: 'Golden Infinity Necklace',
            price: 499,
            category: 'necklaces',
            description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
            image: 'https://static.wixstatic.com/media/YOUR_IMAGE_URL_HERE',
            inStock: true,
            featured: true
        },
        {
            id: '3',
            name: 'Silver Infinity Bracelet',
            price: 349,
            category: 'bracelets',
            description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
            image: 'https://static.wixstatic.com/media/YOUR_IMAGE_URL_HERE',
            inStock: true,
            featured: true
        },
        {
            id: '4',
            name: 'Golden Infinity Bracelet',
            price: 349,
            category: 'bracelets',
            description: 'Premium Anti-Tarnish Stainless Steel • Waterproof',
            image: 'https://static.wixstatic.com/media/YOUR_IMAGE_URL_HERE',
            inStock: true,
            featured: true
        }
    ],

    // Categories
    categories: [
        { id: 'all', name: 'All Items', icon: '✨' },
        { id: 'necklaces', name: '∞ Infinity Necklace', icon: '📿' },
        { id: 'bracelets', name: '∞ Infinity Bracelet', icon: '💫' }
    ],

    // Hero Section
    hero: {
        title: 'Choose Your Infinity',
        subtitle: 'Premium Anti-Tarnish Stainless Steel • Waterproof with Love and Care',
        ctaText: 'Shop Now'
    },

    // Cart Settings
    cart: {
        maxQuantityPerItem: 5,
        storageKey: 'beadsyde_cart',
        showNotifications: true
    },

    // Shipping & Payment (for future use)
    shipping: {
        freeShippingThreshold: 1000,
        standardShippingCost: 50
    }
};

// Helper function to get products
export function getProducts() {
    return BEADSYDE_CONFIG.products;
}

// Helper function to get products by category
export function getProductsByCategory(category) {
    if (category === 'all') {
        return BEADSYDE_CONFIG.products;
    }
    return BEADSYDE_CONFIG.products.filter(p => p.category === category);
}

// Helper function to get product by ID
export function getProductById(id) {
    return BEADSYDE_CONFIG.products.find(p => p.id === id);
}

// Helper function to format price
export function formatPrice(price) {
    return `₹${price}`;
}
