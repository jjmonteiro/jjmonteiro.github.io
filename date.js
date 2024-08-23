//date.js

function getSystemDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const now = new Date();
    const dayName = days[now.getDay()]; // Day of the week
    const monthName = months[now.getMonth()]; // Month name
    const dayNumber = now.getDate(); // Day of the month
    const year = now.getFullYear(); // Year
    const time = now.toTimeString().split(' ')[0]; // Time in HH:MM:SS format
    const timezone = now.toTimeString().split(' ')[1]; // Time zone

    return `${dayName} ${monthName} ${dayNumber} ${time} ${timezone} ${year}`;
}