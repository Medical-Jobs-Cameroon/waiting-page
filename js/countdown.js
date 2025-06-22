/**
 * Countdown timer for the coming soon page
 */
const countdown = (function() {
    // Set the launch date - 2 months and 2 weeks from now (fixed date)
    const getTargetDate = function() {
        // Calculate target date: August 30, 2025 (example fixed date)
        // Current date is June 22, 2025 based on system prompt, so we add 2 months and 2 weeks
        return new Date(2025, 8, 6, 0, 0, 0); // September 6, 2025 (2 months and 2 weeks from June 22)
    };

    const launchDate = getTargetDate();

    // Store the launch date in localStorage to ensure it stays consistent
    if (!localStorage.getItem('launchDate')) {
        localStorage.setItem('launchDate', launchDate.getTime());
    }

    // DOM elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    /**
     * Update the countdown timer
     */
    function updateCountdown() {
        const currentTime = new Date();
        const storedLaunchDate = parseInt(localStorage.getItem('launchDate')) || launchDate.getTime();
        const diff = storedLaunchDate - currentTime.getTime();

        // Calculate time values
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        // Handle case where countdown is negative (launch date passed)
        if (diff < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        // Update DOM
        daysEl.textContent = formatTime(days);
        hoursEl.textContent = formatTime(hours);
        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
    }

    /**
     * Format time values to always have two digits
     */
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Initial call
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
})();
