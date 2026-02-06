// Day-specific content
const DAY_CONTENT = {
    1: {
        title: '🌹 Rose Day',
        message: `<p>Today is Rose Day - a day to express your love and gratitude!</p>
                  <p>Just like a golden retriever's unconditional love, I'm grateful for everything you are.</p>`,
        cta: 'Explore more on Day 1'
    },
    2: {
        title: '💍 Propose Day',
        message: `<p>Today is Propose Day - a day of grand declarations!</p>
                  <p>Every day with you feels like saying "I choose you" all over again.</p>`,
        cta: 'Explore more on Day 2'
    },
    3: {
        title: '🍫 Chocolate Day',
        message: `<p>Today is Chocolate Day - sweetness celebrates sweetness!</p>
                  <p>You're the sweetest part of my life, Frieren.</p>`,
        cta: 'Explore more on Day 3'
    },
    4: {
        title: '🧸 Teddy Day',
        message: `<p>Today is Teddy Day - a day for comfort and cuddles!</p>
                  <p>You make everything cozy, even when you're trying to copy me.</p>`,
        cta: 'Explore more on Day 4'
    },
    5: {
        title: '🤝 Promise Day',
        message: `<p>Today is Promise Day - a day to make meaningful commitments!</p>
                  <p>I promise to love you, even if you're a tiny penguin trying to be me.</p>`,
        cta: 'Explore more on Day 5'
    },
    6: {
        title: '🤗 Hug Day',
        message: `<p>Today is Hug Day - a day for warmth and affection!</p>
                  <p>Missing your hugs already, baby pants.</p>`,
        cta: 'Explore more on Day 6'
    },
    7: {
        title: '😘 Kiss Day',
        message: `<p>Today is Kiss Day - a day for romantic affection!</p>
                  <p>Every moment with you is a kiss to my heart.</p>`,
        cta: 'Explore more on Day 7'
    },
    8: {
        title: '💕 Valentine\'s Day',
        message: `<p>Happy Valentine's Day, Zenia!</p>
                  <p>You are my favorite adventure, my greatest joy, and my forever love.</p>
                  <p>Happy Valentine's Week - thank you for making these 8 days special by being YOU.</p>`,
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
            <div class="day-content">
                <h2>${content.title}</h2>
                <div class="message">
                    ${content.message}
                </div>
                <div class="cta-button mt-30">
                    <button class="btn-primary">${content.cta}</button>
                </div>
            </div>
        `;
    }
}
