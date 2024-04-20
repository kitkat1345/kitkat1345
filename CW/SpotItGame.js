// Adds an event listener to the document object waiting for the DOMContentLoaded event to fire before executing the enclosed function. 
document.addEventListener('DOMContentLoaded', function() {
	// Retrieves score-value element from HTML script and stores it as score-display
    const scoreDisplay = document.getElementById('score-value');
	// Initialise score
    let score = 0;
	// Initialise with false for each difference
	let foundDiffs = [false, false, false, false, false, false];

    // Function to handle click event on images
    function handleClick(event) {
        const clickX = event.offsetX;
		const clickY = event.offsetY;
        const knownCoords = [
			{x: 78, y: 33 }, // Sun
			{x: 313, y: 42 }, // Kite
			{x: 181, y: 319 }, // Stripe
			{x: 97, y: 267 }, // Icecream
			{x: 145, y: 137 }, // Boat
			{x: 298, y: 169 } // Wave
		];
		
		for (let i = 0; i < knownCoords.length; i++) {
            const coords = knownCoords[i];
            if (!foundDiffs[i] && Math.abs(clickX - coords.x) < 10 && Math.abs(clickY - coords.y) < 10) {
                score += 10;
                scoreDisplay.textContent = score;
                foundDiffs[i] = true;
				if (score === 60) {
                    alert("Well done! You've found all differences. Click OK to return to the homepage.");
					window.location.href = "https://kitkat1345.github.io/CW/index.html";
                }
                break;
            }
        }
    }

    // Event listener for image clicks
    document.getElementById('game-area').addEventListener('click', handleClick);
	
	// Event listener for the "New Game" button
    document.getElementById('new-game-btn').addEventListener('click', redirectToHomepage);
});


function countdown() {
    var seconds = 60;
    function tick() {
        var timer = document.getElementById("timer");
        seconds--;
        timer.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Game over. Give it another try. Click OK to return to the homepage.");
			window.location.href = "https://kitkat1345.github.io/CW/index.html";
        }
    }
    tick();
}
// start the countdown
console.log("Countdown started"); // Debugging
countdown();


// Redirects to the homepage
function redirectToHomepage() {
    window.location.href = "https://kitkat1345.github.io/CW/index.html";
}
