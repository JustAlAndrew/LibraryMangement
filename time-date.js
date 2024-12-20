function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Convert to Philippine Time (UTC+8)
    const philippineTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

    // Format the time
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const time = philippineTime.toLocaleTimeString('en-US', options);

    // Format the date
    const dateOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const date = philippineTime.toLocaleDateString('en-US', dateOptions);

    // Update the DOM elements
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
document.addEventListener("DOMContentLoaded", updateClock);
