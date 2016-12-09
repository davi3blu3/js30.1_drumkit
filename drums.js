'use strict'

var buttons = document.getElementsByClassName('key');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        console.log(this.childNodes[3].innerText);
    })
    
}



