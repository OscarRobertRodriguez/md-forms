/**
 * Created by oscar on 11/22/16.
 */



var validate = document.getElementsByClassName("inputs"),
    i;


for (i = 0; i < validate.length; i++) {
   validate[i].addEventListener("change", validateMyForm, false);
}

console.log(validator.birthDateAge("12/12/1989"));

// function that validates each input
function validateMyForm(event) {

   var input = event.target;
   var inputValue = input.value.trim();
   var id = input.getAttribute("id");
   var correctImg = input.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;

// first input validation
   if (id === "firstName") {
      // checks if just one word is entered for first name
      if (validator.countWords(inputValue) > 1 && validator.justNumbers(inputValue).length === 0 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Only include one word for first name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      // checks if there are no numbers entered for first name
      else if (validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue) >= 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Do not include any numbers in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else if (validator.withoutSymbols(inputValue).length !== inputValue.length && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue) >= 1) {
         input.setCustomValidity("Do not include any symbols in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else if (validator.withoutSymbols(inputValue).length !== inputValue.length && validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue) >= 1) {
         input.setCustomValidity("Do not include any symbols or numbers in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "100px";
         correctImg.style.right = "30px";

      }
   }

// lastName input validation
   if (id === "lastName") {
      // checks if just one word is entered for first name
      if (validator.countWords(inputValue) > 1 && validator.justNumbers(inputValue).length === 0 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Only include one word for first name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      // checks if there are no numbers entered for first name
      else if (validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue) >= 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Do not include any numbers in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else if (validator.withoutSymbols(inputValue).length !== inputValue.length && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue) >= 1) {
         input.setCustomValidity("Do not include any symbols in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else if (validator.withoutSymbols(inputValue).length !== inputValue.length && validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue) >= 1) {
         input.setCustomValidity("Do not include any symbols or numbers in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "160px";
         correctImg.style.right = "30px";

      }
   }
// email input validation
   if (id === "emailInput") {

      if (input.validity.typeMismatch === false) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "230px";
         correctImg.style.right = "30px";
      } else {
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "230px";
         wrongImg.style.right = "30px";
      }
   }
// date input validation
   if (id === "date") {
      if (inputValue.length < 8 && inputValue.length !== 8) {
         input.validationMessage;
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         input.style.color = "red";
         wrongImg.style.top = "300px";
         wrongImg.style.right = "30px";
      }

      else if (validator.isDate(inputValue) === false) {
         input.setCustomValidity("Include a valid date. Valid date is written as month/day/year");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         input.style.color = "red";
         wrongImg.style.top = "320px";
         wrongImg.style.right = "30px";
      }
      else if (validator.isBeforeToday(inputValue) === false) {
         input.setCustomValidity("Not a valid date can not be after today");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         input.style.color = "red";
         wrongImg.style.top = "320px";
         wrongImg.style.right = "30px";
      }
      else if (validator.birthDateAge(inputValue) < 18 && validator.birthDateAge(inputValue) !== 18) {
         input.setCustomValidity("Must be 18 years or older");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         input.style.color = "red";
         wrongImg.style.top = "320px";
         wrongImg.style.right = "30px";
      }

      else {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         input.style.color = "green";
         correctImg.style.top = "310px";
         correctImg.style.right = "30px";
      }
   }

// password input validation
   if (id === "password") {
      if (inputValue.length < 8 && inputValue.length !== 8) {
         input.validationMessage;
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "370px";
         wrongImg.style.right = "30px";
      }
      else if (inputValue.length >= 8 && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue) === 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Please include at least one symbol and at least one number ");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "370px";
         wrongImg.style.right = "30px";
      }
      else if (inputValue.length >= 8 && validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue) === 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Please include at least one symbol in your password Ex. '$' ");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "370px";
         wrongImg.style.right = "30px";
      }
      else if (inputValue.length >= 8 && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue) === 1 && validator.withoutSymbols(inputValue).length !== inputValue.length) {
         input.setCustomValidity("Please include at least one number in your password ");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "370px";
         wrongImg.style.right = "30px";
      }
      else if (inputValue.length >= 8 && validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue) > 1 && validator.withoutSymbols(inputValue).length !== inputValue.length) {
         input.setCustomValidity("Please don't include more than one word in your password");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "370px";
         wrongImg.style.right = "30px";
      }
      else {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         input.style.color = "green";
         correctImg.style.top = "370px";
         correctImg.style.right = "30px";
      }
   }

}

// end validateMyFunction


var form = document.getElementById("form1");

form.addEventListener("submit", function (event) {
   event.preventDefault();
});