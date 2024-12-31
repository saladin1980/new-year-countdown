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

// Function to add user time zone to the list
function addUserTimeZone(timeZone) {
    const userTimezonesDiv = document.getElementById("user-timezones");
    const newUser  = document.createElement("div");
    newUser .innerHTML = `User  from: ${timeZone}`;
    userTimezonesDiv.appendChild(newUser );
}

// Check local storage for existing users
let users = JSON.parse(localStorage.getItem("users")) || [];

// If the user is not already in the list, add them
if (!users.includes(userTimeZone)) {
    users.push(userTimeZone);
    localStorage.setItem("users", JSON.stringify(users));
}

// Display all users
users.forEach(timeZone => {
    addUserTimeZone(timeZone);
});
