// Countdown Timer Target Date
const countdownDate = new Date("January 1, 2025 00:00:00").getTime();

// Function to calculate countdown for a specific time zone
function calculateCountdown(timeZone) {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000; // Convert to milliseconds
    const localTime = new Date(now.getTime() + utcOffset);
    const targetDate = new Date(countdownDate + (localTime.getTimezoneOffset() * 60000));
    const distance = targetDate.getTime() - now.getTime();

    if (distance < 0) {
        return "EXPIRED";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Function to add user time zone and countdown to the list
function addUserTimeZone(timeZone) {
    const userTimezonesDiv = document.getElementById("user-timezones");
    const newUser  = document.createElement("div");
    newUser .className = "user";
    newUser .innerHTML = `User  From: ${timeZone} - ${calculateCountdown(timeZone)}`;
    userTimezonesDiv.appendChild(newUser );
}

// Check local storage for existing users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Get User Time Zone
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// If the user is not already in the list, add them
if (!users.includes(userTimeZone)) {
    users.push(userTimeZone);
    localStorage.setItem("users", JSON.stringify(users));
}

// Function to refresh the user list
function refreshUserList() {
    const userTimezonesDiv = document.getElementById("user-timezones");
    userTimezonesDiv.innerHTML = ""; // Clear existing users
    users.forEach(timeZone => {
        addUserTimeZone(timeZone);
    });
}

// Initial display of users
refreshUserList();

// Refresh the user list every 10 seconds
setInterval(refreshUserList(), 1000);
