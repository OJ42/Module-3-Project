"use strict";

function color() {
    document.getElementById('result').innerHTML = alert("My favorite color is green");
    //return false;
}
function place() {
    document.getElementById('result').innerHTML = alert("My favorite place is Rome");
    //return false;
}
function ritual() {
    document.getElementById('result').innerHTML = alert("My favorite ritual is 4th of July fireworks ");
    //return false;
}

document.getElementById('color').addEventListener('click', color);
document.getElementById('place').addEventListener('click', place);
document.getElementById('ritual').addEventListener('click', ritual);

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Thank you for the suggestion");   
    
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
