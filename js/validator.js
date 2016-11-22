(function (window) {

   var validator = {};


   // 1. Email Address
   validator.isEmailAddress = function (str) {

      if (str !== undefined) {
         str = str.trim().toLowerCase();
         var atindex = str.indexOf("@");
         var atindex2 = str.lastIndexOf("@");
         var string1 = str.slice(0, atindex);
         var string2 = str.slice(1 + atindex);
         var valid = false; // initiate variable that will be returned

         if (atindex > 0 && atindex === atindex2 && string1 && string2) {
            valid = true; // only in this case it is true, all others are left false
         }
         else if (!str) {
            alert("You have an empty string.");
         }
      }
      else if (str === undefined) {
         throw new Error('parameter is missing');
      }
      return valid; // return the value
   };

   // 2. phone Number
   validator.isPhoneNumber = function (input) {
      // checks if parameter is missing
      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      // change input to a string if not already
      input = input.toString();
      var a = /-/gi;
      var b = /\)|\(/gi;

      input = input.replace(a, "");
      input = input.replace(b, "");

      if (input.length === 10 && !isNaN(Number(input))) {
         return true;
      }
      else if (input.length === 11 && input.charAt(0) === "1" && !isNaN(Number(input))) {
         return true;
      }
      else if (!input) {
         alert("you have an empty string");
         return false;
      }
      else {
         return false;
      }


   };

// checks if input is a number not part of project projects are numbered
   validator.justNumbers = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      var alphaNum = '1234567890',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();

   };


   // 3. remove symbols and numbers from check
   validator.withoutSymbolsNumbers = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("empty string");
      }

      var alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();

   };


   validator.symbolsHyphenOnly = function (input) {
      if (input === undefined) {
         throw new Error("parameter is missing");
      }

      var alphaNum = '-',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();


   }




   //  remove symbols and letter for credit card number check
   validator.withoutSymbolsCredit = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }

      var alphaNum = '0123456789-',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " " || input.charAt(i) === "-") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();

   };




   // 3. remove symbols
   validator.withoutSymbols = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("empty string");
      }

      var alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();

   };


// 4.To check if date is valid
   validator.isDate = function (input) {
      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      var date = new Date(input);

      if (!input) {
         alert("you did not input anything");
      }
      if (isNaN(date.getTime()) && input.length > 0) {
         alert("date is invalid please include valid date");
         return false;
      }
      else if (Object.prototype.toString.call(date) === '[object Date]') {
         return true;
      }
      else {
         return false;
      }
   };

//  5. checks if input is before date
   validator.isBeforeDate = function (input, reference) {

      var date = new Date(input);
      var dateRef = new Date(reference);

      if (input === undefined || reference === undefined) {
         throw new Error("parameter is missing");
      }

      if (!input || !reference) {
         alert("You have an empty string");
         return false;
      }

      if (isNaN(date.getTime()) || isNaN(dateRef.getTime())) {
         alert("Date is invalid please include valid date.");
         return false;
      }
      else if (Object.prototype.toString.call(date) === '[object Date]' && Object.prototype.toString.call(dateRef) === '[object Date]') {
         if (date.setHours(0, 0, 0, 0) >= dateRef.setHours(0, 0, 0, 0)) {
            return false;
         } else {
            return true;
         }


      }


   };


//  6. returns true if input is after ref date

   validator.isAfterDate = function (input, reference) {

      var date = new Date(input);
      var dateRef = new Date(reference);

      if (input === undefined || reference === undefined) {
         throw new Error("parameter is missing");
      }

      if (!input || !reference) {
         alert("You have an empty string");
      }

      if (isNaN(date.getTime()) || isNaN(dateRef.getTime())) {
         alert("Date is invalid please include valid date.");
         return false;
      }
      else if (Object.prototype.toString.call(date) === '[object Date]' && Object.prototype.toString.call(dateRef) === '[object Date]') {
         if (date.setHours(0, 0, 0, 0) <= dateRef.setHours(0, 0, 0, 0)) {
            return false;
         } else {
            return true;
         }


      }


   };

// 7.
   validator.isBeforeToday = function (input) {

      var today = new Date();
      var date = new Date(input);


      if (input === undefined) {
         throw new Error("parameter is missing");
      }


      if (!input) {
         alert("you did not input anything");
      }
      if (isNaN(date) && input.length > 0) {
         alert("date is invalid please include valid date");
         return false;
      }
      else if (Object.prototype.toString.call(date) === '[object Date]') {
         if (date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
            return true;
         }
         else {
            return false;
         }
      }

   };

// 8.
   validator.isAfterToday = function (input) {

      var today = new Date();
      var date = new Date(input);


      if (input === undefined) {
         throw new Error("parameter is missing");
      }


      if (!input) {
         alert("you did not input anything");
      }
      if (isNaN(date) && input.length > 0) {
         alert("date is invalid please include valid date");
         return false;
      }
      else if (Object.prototype.toString.call(date) === '[object Date]') {
         if (date.setHours(0, 0, 0, 0) > today.setHours(0, 0, 0, 0)) {
            return true;
         }
         else {
            return false;
         }
      }

   };


   // 9 checks if there is an empty string spaces are ignored
   validator.isEmpty = function (input) {
      if (input === undefined) {
         throw new Error("parameter is missing");
      }

      else if (!input) {
         return true;
      }


      var i;
      var storeString = "";
      var storeString2 = "";


      for (i = 0; i < input.length; i++) {
         if (input.charAt(i) === " ") {
            storeString += input.charAt(i);
         }
         else if (input.charAt(i) !== " ") {
            storeString2 += input.charAt(i);
         }


      }

      if (storeString.length > 0 && storeString2.length === 0) {
         return true;
      }
      else if (storeString2.length > 0) {
         return false;
      }

   };


// 10
   validator.contains = function (input, words) {
      var arr = this.withoutSymbols(input).split(" ");
      console.log(arr);
      for (var i = 0; i < words.length; i++) {
         if (arr.indexOf(words[i].toLowerCase()) !== -1) {
            return true;
         }
      }
      return false;
   };


   // 11

   validator.lacks = function (input, words) {

      return !this.contains(input, words);
   };


// 12
   validator.isComposedOf = function (str, arr) {
      var l = arr.length;
      var longest;
      var matched;
      var newStr = str.toLowerCase();

      // sort array
      for (var i = 0; i < l; i++) {
         longest = i;
         // compare arr[longest] to every element that comes after it
         for (var j = i + 1; j < l; j++) {

            // if next item is < than current longest, next = new longest
            if (arr[j].length > arr[longest].length) {
               longest = j;
            }
         }
         // if longest and i are not the same, swap the values in the array
         if (longest !== i) {
            var temp = arr[i];
            arr[i] = arr[longest];
            arr[longest] = temp;
         }
      }

      // loop through array and remove from string
      for (var i = 0; i < l; i++) {
         if (!newStr.length) {
            return true;
         } else {
            matched = arr[i].toLowerCase();
            newStr = newStr.replace(matched, '');
         }
      }
      return newStr.length ? false : true;
   };


   // 13 checks if the input is less than or equal to the n parameter
   validator.isLength = function (input, n) {

      if (input === undefined || n === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("You didn't type anything");
      }
      if (isNaN(n)) {
         alert("parameter n needs to be a number not a string");
      }

      if (input.length >= n) {
         return true;
      }
      else {
         return false;
      }
   };


   // 14 checks if the input is greater than or equal to the n parameter
   validator.isOfLength = function (input, n) {

      if (input === undefined || n === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("You didn't type anything");
      }
      if (isNaN(n)) {
         alert("parameter n needs to be a number not a string");
      }

      if (input.length >= n) {
         return true;
      }
      else {
         return false;
      }
   };


   // 15 counts the number of words for this we will only consider groups of letters as words
   validator.countWords = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }


      var alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
         else if (input.charAt(i) === "-") {
            newStr += " ";
         }

      }


      if (newStr.trim().length > 0) {
         return newStr.replace(/\s+/g, ' ').trim().split(" ").length;
      }
      else {
         return 0;
      }
   };


//   16
   validator.lessWordsThan = function (input, n) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }


      var alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
         else if (input.charAt(i) === "-") {
            newStr += " ";
         }

      }


      if (newStr.replace(/\s+/g, ' ').trim().split(" ").length <= n) {
         return true;
      }
      else {
         return false;
      }
   };


// 17
   validator.moreWordsThan = function (input, n) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }


      var alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === " ") {

            newStr += input.charAt(i);
         }
         else if (input.charAt(i) === "-") {
            newStr += " ";
         }

      }


      if (newStr.replace(/\s+/g, ' ').trim().split(" ").length >= n) {
         return true;
      }
      else {
         return false;
      }
   };


// 18
   validator.isBetween = function (input, floor, ceil) {
      input = Number(input);
      if (input === undefined || floor === undefined || ceil === undefined) {
         throw new Error("parameter is missing");
      }

      if (input >= floor && input <= ceil) {
         return true;
      } else {
         return false;
      }

   };


   // 19

   validator.isAlphanumeric = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         return true;
      }
      else if (this.withoutSymbols(input).length !== input.trim().length) {
         return false;
      }
      else {
         return true;
      }

   };


// 20
   validator.isCreditCard = function (input) {
      var newInput = this.withoutSymbolsCredit(input);
      var hyphenArray = [];


      for(var i = 0; i < newInput.length;i++) {
         if(newInput.charAt(i) === "-") {
            hyphenArray.push(i);
         }
      }

      if (hyphenArray[0] === 4 && hyphenArray[1] === 9 && hyphenArray[2] === 14) {
         hyphenArray.push("true");
      }

      if (newInput.length === 19 && this.justNumbers(input).length === 16 && hyphenArray[3] === "true" ) {
         return true;
      }
      else {
         return false;
      }
   };


   // a  change in the original withoutSymbols function to work with hex values
   validator.withoutSymbolsHex = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("empty string");
      }

      var alphaNum = 'ABCDEFHIJKLMNOPQRSTUVWXYZ0123456789',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === "#") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();

   };


// 21
   validator.isHex = function (input) {
      var compareInput = this.withoutSymbolsHex(input);
      if (compareInput.charCodeAt(0) == 35 && compareInput.length === 7 || compareInput.length === 4 && input.length === compareInput.length) {
         console.log(compareInput.charCodeAt(0));
         return true;
      } else {
         return false;
      }


   };


   // a  change in the original withoutSymbols function to work with rgb values
   validator.withoutSymbolsRgb = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("empty string");
      }

      var alphaNum = 'RGB0123456789',


          newStr = '';


      for (var i = 0; i < input.length; i++) {


         if (alphaNum.indexOf(input.charAt(i)) !== -1 || alphaNum.toLowerCase().indexOf(input.charAt(i)) !== -1 || input.charAt(i) === ")" || input.charAt(i) === "(" || input.charAt(i) === ",") {

            newStr += input.charAt(i);
         }
      }


      return newStr.trim();

   };


// 22

   validator.isRgb = function (input) {
      var compareInput = this.withoutSymbolsRgb(input);
      var rgbStart = compareInput.slice(0,4);
      var lastParenCheck = compareInput.charAt(compareInput.length-1);
      var insideParen = compareInput.slice(4, compareInput.length -1);
      var numbersString = insideParen.replace(/\s/g, "").replace(/,/g, " ");
      var realNumbers = Number(numbersString.replace(/\s/g,""));
      var numbersCount = numbersString.split(" ").length;
      var numberArray = numbersString.split(" ");
      var numberOfCommas = numbersString.replace(/\s/g,",").split(",").length - 1;


      if (compareInput.length === input.length && rgbStart === "rgb(" && lastParenCheck === ")" ) {
         if (numbersCount === 3 && isNaN(realNumbers) === false && numberOfCommas === 2 && Number(numberArray[0]) <= 255 && Number(numberArray[1]) <= 255 && Number(numberArray[2]) <= 255 ) {

            return true;

         }
         return false;
      }
   };






// 23
   validator.isHSL = function (input) {
      var cond1 = false;
      var cond2 = false;
      var cond3 = false;
      var HSLchecker = false;

      if (input.slice(0, 4) === "hsl(" && input.slice(-1) === ")") {
         cond1 = true;
      }

      var inputArr = input.slice(4, -1);
      inputArr = inputArr.split(",");

      for (var i = 0; i < inputArr.length; i++) {
         inputArr[i] = parseInt(inputArr[i]);
      }


      if (inputArr[0] >= 0 && inputArr[0] <= 360) {
         cond2 = true;
      }

      var str = inputArr.toString();
      if (str.length === 7) {
         cond3 = true;
      }

      if (cond1 === true && cond2 === true && cond3 === true) {
         HSLchecker = true;
      }

      return HSLchecker;

   };




   validator.isColor = function (input) {
      var rgb = this.isRgb(input);
      var  hsl = this.isHSL(input);
      var hex = this.isHex(input);

      if (rgb || hsl || hex) {
         return true;
      }
      else {
         return false;
      }
   };




// 25


   validator.isTrimmed = function (input) {

      if (input === undefined) {
         throw new Error("parameter is missing");
      }
      if (!input) {
         alert("empty string");
      }
      if (input.trim().length < input.length) {
         return false;
      }
      else if (input.trim().length === input.length && this.countWords(input) === input.split(" ").length) {
         return true;
      }
      else {
         return false;
      }

   };

   // add the validator object into the global window object for easier access
   window.validator = validator;


})(window);

