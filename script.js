// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//This function is called when generate button is clicked
function generatePassword() {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var bigList = [];
  var passwordLength = 8;
  var password = "";
  var hasNumbers = false;
  var hasLowerCase = false;
  var hasUpperCase = false;
  var hasSpecialChar = false;
  var rand = 0;

  // ask the user how long they want their password between 8 and 128 characters. Alerts them if the number is invalid and returns the function with another reminder of the password length limits
  passwordLength = prompt("Please enter a number between 8 and 128.", 8);
  passwordLength = Number(passwordLength); // converts the input to a number or NaN
  console.log(typeof passwordLength); // testing
  console.log("passwordLength = " + passwordLength); // testing
  if ( passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength) ) {
    alert("Please pick a number between 8 and 128");
    return "Please pick a number between 8 and 128";
  }

  // ask the user if they want numbers included
  hasNumbers = confirm("Would you like numbers in your password?\n Press OK for yes or CANCEL for no");
  // ask the user if they want lower case characters included
  hasLowerCase = confirm("Would you like lower case characters in your password?\n Press OK for yes or CANCEL for no");
  // ask the user if they want upper case characters included
  hasUpperCase = confirm("Would you like upper case characters in your password?\n Press OK for yes or CANCEL for no");
  // ask the user if they want special characters included
  hasSpecialChar = confirm("Would you like special characters in your password?\n Press OK for yes or CANCEL for no");

  // if the user does not pick any of the character types it tells the user and returns the function
  if ( !hasNumbers && !hasLowerCase && !hasUpperCase && !hasSpecialChar) {
    alert("Please pick at least 1 type of character");
    return "Please pick at least 1 type of character";
  }

  // concatenate `numbers` onto `bigList` if numbers criteria is selected adds a random number onto the password string
  if (hasNumbers) {
    rand = Math.floor(Math.random() * numbers.length);
    password += numbers[rand];
    bigList = bigList.concat(numbers);
  }

  // concatenate `lowerCase` onto `bigList` if lowercase letters criteria is selected adds a random lowercase letter onto the password string
  if (hasLowerCase) {
    rand = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase[rand];
    bigList = bigList.concat(lowerCase);
  }

  // concatenate `upperCase` onto `bigList` if lowercase letters criteria is selected adds a random uppercase letter onto the password string
  if (hasUpperCase) {
    rand = Math.floor(Math.random() * upperCase.length);
    password += upperCase[rand];
    bigList = bigList.concat(upperCase);
  }

  // concatenate `specialChar` onto `bigList` if lowercase letters criteria is selected adds a random special character onto the password string
  if (hasSpecialChar) {  
    rand = Math.floor(Math.random() * specialChar.length);
    password += specialChar[rand];
    bigList = bigList.concat(specialChar);
  }

  
  // for loop that adds characters from the `bigList` to `password` string
  passwordLength -= password.length;
  // testing variables before forloops
  console.log("remaining characters to generate is " + passwordLength);
  console.log("string length is " + password.length);
  console.log("current string is " + password);
  for (var i=0; i < (passwordLength); i++) {
    rand = Math.floor(Math.random() * bigList.length);
    password += bigList[rand];
    console.log("string length is " + password.length);
    console.log("current string is " + password);
  }
   

  // Testing Arrays
  // console.log(bigList);
  // console.log(numbers);
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(specialChar);
  

  return password; // returns the string generated
}

// create arrays with all the possible criteria 
// create empty `password` string
// After button is clicked prompt user for criteria
// save length criteria into a variable
// possibly create new array with selected criteria
// randomly select 1 character from each selected criteria array and put into `password` string
// use a for loop that iterates the remaining string length number of times
    // every iteration select a random character from the possible criteria array and attach to `password` string


