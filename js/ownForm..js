/**
 * Created by oscar on 11/22/16.
 */


var validates = document.getElementsByClassName("inputs");
var i;

for(i=0;i < validates.length; i++) {
   validates[i].addEventListener("change",validateMyForm,false);
}



function validateMyForm(event) {

   var parent = event.target.parentNode.parentNode;
   var input = event.target;
   var id = input.getAttribute("id");
   var inputText = input.value;
   var correctImg = input.nextSibling.nextSibling;
   var correctImgSelect = correctImg.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;
   console.log(input.validity.typeMismatch);


   // Full name validation
   if (id === "fullName") {
      if (validator.countWords(inputText) >= 2 && validator.justNumbers(inputText).length === 0) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "25px";
         correctImg.style.right = "350px";
      }
      else if (validator.justNumbers(inputText).length > 0) {
         input.setCustomValidity("Do not include any numbers");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "25px";
         wrongImg.style.right = "350px";
      }
      else {
         input.setCustomValidity("Please input your first and last names");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "25px";
         wrongImg.style.right = "350px";
      }
   }
   
   
   if(id === "emailInput") {
      if(input.validity.typeMismatch === false) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "100px";
         correctImg.style.right = "350px";
      }else {
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "100px";
         wrongImg.style.right = "350px";
      }
   }


   if(id === "service" ) {
      input.setCustomValidity("");
      correctImgSelect.style.display = "inline-block";
      input.style.border = "2px solid green";
      input.style.color = "green";
      correctImgSelect.style.position = "absolute";
      correctImgSelect.style.top = "180px";
      correctImgSelect.style.right = "400px";
   }


   if(id === "budget") {
      input.setCustomValidity("");
      correctImgSelect.style.display = "inline-block";
      input.style.border = "2px solid green";
      input.style.color = "green";
      correctImgSelect.style.position = "absolute";
      correctImgSelect.style.top = "235px";
      correctImgSelect.style.right = "390px";
   }


}



var form = document.getElementById("hello_form");

form.addEventListener("submit", function (event) {
   event.preventDefault();
});