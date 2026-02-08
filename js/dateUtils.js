// Date utilities for Valentine's Week
class DateUtils {
    static getCurrentDayInfo() {
        const now = new Date();
        const month = now.getMonth() + 1; // 1-indexed
        const date = now.getDate();
        const hour = now.getHours();

        // If it's 11 PM (23:00) or later, show the next day's content
        let effectiveDate = date;
        let effectiveMonth = month;
        
        if (hour >= 23) {
            effectiveDate = date + 1;
            // Handle month transition if needed
            if (effectiveDate > 28 && month === 2) {
                const daysInFeb = new Date(now.getFullYear(), 2, 0).getDate();
                if (effectiveDate > daysInFeb) {
                    effectiveDate = 1;
                    effectiveMonth = 3;
                }
            }
        }

        // Check if within Valentine's Week
        if (effectiveMonth === 2 && effectiveDate >= 7 && effectiveDate <= 14) {
            return this.getDayInfoByDate(effectiveDate);
        }
        
        return null; // Outside Valentine's Week
    }

    static getDayInfoByDate(date) {
        const dayInfo = VALENTINE_CONFIG.days.find(day => day.date === date);
        return dayInfo || null;
    }

    static isValentineWeek() {
        const now = new Date();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const hour = now.getHours();
        
        let effectiveDate = date;
        let effectiveMonth = month;
        
        if (hour >= 23) {
            effectiveDate = date + 1;
            if (effectiveDate > 28 && month === 2) {
                const daysInFeb = new Date(now.getFullYear(), 2, 0).getDate();
                if (effectiveDate > daysInFeb) {
                    effectiveDate = 1;
                    effectiveMonth = 3;
                }
            }
        }
        
        return effectiveMonth === 2 && effectiveDate >= 7 && effectiveDate <= 14;
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
