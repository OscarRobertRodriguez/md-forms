/**
 * Created by oscar on 11/16/16.
 */



var checkforSymbols = document.getElementsByClassName("withoutSymbols");
var validateF = document.getElementsByClassName("validate");
var state = document.getElementsByClassName('states');
var zipcodeCheck = document.getElementsByClassName('zipcode');

// === add event listeners to add to cart buttons === //
for (var i = 0; i < checkforSymbols.length; i++) {
   checkforSymbols[i].addEventListener('change', checkIfNameHasSymbols);
}

for (var i = 0; i < validateF.length; i++) {
   validateF[i].addEventListener('change', validateForm,false)
}

for (var i = 0; i < state.length; i++) {
   state[i].addEventListener('change', checkIfStateEntered, false)
}

for (var i =0; i < zipcodeCheck.length; i++) {
   zipcodeCheck[i].addEventListener('change', justNumberCheck);
}


// create function that will fill in shipping side with same information as billing when checkbox is clicked

   function SameAsBill(checkbox) {
      var fieldTwo = document.querySelector(".fieldTwo").style;
      var fieldOne = document.querySelector(".fieldOne").style;
      var checkBox1 = document.querySelector(".notSame").style;
      var form = document.getElementById("form1").style;
      var submitButton = document.querySelector(".fieldThree").style;
      var input1 = document.getElementsByClassName("inputShip");
      var legend = document.getElementById("lengend1");


      if (checkbox.checked === true) {
         fieldTwo.display = "none";
         fieldOne.setProperty("border-right", "2px solid brown");
         checkBox1.setProperty("visibility", "visible");
         document.getElementById("check2").checked = false;
         document.getElementById("check1").checked = false;
         form.width = "400px";
         submitButton.width = "400px";

         legend.innerText = "Billing And Shipping Address";


         for (var i = 0; i < input1.length; i++) {
            input1[i].required = false;
         }
      }
   };

// function that adds back shipping section if box checked in billing
   function notSameAsBill(checkbox) {
      var fieldTwo = document.querySelector(".fieldTwo").style;
      var fieldOne = document.querySelector(".fieldOne").style;
      var checkBox1 = document.querySelector(".notSame").style;
      var form = document.getElementById("form1").style;
      var submitButton = document.querySelector(".fieldThree").style;
      var input1 = document.getElementsByClassName("inputShip");
      var legend = document.getElementById("lengend1");
      var t = document.createTextNode(" and Shipping Address");


      if (checkbox.checked === true) {
         form.width = "900px";
         fieldTwo.display = "block";
         checkBox1.visibility = "hidden";
         fieldOne.setProperty("border-right", "none");
         submitButton.width = "828px";
         legend.innerText = "Billing Address";

         for (var i = 0; i < input1.length; i++) {
            input1[i].required = true;
         }
      }
   };


// function that validate the form

function validateForm(event) {

   var parent = event.target;
   var inputText = parent.value;
   var correctImg = parent.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;
   var state = document.getElementById("state");



     if(parent.checkValidity() === false) {
        correctImg.style.display = "none";
        wrongImg.style.display = "inline-block";
        parent.style.border = "2px solid red";
        parent.style.color = "red";
     }else {
        correctImg.style.display = "inline-block";
        wrongImg.style.display = "none";
        parent.style.border = "";
        parent.style.color = "green";
     }




};


function checkIfStateEntered (event) {
   var parent = event.target;
   var inputText = parent.value;
   var correctImg = parent.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;
   console.log(parent.value);


   if(inputText.length == 2) {

      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      parent.style.border = "";
      parent.style.color = "green";
   } 

};



function justNumberCheck (event) {
   var parent = event.target;
   var inputText = parent.value;
   var correctImg = parent.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;

   console.log(inputText);

   if(validator.justNumbers(inputText).length !== inputText.length) {
      parent.setCustomValidity("Only include numbers for your zipcode");
      correctImg.style.display ="none";
      wrongImg.style.display ="inline-block";
      parent.style.color = "red";
      parent.style.border = "2px solid red";
   } else if (validator.justNumbers(inputText).length === inputText.length) {
      parent.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
      parent.style.border = "";
      parent.style.color = "green";
   }
}




function checkIfNameHasSymbols(event) {
   
   var parent = event.target;
   var inputText = parent.value;
   var correctImg = parent.nextSibling.nextSibling;
   var wrongImg = correctImg.nextSibling.nextSibling;





   // if statement that checks the billing name is correct
   // if it is'nt correct display red warning
   if (validator.withoutSymbols(inputText).length !== inputText.length) {
      parent.setCustomValidity("Only include letters in your name.");
      correctImg.style.display ="none";
      wrongImg.style.display ="inline-block";
   }
   // if it is correct display checkmark img
   else if (validator.withoutSymbols(inputText).length === inputText.length) {
      parent.setCustomValidity("");
      correctImg.style.display = "inline-block";
      wrongImg.style.display = "none";
   }


}




var form = document.getElementById("form1");

form.addEventListener('submit', function (event) {
   // prevent the submit button from submitting the form
   event.preventDefault();

});




// function checkIfNameHasSymbols() {
//    var billName = document.getElementById("billName");
//    var billNameValue = document.getElementById("billName").value;
//    var correct = document.getElementById("firstNameCorrect").style;
//    console.log(validator.withoutSymbols(billNameValue));
//    console.log(billNameValue.length);
//
//    if (validator.withoutSymbols(billNameValue).length !== billNameValue.length) {
//       billName.setCustomValidity("Please only include letters in your name.");
//       correct.display ="none";
//
//    } else if (validator.withoutSymbols(billNameValue).length === billNameValue.length) {
//       billName.setCustomValidity("");
//       correct.display = "inline-block";
//
//    }
//
// };