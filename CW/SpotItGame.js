// Adds an event listener to the document object waiting for the DOMContentLoaded event to fire before executing the enclosed function. 
document.addEventListener('DOMContentLoaded', function() {
	// Retrieves score-value element from HTML script and stores it as score-display
    const score-display = document.getElementById('score-value');
	
	// Initialise score
    let score = 0;

    // Function to handle click event on images
    function handle-click(event) {
        const clicks = event.target;
        // Check if clicked image has a 'clicked' class
        if (!clicks.classList.contains('clicked')) {
            clicks.classList.add('clicked');
            score += 10; // Increase score by 10 for each correct click
            score-display.textContent = score; // Update score display
        }
    }

    // Event listener for image clicks
    document.getElementById('game-area').addEventListener('click', handle-click);

});

function countdown() {
    var seconds = 60;
    function tick() {
        var timer = document.getElementById("timer");
        seconds--;
        timer.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("Game over");
        }
    }
    tick();
}

// start the countdown
countdown();