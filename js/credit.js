/**
 * Created by oscar on 11/21/16.
 */

var input = document.getElementsByClassName("inputs");
var i;

for(i = 0; i < input.length; i++) {
   input[i].addEventListener("change", validateMyForm, false)
}

function validateMyForm(event) {

   var parent = event.target.parentNode.parentNode;
   var input = event.target;
   var id = input.getAttribute("id");
   var inputText = input.value;
   var correctImg = parent.firstChild.nextSibling.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;
console.log(validator.withoutSymbolsCredit(inputText));



   
   
   // Full name validation
   if(id === "fullName") {
      if(validator.countWords(inputText) >= 2 && validator.justNumbers(inputText).length === 0) {
         input.setCustomValidity("");
         correctImg.style.display= "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "-5px";
         correctImg.style.right = "35px";
      }
      else if (validator.justNumbers(inputText).length > 0) {
         input.setCustomValidity("Do not include any numbers");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "0";
         wrongImg.style.right = "35px";
      }
      else {
         input.setCustomValidity("Please input your first and last names");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "0";
         wrongImg.style.right = "35px";
      }
   }


   
   
   
   // Credit Card Number Validation
   if(id === "creditNum") {
      if(validator.isCreditCard(inputText) === true && validator.symbolsHyphenOnly(inputText).length === 3 && inputText.length === 19) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "40px";
         correctImg.style.right = "30px";
      }

      else if (inputText.length !== 19) {
         input.validationMessage;
         correctImg.style.display = "none";
         wrongImg.style.display = "inline-block";
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "40px";
         wrongImg.style.right = "30px";
      }

      else if (inputText.length === 19  && validator.isCreditCard(inputText) === false && validator.withoutSymbolsCredit(inputText).length === inputText.length) {
         input.setCustomValidity("Please include 3 hyphens as shown 'xxxx-xxxx-xxxx-xxxx'.");
         correctImg.style.display = "none";
         wrongImg.style.display = "inline-block";
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "40px";
         wrongImg.style.right = "30px";
      }

      else {
         input.setCustomValidity("only numbers and hyphens allowed");
         correctImg.style.display = "none";
         wrongImg.style.display = "inline-block";
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "40px";
         wrongImg.style.right = "30px";
      }
   }


   
   
   
   // Credit CSV Validation
   if(id === "csvCode") {
      if(validator.justNumbers(inputText).length === inputText.length) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "80px";
         correctImg.style.right = "40px";

      } else {
         input.setCustomValidity("Please input a valid cvv number only include numbers");
         correctImg.style.display = "none";
         wrongImg.style.display = "inline-block";
         input.style.border = "2px solid red";
         input.style.color = "red";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "80px";
         wrongImg.style.right = "40px";
      }
   }





   // Expiration Month of Card
   if(id === "month") {
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      input.style.border = "2px solid green";
      input.style.color = "green";
      correctImg.style.position = "absolute";
      correctImg.style.top = "120px";
      correctImg.style.right = "40px";
   }





   // Expiration Year select box
   if(id === "year") {
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      input.style.border = "2px solid green";
      input.style.color = "green";
      correctImg.style.position = "absolute";
      correctImg.style.top = "155px";
      correctImg.style.right = "85px";

   }
   
}






var form = document.getElementById("formCredit");

form.addEventListener('submit', function (event) {
   // prevent the submit button from submitting the form
   event.preventDefault();

});