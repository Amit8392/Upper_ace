// This file can be used for any interactive elements
// For now, it's empty, but you could add:
// - Smooth scrolling for anchor links
// - Form validation (though backend validation is crucial)
// - Simple carousel for gallery (using a library like Swiper.js)
// - Mobile navigation toggle (hamburger menu)

console.log("Upper Ace Logistics website loaded!");

// Example for a simple mobile menu toggle (if you implement a hamburger icon in HTML)
// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle'); // Assuming you have a menu-toggle button
//     const nav = document.querySelector('nav ul');
//
//     if (menuToggle && nav) {
//         menuToggle.addEventListener('click', function() {
//             nav.classList.toggle('active'); // Toggle a class to show/hide the menu
//         });
//     }
// });
// This file will handle mobile menu toggling

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active'); // For hamburger animation
        });

        // Optional: Close menu when a link is clicked (useful for single-page apps or smooth scrolling)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            });
        });
    }
});