// Main Application Logic
class App {
    static init() {
        // Initialize debug mode
        DebugMode.init();

        // Determine which day to show
        let dayToShow;
        
        if (DebugMode.isEnabled()) {
            // In debug mode, check if a day is selected via UI
            dayToShow = DebugMode.getSelectedDay() || DateUtils.getCurrentDayInfo()?.id;
        } else {
            // Normal mode: show only current day
            dayToShow = DateUtils.getCurrentDayInfo()?.id;
        }

        // Render the day
        if (dayToShow) {
            this.renderDay(dayToShow);
        } else {
            this.renderOutsideValentineWeek();
        }
    }

    static renderDay(dayId) {
        const dayInfo = DateUtils.getDayById(dayId);
        const contentArea = document.getElementById('contentArea');
        const dayTitle = document.getElementById('dayTitle');
        const dayDate = document.getElementById('dayDate');

        if (dayInfo) {
            // Update header
            dayTitle.textContent = `${dayInfo.emoji} ${dayInfo.name}`;
            dayDate.textContent = DateUtils.formatDate(dayInfo.date);
            
            // Render content
            contentArea.innerHTML = DayContent.renderContent(dayId);

            // Initialize day-specific effects
            ContentUtils.initDayEffects(dayId);

            // Highlight active day in debug mode
            if (DebugMode.isEnabled()) {
                DebugMode.updateDayButtons(dayId);
            }
        }
    }

    static renderOutsideValentineWeek() {
        const contentArea = document.getElementById('contentArea');
        const dayTitle = document.getElementById('dayTitle');
        const dayDate = document.getElementById('dayDate');

        dayTitle.textContent = '💕 Valentine\'s Week Coming Soon!';
        dayDate.textContent = 'February 7-14, 2026';
        
        contentArea.innerHTML = `
            <div class="coming-soon text-center">
                <h2>Coming Soon...</h2>
                <p>This website will be live from February 7th to 14th, 2026.</p>
                <p>Check back during Valentine's week to see daily surprises!</p>
                <div class="mt-30">
                    <p style="font-size: 3rem;">❤️ 💕 💖</p>
                </div>
            </div>
        `;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
