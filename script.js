// Create new Audio objects for both sound files
const hoverSound1 = new Audio("sounds/hover_sound1.mp3");
const hoverSound2 = new Audio("sounds/hover_sound2.mp3");
const hoverSound3 = new Audio("sounds/hover_sound3.mp3");

// Function to play a random hover sound
function playHoverSound() {
    // Randomly choose between 0, 1, or 2
    const randomSound = Math.floor(Math.random() * 3);  // Will give 0, 1, or 2

    // Play the corresponding sound based on the random selection
    let soundToPlay;
    if (randomSound === 0) {
        soundToPlay = hoverSound1;
    } else if (randomSound === 1) {
        soundToPlay = hoverSound2;
    } else {
        soundToPlay = hoverSound3;
    }

    // Reset the sound to the beginning in case it was playing
    soundToPlay.currentTime = -1;
    soundToPlay.play();
}

// Function to wrap words in a <span> tag
function wrapWordsWithSpan(paragraph) {
    // Split the paragraph into words
    const words = paragraph.innerText.split(/\s+/); // Split by spaces
    paragraph.innerHTML = ''; // Clear the paragraph content
    
    // Loop through each word
    words.forEach(word => {
        // Create a new span element for each word
        const span = document.createElement('span');
        span.innerText = word;
        
        // Add hover-word class to the span
        span.classList.add('hover-word');
        
        // Append the span to the paragraph
        paragraph.appendChild(span);
        
        // Add a space between words (except after the last word)
        paragraph.appendChild(document.createTextNode(' '));
    });
}

// Add the event listener to the START button to reveal content
document.getElementById('start-button').addEventListener('click', function () {
    // Hide the start screen and reveal the main content
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Select all paragraphs inside the main element
    const paragraphs = document.querySelectorAll('main p');

    // Loop through each paragraph and apply the wrapWordsWithSpan function
    paragraphs.forEach(paragraph => {
        wrapWordsWithSpan(paragraph);
    });

    // Select all elements with the 'hover-word' class
    const hoverWords = document.querySelectorAll('.hover-word');

    // Add event listeners to each hoverable word
    hoverWords.forEach(word => {
        word.addEventListener('mouseover', playHoverSound); // Play sound when mouse hovers
    });
});

// Add the event listener to the RETURN button to go back to the start screen
document.getElementById('return-button').addEventListener('click', function () {
    // Hide the main content and show the start screen again
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('main-content').style.display = 'none';
});
