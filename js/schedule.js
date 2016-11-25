/**
 * Created by oscar on 11/24/16.
 */




var validaton = document.getElementsByClassName("inputs");

for(var i = 0; i < validaton.length; i++) {
   validaton[i].addEventListener("change", validateMyForm, false);
}


function validateMyForm(event) {
   var parent = event.target.parentNode;
   var input = event.target;
   var inputValue = input.value;
   var id = input.getAttribute("id");
   var correctImg = parent.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;


   if(id === "date") {
      if(validator.isBeforeToday(inputValue) === true  ) {
         input.setCustomValidity("Sorry but you can't schedule appointments on the same day or days that have already passed.");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "75px";
         wrongImg.style.right = "100px";
      }
      else {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "75px";
         correctImg.style.right = "100px";
      }
   }


   if(id === "time") {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "150px";
         correctImg.style.right = "100px";
      }


   if(id === "timeZone") {
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      input.style.border = "2px solid green";
      correctImg.style.position = "absolute";
      correctImg.style.top = "190px";
      correctImg.style.right = "10px";
   }

   if(id === "phone"){
     if(validator.isPhoneNumber(inputValue) === true) {
        input.setCustomValidity("");
        correctImg.style.display = "inline-block";
        wrongImg.style.display = "none";
        input.style.border = "2px solid green";
        correctImg.style.position = "absolute";
        correctImg.style.bottom = "200px";
        correctImg.style.right = "770px";
     }
      else {
        input.setCustomValidity("please include a valid telephone number. A vaild phone number has a three digit area code followed by seven digits");
        input.style.border = "2px solid red";
        wrongImg.style.display = "inline-block";
        correctImg.style.display = "none";
        wrongImg.style.position = "absolute";
        wrongImg.style.bottom = "200px";
        wrongImg.style.right = "770px";
     }
   }

   if(id === "email") {
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
         wrongImg.style.bottom = "125px";
         wrongImg.style.right = "770px";
      }
   }
   
   
   
}




var form = document.getElementById("form1");


form.addEventListener("submit", function (event) {
   event.preventDefault();
});
