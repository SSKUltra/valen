// Day-specific content with themes and enhanced structure
const DAY_CONTENT = {
    1: {
        title: '🌹 Rose Day',
        theme: 'day-theme-rose',
        message: `<p><em>"Finally, a bouquet you don't have to leave behind."</em></p>
                  <p style="font-size: 0.95rem; color: #999;">Guaranteed never to wilt, even through airport security.</p>`,
        cta: 'Pick a rose',
        type: 'interactive-bouquet'
    },
    2: {
        title: '💍 Propose Day',
        theme: 'day-theme-propose',
        message: `<p>Today is Propose Day - a day of grand declarations!</p>
                  <p>Every day with you feels like saying "I choose you" all over again.</p>`,
        cta: 'Continue to memories'
    },
    3: {
        title: '🍫 Chocolate Day',
        theme: 'day-theme-chocolate',
        message: `<p>Today is Chocolate Day - sweetness celebrates sweetness!</p>
                  <p>You're the sweetest part of my life, Frieren.</p>`,
        cta: 'View special moments'
    },
    4: {
        title: '🧸 Teddy Day',
        theme: 'day-theme-teddy',
        message: `<p>Today is Teddy Day - a day for comfort and cuddles!</p>
                  <p>You make everything cozy, even when you're trying to copy me.</p>`,
        cta: 'See more cuddles'
    },
    5: {
        title: '🤝 Promise Day',
        theme: 'day-theme-promise',
        message: `<p>Today is Promise Day - a day to make meaningful commitments!</p>
                  <p>I promise to love you, even if you're a tiny penguin trying to be me.</p>`,
        cta: 'Discover my promises'
    },
    6: {
        title: '🤗 Hug Day',
        theme: 'day-theme-hug',
        message: `<p>Today is Hug Day - a day for warmth and affection!</p>
                  <p>Missing your hugs already, baby pants.</p>`,
        cta: 'Feel the warmth'
    },
    7: {
        title: '😘 Kiss Day',
        theme: 'day-theme-kiss',
        message: `<p>Today is Kiss Day - a day for romantic affection!</p>
                  <p>Every moment with you is a kiss to my heart.</p>`,
        cta: 'Romantic surprises await'
    },
    8: {
        title: '💕 Valentine\'s Day',
        theme: 'day-theme-valentine',
        message: `<p>Happy Valentine's Day, Zenia!</p>
                  <p>You are my favorite adventure, my greatest joy, and my forever love.</p>
                  <p>Thank you for making these 8 days special by being YOU.</p>`,
        cta: 'Forever yours ❤️'
    }
};

const ROSE_MEANINGS = {
    red: {
        name: 'The Soul Soother',
        color: '#ff4757',
        emoji: '❤️',
        text: 'To the woman who is my peace. You are a calm soul who makes the world quiet down whenever we talk. Thank you for blending into my life so naturally, as if you were always the missing piece. I\'m the luckiest man to have your understanding heart by my side.'
    },
    yellow: {
        name: 'The Smol Penguin & Her Giant',
        color: '#ffd700',
        emoji: '🐧',
        text: 'For my favorite \'Smol Penguin\' from your \'Giant.\' I promise to always be the person you can put flowers on and call a \'Pinky Gudiya\' (Pink Doll). Your laugh after taking those photos is my favorite sound in the world.'
    },
    pink: {
        name: 'The Emotional Anchor',
        color: '#ff69b4',
        emoji: '💪',
        text: 'Thank you for being my strength. You are a powerful woman who sees all my flaws and breakdowns and chooses to be my support anyway. This rose is for the way you care for me when I\'m at my weakest.'
    },
    white: {
        name: 'The Golden Hour Promise',
        color: '#ffffff',
        emoji: '🌅',
        text: 'For our future. I can\'t wait for the day I\'m not sending digital flowers, but waiting for you to come home from work with hot chai and snacks. We\'ll watch the sunset, and whenever you want to go out, you can just sit on top of me and let\'s go—your forever hangout buddy.'
    },
    lavender: {
        name: 'The Cringe King\'s Tribute',
        color: '#b19cd9',
        emoji: '💜',
        text: 'Since this is your favorite color, it is now officially my favorite color too. (Did that make you cringe? Good.) I\'ll gladly be the cringiest guy on earth just to see that specific reaction of yours. I love it.'
    },
    orange: {
        name: 'The \'Annoyance\' Blossom',
        color: '#ff7f00',
        emoji: '🤪',
        text: 'This one is for all the times I irritate you just to see your reaction. I know I overstep sometimes, but thank you for being so understanding and forgetting my nonsense so quickly. You\'re the best for putting up with me.'
    }
};

class DayContent {
    static getContent(dayId) {
        return DAY_CONTENT[dayId] || null;
    }

    static renderContent(dayId) {
        const content = this.getContent(dayId);
        if (!content) return '<p>No content found for this day.</p>';

        // Special handling for interactive bouquet on Day 1
        if (dayId === 1) {
            // Use the standalone rose-day.html file
            return `<iframe src="rose-day.html" style="width: 100%; height: 85vh; border: none; border-radius: 15px;" title="Rose Day Bouquet"></iframe>`;
        }
        
        // Special handling for Propose Day on Day 2
        if (dayId === 2) {
            return `<iframe src="propose-day.html" style="width: 100%; height: 85vh; border: none; border-radius: 15px;" title="Propose Day"></iframe>`;
        }

        // Special handling for Chocolate Day on Day 3
        if (dayId === 3) {
            return `<iframe src="chocolate-day.html" style="width: 100%; height: 85vh; border: none; border-radius: 15px;" title="Chocolate Day"></iframe>`;
        }

        // Special handling for Teddy Day on Day 4
        if (dayId === 4) {
            return `<iframe src="teddy-day.html" style="width: 100%; height: 85vh; border: none; border-radius: 15px;" title="Teddy Day"></iframe>`;
        }

        return `
            <div class="day-content ${content.theme}">
                <h2>${content.title}</h2>
                <div class="message">
                    ${content.message}
                </div>
                <div id="mediaGallery${dayId}" class="media-gallery"></div>
                <div class="cta-button mt-30">
                    <button class="btn-primary">${content.cta}</button>
                </div>
            </div>
        `;
    }

    static renderBouquet() {
        return `
            <div class="day-content day-theme-rose bouquet-container-custom">
                <header class="rose-header">
                    <h1 class="rose-title-main">The Forever Bouquet</h1>
                    <p class="rose-subtitle">Since you can never take the physical ones home with you through airport security... I made you a digital bouquet that stays in your pocket forever. ❤️</p>
                </header>

                <div class="bouquet-container-grid">
                    <!-- Red Rose -->
                    <div class="rose-wrapper" data-color="red">
                        <svg class="rose-svg" viewBox="0 0 100 100">
                            <path fill="#e63946" d="M50 20 C60 0 90 0 90 30 C90 60 50 90 50 90 C50 90 10 60 10 30 C10 0 40 0 50 20" />
                            <path fill="#d00000" d="M50 30 C55 20 75 20 75 40 C75 55 50 75 50 75 C50 75 25 55 25 40 C25 20 45 20 50 30" />
                        </svg>
                    </div>

                    <!-- Yellow Rose -->
                    <div class="rose-wrapper" data-color="yellow">
                        <svg class="rose-svg" viewBox="0 0 100 100">
                            <path fill="#ffb703" d="M50 20 C60 0 90 0 90 30 C90 60 50 90 50 90 C50 90 10 60 10 30 C10 0 40 0 50 20" />
                            <path fill="#fb8500" d="M50 30 C55 20 75 20 75 40 C75 55 50 75 50 75 C50 75 25 55 25 40 C25 20 45 20 50 30" />
                        </svg>
                    </div>

                    <!-- Pink Rose -->
                    <div class="rose-wrapper" data-color="pink">
                        <svg class="rose-svg" viewBox="0 0 100 100">
                            <path fill="#ff8fa3" d="M50 20 C60 0 90 0 90 30 C90 60 50 90 50 90 C50 90 10 60 10 30 C10 0 40 0 50 20" />
                            <path fill="#ff4d6d" d="M50 30 C55 20 75 20 75 40 C75 55 50 75 50 75 C50 75 25 55 25 40 C25 20 45 20 50 30" />
                        </svg>
                    </div>

                    <!-- White Rose -->
                    <div class="rose-wrapper" data-color="white">
                        <svg class="rose-svg" viewBox="0 0 100 100">
                            <path fill="#f8f9fa" d="M50 20 C60 0 90 0 90 30 C90 60 50 90 50 90 C50 90 10 60 10 30 C10 0 40 0 50 20" />
                            <path fill="#dee2e6" d="M50 30 C55 20 75 20 75 40 C75 55 50 75 50 75 C50 75 25 55 25 40 C25 20 45 20 50 30" />
                        </svg>
                    </div>

                    <!-- Lavender Rose -->
                    <div class="rose-wrapper" data-color="lavender">
                        <svg class="rose-svg" viewBox="0 0 100 100">
                            <path fill="#be95ff" d="M50 20 C60 0 90 0 90 30 C90 60 50 90 50 90 C50 90 10 60 10 30 C10 0 40 0 50 20" />
                            <path fill="#9d4edd" d="M50 30 C55 20 75 20 75 40 C75 55 50 75 50 75 C50 75 25 55 25 40 C25 20 45 20 50 30" />
                        </svg>
                    </div>

                    <!-- Orange Rose -->
                    <div class="rose-wrapper orange" data-color="orange">
                        <svg class="rose-svg" viewBox="0 0 100 100">
                            <path fill="#fb8500" d="M50 20 C60 0 90 0 90 30 C90 60 50 90 50 90 C50 90 10 60 10 30 C10 0 40 0 50 20" />
                            <path fill="#e85d04" d="M50 30 C55 20 75 20 75 40 C75 55 50 75 50 75 C50 75 25 55 25 40 C25 20 45 20 50 30" />
                        </svg>
                    </div>
                </div>

                <div class="message-card" id="roseMessageCard">
                    <div class="message-content" id="roseMessageText">
                        <span id="placeholder-text">Pick a rose from your bouquet to read a message...</span>
                    </div>
                </div>
            </div>
        `;
    }

    static addMediaToDay(dayId, mediaItems) {
        const gallery = document.getElementById(`mediaGallery${dayId}`);
        if (!gallery) return;

        mediaItems.forEach(item => {
            const mediaDiv = document.createElement('div');
            mediaDiv.className = 'media-item';
            
            if (item.type === 'image') {
                mediaDiv.innerHTML = `
                    <img src="${item.src}" alt="${item.caption || 'Memory'}">
                    ${item.caption ? `<div class="media-caption">${item.caption}</div>` : ''}
                `;
            } else if (item.type === 'video') {
                mediaDiv.innerHTML = `
                    <video width="100%" height="250" controls style="object-fit: cover;">
                        <source src="${item.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    ${item.caption ? `<div class="media-caption">${item.caption}</div>` : ''}
                `;
            }
            
            gallery.appendChild(mediaDiv);
        });
    }
}
