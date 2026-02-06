// Day-specific content with themes and enhanced structure
const DAY_CONTENT = {
    1: {
        title: '🌹 Rose Day',
        theme: 'day-theme-rose',
        message: `<p>Today is Rose Day - a day to express your love and gratitude!</p>
                  <p>Just like a golden retriever's unconditional love, I'm grateful for everything you are.</p>`,
        cta: 'See more memories'
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

class DayContent {
    static getContent(dayId) {
        return DAY_CONTENT[dayId] || null;
    }

    static renderContent(dayId) {
        const content = this.getContent(dayId);
        if (!content) return '<p>No content found for this day.</p>';

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
