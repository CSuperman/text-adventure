
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
