// Create a new Audio object to load the sound file
const hoverSound = new Audio('sounds/hover-sound.mp3');

// Select all elements with the 'hover-word' class
const hoverWords = document.querySelectorAll('.hover-word');

// Function to play the sound
function playHoverSound() {
    hoverSound.currentTime = 0; // Reset the sound to the beginning in case it was playing
    hoverSound.play(); // Play the sound
}

// Add event listeners to each hoverable word
hoverWords.forEach(word => {
    word.addEventListener('mouseover', playHoverSound); // Play sound when mouse hovers
});
