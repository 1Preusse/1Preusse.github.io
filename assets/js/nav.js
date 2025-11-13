document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.main-nav ul');

    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && event.target !== navToggle) {
            navMenu.classList.remove('show');
        }
    });
});
