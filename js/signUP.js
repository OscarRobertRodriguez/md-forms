/**
 * Created by oscar on 11/22/16.
 */



var validate = document.getElementsByClassName("inputs"),
    i;



for(i=0; i < validate.length; i++){
   validate[i].addEventListener("change", validateMyForm,false);
}


function validateMyForm(event) {

   var input = event.target;
   var inputValue = input.value.trim();
   var id = input.getAttribute("id");
   var correctImg = input.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;


   if(id === "firstName") {
      // checks if just one word is entered for first name
      if(validator.countWords(inputValue) > 1 && validator.justNumbers(inputValue).length === 0 && validator.withoutSymbols(inputValue).length === inputValue.length) {
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
      else if (validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue)  >= 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Do not include any numbers in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else if (validator.withoutSymbols(inputValue).length !== inputValue.length && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue) >= 1 ) {
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
         correctImg.style.display= "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "100px";
         correctImg.style.right = "30px";

      }
   }


   if(id === "lastName") {
      // checks if just one word is entered for first name
      if(validator.countWords(inputValue) > 1 && validator.justNumbers(inputValue).length === 0 && validator.withoutSymbols(inputValue).length === inputValue.length) {
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
      else if (validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue)  >= 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
         input.setCustomValidity("Do not include any numbers in your name");
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "30px";
      }
      else if (validator.withoutSymbols(inputValue).length !== inputValue.length && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue) >= 1 ) {
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
         correctImg.style.display= "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "160px";
         correctImg.style.right = "30px";

      }
   }

   if(id === "emailInput") {
      if(input.validity.typeMismatch === false) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "230px";
         correctImg.style.right = "30px";
      }else {
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "230px";
         wrongImg.style.right = "30px";
      }
   }

 if(id === "date"){
    if(validator.isDate(inputValue) === false){
       input.setCustomValidity("Include a valid date. Valid date is written as month/day/year");
       input.style.border = "2px solid red";
       wrongImg.style.display = "inline-block";
       correctImg.style.display = "none";
       wrongImg.style.position = "absolute";
       input.style.color = "red";
       wrongImg.style.top = "300px";
       wrongImg.style.right = "30px";
    }
    else {
       input.setCustomValidity("");
       correctImg.style.display = "inline-block";
       wrongImg.style.display = "none";
       input.style.border = "2px solid green";
       correctImg.style.position = "absolute";
       input.style.color = "green";
       correctImg.style.top = "300px";
       correctImg.style.right = "30px";
    }
 }

if(id === "password") {
   if(inputValue.length < 8 && inputValue.length !== 8) {
      input.validationMessage;
      input.style.border = "2px solid red";
      input.style.color = "red";
      wrongImg.style.display = "inline-block";
      correctImg.style.display = "none";
      wrongImg.style.position = "absolute";
      wrongImg.style.top = "370px";
      wrongImg.style.right = "30px";
   }
   else if(  inputValue.length >= 8 && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue)  === 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
      input.setCustomValidity("Please include at least one symbol and at least one number ");
      input.style.border = "2px solid red";
      input.style.color = "red";
      wrongImg.style.display = "inline-block";
      correctImg.style.display = "none";
      wrongImg.style.position = "absolute";
      wrongImg.style.top = "370px";
      wrongImg.style.right = "30px";
   }
   else if (  inputValue.length >= 8 && validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue)  === 1 && validator.withoutSymbols(inputValue).length === inputValue.length) {
      input.setCustomValidity("Please include at least one symbol in your password Ex. '$' ");
      input.style.border = "2px solid red";
      input.style.color = "red";
      wrongImg.style.display = "inline-block";
      correctImg.style.display = "none";
      wrongImg.style.position = "absolute";
      wrongImg.style.top = "370px";
      wrongImg.style.right = "30px";
   }
   else if( inputValue.length >= 8 && validator.justNumbers(inputValue).length === 0 && validator.countWords(inputValue)  === 1 && validator.withoutSymbols(inputValue).length !== inputValue.length ) {
      input.setCustomValidity("Please include at least one number in your password ");
      input.style.border = "2px solid red";
      input.style.color = "red";
      wrongImg.style.display = "inline-block";
      correctImg.style.display = "none";
      wrongImg.style.position = "absolute";
      wrongImg.style.top = "370px";
      wrongImg.style.right = "30px";
   }
   else if( inputValue.length >= 8 && validator.justNumbers(inputValue).length > 0 && validator.countWords(inputValue)  > 1 && validator.withoutSymbols(inputValue).length !== inputValue.length) {
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

















var form = document.getElementById("form1");

form.addEventListener("submit", function (event) {
   event.preventDefault();
})