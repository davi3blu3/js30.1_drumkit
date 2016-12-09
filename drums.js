'use strict'

var buttons = document.getElementsByClassName('key');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        console.log(this.childNodes[3].innerText);
    });
}

window.addEventListener("keydown", function (event) {
    switch(event.key) {
        case "a":
        case "A":
            console.log("A pressed");
            break;
        case "s":
        case "S":
            console.log("S pressed");
            break;
        case "d":
        case "D":
            console.log("D pressed");
            break;          
        case "f":
        case "F":
            console.log("F pressed");
            break;
        case "g":
        case "G":
            console.log("G pressed");
            break;
        case "h":
        case "H":
            console.log("H pressed");
            break; 
        case "j":
        case "J":
            console.log("J pressed");
            break;
        case "k":
        case "K":
            console.log("K pressed");
            break;
        case "l":
        case "L":
            console.log("L pressed");
            break; 
        default:
            break;
    }
});


