// Countdown Timer
const countdownDate = new Date("January 1, 2025 00:00:00").getTime();
const countdownElement = document.getElementById("countdown-timer");

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "EXPIRED";
    }
}, 1000);

// Get User Time Zone
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Display User Time Zone
function addUser TimeZone(timeZone) {
    const userTimezonesDiv = document.getElementById("user-timezones");
    const newUser  = document.createElement("div");
    newUser .innerHTML = `User  from: ${timeZone}`;
    userTimezonesDiv.appendChild(newUser );
}

// Add the user's time zone to the list
addUser TimeZone(userTimeZone);
