// Bouquet Interaction Handler for Rose Day
class BouquetHandler {
    static init() {
        const roses = document.querySelectorAll('.rose');
        
        roses.forEach(rose => {
            rose.addEventListener('click', (e) => {
                this.selectRose(e.currentTarget);
            });
            
            rose.addEventListener('mouseenter', (e) => {
                this.previewRose(e.currentTarget);
            });
        });

        // Set default rose on load
        this.selectRose(document.querySelector('.rose-red'));
    }

    static selectRose(roseElement) {
        // Remove active class from all roses
        document.querySelectorAll('.rose').forEach(r => r.classList.remove('active'));
        
        // Add active class to selected rose
        roseElement.classList.add('active');

        // Get rose data
        const roseKey = roseElement.getAttribute('data-rose');
        const roseData = ROSE_MEANINGS[roseKey];

        // Update display
        const titleEl = document.getElementById('roseTitle');
        const messageEl = document.getElementById('roseMessage');

        if (titleEl && messageEl) {
            titleEl.textContent = `${roseData.emoji} ${roseData.name}`;
            messageEl.textContent = roseData.text;
        }
    }

    static previewRose(roseElement) {
        // Optional: Add subtle effect on hover
        const roseKey = roseElement.getAttribute('data-rose');
        const roseData = ROSE_MEANINGS[roseKey];
        
        // You could add a subtle tooltip here if desired
    }
}

// Initialize bouquet when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on Day 1
    const content = document.querySelector('.bouquet-container');
    if (content) {
        BouquetHandler.init();
    }
});
