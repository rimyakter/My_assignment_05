let countUp = document.getElementById("nav-task").innerText; // Initialize increment count
let countDown = document.getElementById("task").innerText; // Initialize decrement count
let totalButtons = document.querySelectorAll(".complete-btn").length; //total completed button count
let completedButtons = 0; // initial count for completed button

// Function to update the displayed count
function updateDisplay() {
    document.getElementById("nav-task").innerText = countUp;
    document.getElementById("task").innerText = countDown;

}

// Function to handle button clicks
function handleClick(event) {
    alert("Board Updated Successfully")
    countUp++;
    countDown--; 
    updateDisplay(); 


    // Find the parent div of the clicked completed button

    let button = event.target;
    let parentDiv = button.parentNode;
    let parentContainer = parentDiv.parentNode;
    let headings = parentContainer.getElementsByTagName("h2");
    let headingText = "Unknown";
    
    if (headings.length > 0) {
        headingText = headings[0].innerText;
    }
    // Get the current date when click a button
    let currentTime = new Date().toLocaleTimeString();

    // Remove all  p tags inside the activity log section
    let activityBtn = document.getElementById("activity-btn")
    .addEventListener("click", function(){
        newP.innerText = "";
    });
    
    // Create  new p tag dynamically and set its text to the h2's inner text
    let newP = document.createElement("p");
    newP.innerText = "You have completed the task " + headingText + " at " + currentTime;
    

    // Style the new paragraph
    newP.style.fontSize = "12px";
    newP.style.marginTop = "5px";
    newP.style.padding = "10px";
    
    // Append the new p tag inside the text section
    let activitySection = document.getElementById("activity-container");
    activitySection.appendChild(newP);


    // Disable the clicked button
    button.disabled = true;
    button.style.backgroundColor = "#cccccc";
    button.style.cursor = "not-allowed";

    // Increment the count of completed buttons
    completedButtons++;

    // Check if all buttons have been clicked
    if (completedButtons === totalButtons) {
        alert("congrats! You have completed the current task");
    }
}



// Attach event listeners to all completed buttons

document.querySelectorAll(".complete-btn").forEach((button) => {
    button.addEventListener("click", handleClick);
    updateDisplay();
});

    

