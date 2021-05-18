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
  // made arrays for the different character types
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var bigList = []; // this array will contain all the character types that the user selects
  var passwordList = []; // this array will contain the randomly selected characters from `bigList`. characters from here will again be randomly selected and placed into the `password` string 
  var password = ""; // this string will be what this function returns
  var rand = 0; // variable for randomly generated numbers

  // ask the user how long they want their password between 8 and 128 characters. Alerts them if the number is invalid and returns the function with another reminder of the password length limits
  var passwordLength = prompt("Please enter a number between 8 and 128.", 8);
  passwordLength = Number(passwordLength); // converts the input to a number or NaN
  if ( passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength) ) {
    alert("Please pick a number between 8 and 128");
    return "Please pick a number between 8 and 128";
  }

  // ask the user if they want numbers included
  var hasNumbers = confirm("Would you like numbers in your password?\n Press OK for yes or CANCEL for no");
  // ask the user if they want lower case characters included
  var hasLowerCase = confirm("Would you like lower case characters in your password?\n Press OK for yes or CANCEL for no");
  // ask the user if they want upper case characters included
  var hasUpperCase = confirm("Would you like upper case characters in your password?\n Press OK for yes or CANCEL for no");
  // ask the user if they want special characters included
  var hasSpecialChar = confirm("Would you like special characters in your password?\n Press OK for yes or CANCEL for no");

  // if the user does not pick any of the character types it tells the user and returns the function
  if ( !hasNumbers && !hasLowerCase && !hasUpperCase && !hasSpecialChar) {
    alert("Please pick at least 1 type of character");
    return "Please pick at least 1 type of character";
  }

  // concatenate `numbers` onto `bigList` if numbers criteria is selected
  if (hasNumbers) {
    rand = Math.floor(Math.random() * numbers.length);
    passwordList.push(numbers[rand]); // adds a random number to the `passwordList` array guaranteeing at least one number in the password
    bigList = bigList.concat(numbers);
  }

  // concatenate `lowerCase` onto `bigList` if lowercase letters criteria is selected
  if (hasLowerCase) {
    rand = Math.floor(Math.random() * lowerCase.length);
    passwordList.push(lowerCase[rand]); // adds a random lowercase letter onto the passwordList array guaranteeing at least one lowercase letter in the password
    bigList = bigList.concat(lowerCase);
  }

  // concatenate `upperCase` onto `bigList` if lowercase letters criteria is selected 
  if (hasUpperCase) {
    rand = Math.floor(Math.random() * upperCase.length);
    passwordList.push(upperCase[rand]); // adds a random uppercase letter onto the passwordList array guaranteeing at least one uppercase letter in the password
    bigList = bigList.concat(upperCase);
  }

  // concatenate `specialChar` onto `bigList` if lowercase letters criteria is selected 
  if (hasSpecialChar) {  
    rand = Math.floor(Math.random() * specialChar.length);
    passwordList.push(specialChar[rand]); // adds a random special character onto the passwordList array guaranteeing at least one uppercase letter in the password
    bigList = bigList.concat(specialChar);
  }

  passwordLength -= passwordList.length; // changes the variable to account for characters already added to the passwordList array
  
  // for loop that adds random characters from the `bigList` to `passwordList`  based on the user's password length input
  for (var i=0; i < (passwordLength); i++) {
    rand = Math.floor(Math.random() * bigList.length);
    passwordList.push(bigList[rand]);
  }

  passwordLength = passwordList.length; // so the next for loop iterates over the initial array size since it will be shrinking the array each iteration

  // for loop takes array with randomly selected characters and randomly puts them into a string this is to randomize the first 1-4 characters that were added to guarantee at least 1 character of each selected type
  for (var i=0; i < (passwordLength); i++) {
    rand = Math.floor(Math.random() * passwordList.length);
    password += passwordList[rand]; // adds the character to the string
    passwordList.splice(rand, 1); // removes the character from the array
  }
   
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


