document.addEventListener('DOMContentLoaded', (event) => {
    
    const totalTimeInMinutes = 2880; 
    const elapsedTimeInMinutes = 380; 
    const progressBar = document.getElementById('progress-bar');
    const timeDisplay = document.getElementById('time-display');   
    const percentage = (elapsedTimeInMinutes / totalTimeInMinutes) * 100;

    progressBar.style.width = percentage + '%';
    progressBar.setAttribute('aria-valuenow', percentage);

    if (percentage >= 50 && percentage <= 100) {
        progressBar.classList.add('bg-warning');
    } else if (percentage > 100) {
        progressBar.classList.add('bg-danger'); 
    }
    
    function formatTime(minutes) {
        const days = Math.floor(minutes / (24 * 60));
        const hours = Math.floor((minutes % (24 * 60)) / 60);
        const mins = minutes % 60;
        return `${days}d ${hours}h ${mins}m`;
    }
    
    timeDisplay.textContent = `Tempo decorrido: ${formatTime(elapsedTimeInMinutes)} / Tempo total: ${formatTime(totalTimeInMinutes)}`;
});