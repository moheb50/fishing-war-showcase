// Function to handle install button click
function handleInstall() {
    window.open('https://play.google.com/store/apps/details?id=com.hamor_era_fishing_war_game', '_blank');
}

// Add smooth fade-in animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add loading class to images for lazy loading effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Add scroll animation for screenshots on mobile
const screenshotsGrid = document.querySelector('.screenshots-grid');
if (screenshotsGrid && window.innerWidth < 768) {
    let isDown = false;
    let startX;
    let scrollLeft;

    screenshotsGrid.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - screenshotsGrid.offsetLeft;
        scrollLeft = screenshotsGrid.scrollLeft;
    });

    screenshotsGrid.addEventListener('mouseleave', () => {
        isDown = false;
    });

    screenshotsGrid.addEventListener('mouseup', () => {
        isDown = false;
    });

    screenshotsGrid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsGrid.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsGrid.scrollLeft = scrollLeft - walk;
    });
}
