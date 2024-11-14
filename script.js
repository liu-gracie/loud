// Create a new Audio object to load the sound file
const hoverSound = new Audio('sounds/hover-sound.mp3');

// Function to play the sound
function playHoverSound() {
    hoverSound.currentTime = 0; // Reset the sound to the beginning in case it was playing
    hoverSound.play(); // Play the sound
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
