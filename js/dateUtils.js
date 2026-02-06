// Date utilities for Valentine's Week
class DateUtils {
    static getCurrentDayInfo() {
        const today = new Date();
        const month = today.getMonth() + 1; // 1-indexed
        const date = today.getDate();

        // Check if within Valentine's Week
        if (month === 2 && date >= 7 && date <= 14) {
            return this.getDayInfoByDate(date);
        }
        
        return null; // Outside Valentine's Week
    }

    static getDayInfoByDate(date) {
        const dayInfo = VALENTINE_CONFIG.days.find(day => day.date === date);
        return dayInfo || null;
    }

    static isValentineWeek() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        return month === 2 && date >= 7 && date <= 14;
    }

    static formatDate(day) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];
        const dateNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        const d = new Date(2026, 1, day); // Feb 2026
        const dayName = dateNames[d.getDay()];
        
        return `${dayName}, February ${day}, 2026`;
    }

    static getDayById(id) {
        return VALENTINE_CONFIG.days.find(day => day.id === id);
    }

    static getAllDays() {
        return VALENTINE_CONFIG.days;
    }
}
