// Utilities for content management
class ContentUtils {
    // Add confetti effect for Valentine's Day
    static triggerConfetti() {
        const confettiPieces = 50;
        const container = document.body;

        for (let i = 0; i < confettiPieces; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${['#ff6b9d', '#ffa502', '#ffd700', '#ff69b4'][Math.floor(Math.random() * 4)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                border-radius: 50%;
                pointer-events: none;
                animation: fall ${2 + Math.random() * 2}s linear forwards;
                z-index: 999;
            `;
            container.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }
    }

    // Add hearts floating animation
    static addFloatingHearts(count = 5) {
        const container = document.getElementById('contentArea');
        if (!container) return;

        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '❤️';
                heart.style.cssText = `
                    position: fixed;
                    font-size: ${20 + Math.random() * 20}px;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 50}%;
                    pointer-events: none;
                    opacity: 0.7;
                    animation: floatUp ${3 + Math.random() * 2}s ease-in forwards;
                    z-index: 100;
                `;
                document.body.appendChild(heart);

                setTimeout(() => heart.remove(), 5000);
            }, i * 200);
        }
    }

    // Play a simple sound effect (if audio file exists)
    static playSound(soundName) {
        const audioMap = {
            'rose': '/sounds/rose.mp3',
            'propose': '/sounds/propose.mp3',
            'chocolate': '/sounds/chocolate.mp3',
            'teddy': '/sounds/teddy.mp3',
            'promise': '/sounds/promise.mp3',
            'hug': '/sounds/hug.mp3',
            'kiss': '/sounds/kiss.mp3',
            'valentine': '/sounds/valentine.mp3'
        };

        if (audioMap[soundName]) {
            const audio = new Audio(audioMap[soundName]);
            audio.play().catch(() => {
                // Silently fail if audio doesn't exist
            });
        }
    }

    // Animate text reveal
    static animateTextReveal(element) {
        const text = element.textContent;
        element.textContent = '';
        
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    // Initialize day-specific effects
    static initDayEffects(dayId) {
        // Valentine's Day gets special treatment
        if (dayId === 8) {
            this.triggerConfetti();
            setTimeout(() => this.addFloatingHearts(8), 500);
        }
    }
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
