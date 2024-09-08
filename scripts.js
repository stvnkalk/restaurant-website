document.addEventListener("DOMContentLoaded", function() {
    // Get all links with class 'scroll-link'
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    // Add click event listeners to each link
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Get the target section's ID from the link's href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scroll to the target section
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});