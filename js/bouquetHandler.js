// Bouquet Interaction Handler for Rose Day - Custom Implementation
class BouquetHandler {
    static messages = {
        red: {
            title: "The Soul Soother",
            body: "To the woman who is my peace. You are a calm soul who makes the world quiet down whenever we talk. Thank you for blending into my life so naturally, as if you were always the missing piece. I'm the luckiest man to have your understanding heart by my side."
        },
        yellow: {
            title: "Smol Penguin & Her Giant",
            body: "For my favorite 'Smol Penguin' from your 'Giant.' I promise to always be the person you can put flowers on and call a 'Pinky Gudiya.' Your laugh after taking those photos is my favorite sound in the world!"
        },
        pink: {
            title: "The Emotional Anchor",
            body: "Thank you for being my strength. You are a powerful woman who sees all my flaws and breakdowns and chooses to be my support anyway. This rose is for the way you care for me when I'm at my weakest."
        },
        white: {
            title: "The Golden Hour Promise",
            body: "For our future. I can't wait for the day I'm not sending digital flowers, but waiting for you to come home from work with hot chai and snacks. We'll watch the sunset, and whenever you want to go out, you can just sit on top of me and let's go—your forever hangout buddy."
        },
        lavender: {
            title: "The Cringe Tribute",
            body: "Since this is your favorite color, it is now officially my favorite color too. (Did that make you cringe? Good.) I'll gladly be the cringiest guy on earth just to see that specific reaction of yours. I love it!"
        },
        orange: {
            title: "The 'Annoyance' Blossom",
            body: "This one is for all the times I irritate you just to see your reaction. I know I overstep sometimes, but thank you for being so understanding and forgetting my nonsense so quickly. You're the best for putting up with me!"
        }
    };

    static colorMap = {
        red: '#e63946',
        yellow: '#ffb703',
        pink: '#ff8fa3',
        white: '#dee2e6',
        lavender: '#be95ff',
        orange: '#fb8500'
    };

    static init() {
        const roses = document.querySelectorAll('.rose-wrapper');
        
        roses.forEach(rose => {
            rose.addEventListener('click', (e) => {
                const color = e.currentTarget.getAttribute('data-color');
                this.showMessage(color);
            });
        });

        // Create rose petals effect
        this.createRosePetals();
    }

    static showMessage(color) {
        const card = document.getElementById('roseMessageCard');
        const messageText = document.getElementById('roseMessageText');
        const data = this.messages[color];

        if (!card || !messageText || !data) return;

        // Change card border color to match the rose
        card.style.borderColor = this.colorMap[color];
        
        // Add a little bounce to the card
        card.style.transform = 'scale(1.02)';
        setTimeout(() => card.style.transform = 'scale(1)', 200);

        // Update text
        messageText.innerHTML = `<h2 style="color:${this.colorMap[color]};">${data.title}</h2><p>${data.body}</p>`;
        
        // If it's lavender, make the font a bit "extra"
        if (color === 'lavender') {
            messageText.style.fontStyle = 'italic';
        } else {
            messageText.style.fontStyle = 'normal';
        }
    }

    static createRosePetals() {
        // Only create petals on Rose Day (Day 1)
        const petalColors = ['#e63946', '#ffb703', '#ff8fa3', '#f8f9fa', '#be95ff', '#fb8500'];
        const petalCount = 15;

        for (let i = 0; i < petalCount; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.className = 'rose-petal';
                petal.textContent = '🌹';
                petal.style.left = `${Math.random() * 100}%`;
                petal.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];
                petal.style.fontSize = `${15 + Math.random() * 15}px`;
                petal.style.animationDuration = `${8 + Math.random() * 5}s`;
                petal.style.animationDelay = `${Math.random() * 5}s`;
                
                document.body.appendChild(petal);

                // Remove petal after animation
                setTimeout(() => petal.remove(), 15000);
            }, i * 300);
        }

        // Continuously add petals
        setInterval(() => {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.textContent = '🌹';
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];
            petal.style.fontSize = `${15 + Math.random() * 15}px`;
            petal.style.animationDuration = `${8 + Math.random() * 5}s`;
            
            document.body.appendChild(petal);

            setTimeout(() => petal.remove(), 15000);
        }, 2000);
    }
}

// Initialize bouquet when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on Day 1
    const content = document.querySelector('.bouquet-container-custom');
    if (content) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => BouquetHandler.init(), 100);
    }
});
