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
}, 3000);

document.addEventListener('focus', function() {
    lastFocusTime = Date.now();
});



// EXIT ACTIONS


// SHOW HORROR MESSAGES

//document.body.textContent += horrifyingMessage.slice(0, messageIndex++);



* Slowly displays a message word by word.
 *
 * @param {string} horrorMsg
 * @param {number} [intervalTime=100] - The time between presented words.
 */
l

function slowHorrorMsg(horrorMsg) {
  let currentWordIndex = 0;
  let intervalTime = 1333;
    
  const intervalId = setInterval(() => {
    var nextWordEnd = horrorMsg.indexOf(" ", currentWordIndex);
    if (nextWordEnd === -1) {
      nextWordEnd = horrorMsg.length;
    }
    var nextWord = horrorMsg.slice(currentWordIndex, nextWordEnd);

    process.stdout.write(nextWord + ' ');
    currentWordIndex = nextWordEnd + 1;

    if (currentWordIndex >= horrorMsg.length) {
      clearInterval(intervalId);
    }
  }, intervalTime);
}


//slowHorrorMsg(horrorMsg)
slowHorrorMsg("your time to die . . .")


// SOUNDS

const audio = new Audio('horrifying-sound.mp3'); // default

audio.play()


// CLOSING THE GAME

function closeGame() {
    document.body.style.overflow = 'hidden'; // for scrolling
    // Display full-screen message here
}

