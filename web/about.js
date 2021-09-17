console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You have successfully submitted the form!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



function giveCompliment(evt) {
	alert("The duck thinks your cute");
}

let img = document.querySelector('img#duck');

img.addEventListener('mouseover', giveCompliment);