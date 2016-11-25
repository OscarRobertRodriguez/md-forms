/**
 * Created by oscar on 11/24/16.
 */





var validate = document.getElementsByClassName("inputs");

for(var i =0; i < validate.length; i++){
   validate[i].addEventListener("change", validateMyForm, false);
}




function validateMyForm(event) {

   var input = event.target;
   var inputValue = input.value;
   var id = input.getAttribute("id");
   var correctImg = input.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;

   if (id === "searchBox") {
      input.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      input.style.border = "2px solid green";
      input.style.color = "green";
      correctImg.style.position = "absolute";
      correctImg.style.top = "150px";
      correctImg.style.right = "30px";
   }


   if (id === "selectBox") {
      if (input.checkValidity() === true) {
         input.setCustomValidity("");
         correctImg.style.display = "inline-block";
         wrongImg.style.display = "none";
         input.style.border = "2px solid green";
         input.style.color = "green";
         correctImg.style.position = "absolute";
         correctImg.style.top = "300px";
         correctImg.style.right = "30px";
      }
      else {
         input.setCustomValidity("Please select an option");
         input.style.border = "2px solid red";
         wrongImg.style.display = "inline-block";
         correctImg.style.display = "none";
         input.style.color = "red";
         wrongImg.style.position = "absolute";
         wrongImg.style.top = "300px";
         wrongImg.style.right = "30px";
      }

   }
}












var form = document.getElementById("form1");



form.addEventListener("submit", function (event) {
   event.preventDefault();
});