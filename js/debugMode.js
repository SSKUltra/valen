// Debug Mode Handler
class DebugMode {
    static isEnabled() {
        const params = new URLSearchParams(window.location.search);
        return params.get('debug') === 'true';
    }

    static init() {
        if (!this.isEnabled()) return;

        const debugIndicator = document.getElementById('debugIndicator');
        if (debugIndicator) {
            debugIndicator.style.display = 'block';
        }

        this.createDaySelector();
    }

    static createDaySelector() {
        const daySelector = document.getElementById('daySelector');
        if (!daySelector) return;

        const days = DateUtils.getAllDays();
        
        days.forEach(day => {
            const button = document.createElement('button');
            button.className = 'day-btn';
            button.textContent = `Day ${day.id}: ${day.name}`;
            button.onclick = () => this.selectDay(day.id);
            daySelector.appendChild(button);
        });
    }

    static selectDay(dayId) {
        // Store selected day in sessionStorage
        sessionStorage.setItem('debugSelectedDay', dayId);
        
        // Update UI
        this.updateDayButtons(dayId);
        
        // Render the selected day
        this.renderDay(dayId);
    }

    static updateDayButtons(activeId) {
        const buttons = document.querySelectorAll('.day-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Find and highlight active button
        const buttons_array = Array.from(buttons);
        const activeBtn = buttons_array[activeId - 1];
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    static renderDay(dayId) {
        const dayInfo = DateUtils.getDayById(dayId);
        const contentArea = document.getElementById('contentArea');
        const dayTitle = document.getElementById('dayTitle');
        const dayDate = document.getElementById('dayDate');

        if (dayInfo) {
            dayTitle.textContent = `${dayInfo.emoji} ${dayInfo.name}`;
            dayDate.textContent = DateUtils.formatDate(dayInfo.date);
            contentArea.innerHTML = DayContent.renderContent(dayId);
        }
    }

    static getSelectedDay() {
        return parseInt(sessionStorage.getItem('debugSelectedDay')) || null;
    }
}
