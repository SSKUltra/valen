// Music Player for Background Music
(function() {
    const musicControl = document.getElementById('musicControl');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    // Set initial volume
    bgMusic.volume = 0.3;

    // Toggle music on click
    musicControl.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicControl.classList.remove('playing');
            musicControl.classList.add('muted');
            musicControl.title = 'Play Music';
            isPlaying = false;
        } else {
            // Try to play - browsers may block autoplay
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicControl.classList.add('playing');
                    musicControl.classList.remove('muted');
                    musicControl.title = 'Pause Music';
                    isPlaying = true;
                }).catch(error => {
                    console.log('Playback prevented:', error);
                });
            }
        }
    });

    // Auto-play attempt on first user interaction with page
    let hasInteracted = false;
    function attemptAutoPlay() {
        if (!hasInteracted) {
            hasInteracted = true;
            // Don't auto-play, let user click
        }
    }

    document.addEventListener('click', attemptAutoPlay, { once: true });
})();
