'use strict'

// PLAYED FUNCTION
var play = function(key) {
    var btn = document.getElementById(key);
    btn.className += " playing";
}

// CREATE CLICK LISTENERS
var buttons = document.getElementsByClassName('key');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        play(this.childNodes[3].innerText);
    });
}

// CREATE KEY LISTENERS
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


