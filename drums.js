'use strict'

// PLAYED FUNCTION
var play = function(key) {
    console.log(key + " was played");
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
    switch(event.key) {
        case "a":
        case "A":
            play("Clap");
            break;
        case "s":
        case "S":
            play("HiHat");
            break;
        case "d":
        case "D":
            play("Kick");
            break;          
        case "f":
        case "F":
            play("OpenHat");
            break;
        case "g":
        case "G":
            play("Boom");
            break;
        case "h":
        case "H":
            play("Ride");
            break; 
        case "j":
        case "J":
            play("Snare");
            break;
        case "k":
        case "K":
            play("Tom");
            break;
        case "l":
        case "L":
            play("Tink");
            break; 
        default:
            break;
    }
});


