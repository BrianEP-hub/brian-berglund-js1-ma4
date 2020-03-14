// JavaScript Document

/*Write code that checks that the firstName input's value is atleast 2 characters long when the form is submitted.
Show/hide the error message everytime the validation runs.*/

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateName);

function checkLength(value){
	const trimmedVal = value.trim();
	
	
	if(trimmedVal.length >= 2){
		return true;
	}else{
		return false;
	}
}

function validateName(event){
	event.preventDefault();
	
	const firstName = document.querySelector("#fistName");
	const firstNameError = document.querySelector("#firstNameError");
	const firstNameVal = firstName.value;
	
	if(checkLength(firstNameVal) === true){
		firstNameError.style.display = "none";
	}else{
		firstNameError.style.display = "block";
	}
}