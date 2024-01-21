// displays horrifying responses for exit attemps


// EXIT ATTEMPTS


// window close
window.onbeforeunload = function() {
    exitSequence();
};


// keyboard shortcuts
// ........


// tab switching

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        exitSequence();
    }
});

// browser switching


let lastFocusTime = Date.now();
setInterval(function() {
    if (Date.now() - lastFocusTime > 5000) { // Adjust timeout as needed
        exitSequence();
    }
}, 1000);

document.addEventListener('focus', function() {
    lastFocusTime = Date.now();
});



// EXIT ACTIONS


// SHOW HORROR MESSAGES

document.body.textContent += horrifyingMessage.slice(0, messageIndex++);


// SOUNDS

const audio = new Audio('horrifying-sound.mp3'); // default

audio.play()


// CLOSING THE GAME

function closeGame() {
    document.body.style.overflow = 'hidden'; // for scrolling
    // Display full-screen message here
}

