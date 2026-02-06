# Valentine's Week Website 💕

A cute, animated, personalized static website celebrating Valentine's week (Feb 7-14, 2026) with daily surprises for Zenia.

## Features

- **Date-Based Content**: Website shows different content based on the current day during Valentine's week
- **Debug Mode**: Access `?debug=true` to preview all days and test functionality
- **Cute & Classy Design**: Animated, colorful interface with smooth transitions
- **Fully Static**: No backend required - pure HTML/CSS/JavaScript

## Structure

```
valen/
├── index.html           # Main HTML file
├── css/
│   └── style.css        # Styling and animations
├── js/
│   ├── config.js        # Valentine's week configuration
│   ├── dateUtils.js     # Date detection utilities
│   ├── dayContent.js    # Daily content templates
│   ├── debugMode.js     # Debug mode functionality
│   └── main.js          # Main app logic
├── img/                 # Images folder (for future use)
└── README.md            # This file
```

## How to Use

### Normal Mode
Simply open `index.html` in your browser during Valentine's week (Feb 7-14, 2026), and it will automatically display the content for that day.

### Debug Mode
To preview all days and test functionality, add `?debug=true` to the URL:
```
file:///path/to/valen/index.html?debug=true
```

This will show:
- A day selector at the top
- Ability to click any day to preview its content

## Valentine's Week Days

1. **Rose Day** (Feb 7) - Express Love & Gratitude
2. **Propose Day** (Feb 8) - Declaration of Love
3. **Chocolate Day** (Feb 9) - Sweetness & Indulgence
4. **Teddy Day** (Feb 10) - Comfort & Cuddles
5. **Promise Day** (Feb 11) - Commitments & Promises
6. **Hug Day** (Feb 12) - Physical Affection & Warmth
7. **Kiss Day** (Feb 13) - Romantic Affection
8. **Valentine's Day** (Feb 14) - Complete Love Celebration

## Deployment

This website is hosted on GitHub Pages. To deploy:

1. Push all files to GitHub repository
2. Enable GitHub Pages in repository settings
3. Share the URL with Zenia!

## Future Features

- **Mini Games**: Personalized games for each day with high score tracking
- **Photo Integration**: Daily personalized photos and memories
- **Share Functionality**: Share high scores and messages

---

Made with ❤️ for Zenia
