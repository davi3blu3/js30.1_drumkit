'use strict'

// PLAYED FUNCTION
var play = function(key) {
    var btn = document.getElementById(key);
    btn.classList.add('playing');
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
            play("Clap");
            break;
        case 83:
            play("HiHat");
            break;
        case 68:
            play("Kick");
            break;          
        case 70:
            play("OpenHat");
            break;
        case 71:
            play("Boom");
            break;
        case 72:
            play("Ride");
            break; 
        case 74:
            play("Snare");
            break;
        case 75:
            play("Tom");
            break;
        case 76:
            play("Tink");
            break; 
        default:
            break;
    }
});


