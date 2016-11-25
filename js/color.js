/**
 * Created by oscar on 11/25/16.
 */



var validate = document.getElementsByClassName("inputs");

for(var i = 0 ; i < validate.length; i++) {
   validate[i].addEventListener("change", validateMyForm, false);
}


function validateMyForm(event) {
   var input = event.target;
   var parent = input.parentNode;
   var id = parent.getAttribute("id");
   var correctImg = input.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;

   if(id === "r-slider"){
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      correctImg.style.position = "absolute";
      correctImg.style.top = "185px";
      correctImg.style.right = "950px";
   }

   if(id === "g-slider"){
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      correctImg.style.position = "absolute";
      correctImg.style.top = "225px";
      correctImg.style.right = "950px";
   }

   if(id === "b-slider"){
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      correctImg.style.position = "absolute";
      correctImg.style.top = "265px";
      correctImg.style.right = "950px";
   }

   if(id === "a-slider"){
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      correctImg.style.position = "absolute";
      correctImg.style.top = "305px";
      correctImg.style.right = "950px";
   }
}