// chai aur code provided code.
const clock = document.getElementById('clock')


setInterval(function() {
    
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


// This code is from trae ai
//  Get the clock element
const clockElement = document.getElementById('clock');

// Function to update the clock
function updateClock() {
    const now = new Date();
    
    // Format the time with hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');
    
    // Display the time
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    // Add a pulsing effect on seconds change
    clockElement.classList.add('pulse');
    setTimeout(() => {
        clockElement.classList.remove('pulse');
    }, 500);
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);