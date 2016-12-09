'use strict'

// PLAYED FUNCTION
var play = function(drum) {
    var btn = document.getElementById(drum);
    var sound = document.querySelector(`audio[data-key="${drum}"]`);
    btn.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
}

// REMOVE TRANSITION FUNCTION
var removeTransition = function(e) {
    if (e.propertyName !== 'transform') return; // skip if not transform
    this.classList.remove('playing');
};

// CREATE CLICK and TRANSITION END LISTENERS FOR EACH BUTTON
const buttons = document.querySelectorAll('.key');
buttons.forEach(button => button.addEventListener('click', function() {
    play(button.childNodes[3].innerText);
}));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

// CREATE KEYDOWN LISTENER IN WINDOW
window.addEventListener("keydown", function (event) {
    switch(event.keyCode) {
        case 65:
            play("clap");
            break;
        case 83:
            play("hihat");
            break;
        case 68:
            play("kick");
            break;          
        case 70:
            play("openhat");
            break;
        case 71:
            play("boom");
            break;
        case 72:
            play("ride");
            break; 
        case 74:
            play("snare");
            break;
        case 75:
            play("tom");
            break;
        case 76:
            play("tink");
            break; 
        default:
            break;
    }
});
