function updateTime() {
    const newTime = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[newTime.getDay()];
    const time = newTime.toLocaleTimeString();
    document.getElementById("current-day").textContent = `${day} ,`;
    document.getElementById("current-time").textContent = `${time}`;
    // document.getElementById("current-time").textContent = newTime.toLocaleTimeString();
}

// Update time every second
setInterval(updateTime, 1000);

// Update immediately on page load using addEventListener
window.addEventListener("load", updateTime);