// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

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
  var passwordList = []; // this array will contain the randomly selected characters from `bigList` array. characters from here will again be randomly selected and placed into the `password` string 
  var password = ""; // this string will be what this function builds and returns
  var rand = 0; // variable for randomly generated numbers

  // ask the user how long they want their password between 8 and 128 characters. Alerts them if the number is invalid and returns the function with another reminder of the password length limits
  var passwordLength = prompt("To choose your password length, please enter a number between 8 and 128", 8);
  passwordLength = Number(passwordLength); // converts the input to a number or Not a Number to test if their unput is a number
  if ( passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength) ) {
    alert("Please pick a number between 8 and 128");
    return "Please pick a number between 8 and 128";
  }

  // ask the user if they want numbers included and stores their answer as a boolean variable
  var hasNumbers = confirm("Would you like Numbers in your password?\n Press OK for YES or CANCEL for NO");
  // ask the user if they want lower case characters included stores their answer as a boolean variable
  var hasLowerCase = confirm("Would you like Lower Case characters in your password?\n Press OK for YES or CANCEL for NO");
  // ask the user if they want upper case characters included stores their answer as a boolean variable
  var hasUpperCase = confirm("Would you like UPPER CASE characters in your password?\n Press OK for YES or CANCEL for NO");
  // ask the user if they want special characters included stores their answer as a boolean variable
  var hasSpecialChar = confirm("Would you like Special Characters in your password?\n Press OK for YES or CANCEL for NO");

  // if the user does not pick any of the character types it tells the user and returns the function
  if ( !hasNumbers && !hasLowerCase && !hasUpperCase && !hasSpecialChar) {
    alert("Please pick at least 1 type of character");
    return "Please pick at least 1 type of character";
  }

  // concatenate `numbers` array onto `bigList` if numbers criteria is selected
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

  // concatenate `upperCase` onto `bigList` if uppercase letters criteria is selected 
  if (hasUpperCase) {
    rand = Math.floor(Math.random() * upperCase.length);
    passwordList.push(upperCase[rand]); // adds a random uppercase letter onto the passwordList array guaranteeing at least one uppercase letter in the password
    bigList = bigList.concat(upperCase);
  }

  // concatenate `specialChar` onto `bigList` if special characters criteria is selected 
  if (hasSpecialChar) {  
    rand = Math.floor(Math.random() * specialChar.length);
    passwordList.push(specialChar[rand]); // adds a random special character onto the passwordList array guaranteeing at least one special character in the password
    bigList = bigList.concat(specialChar);
  }

  passwordLength -= passwordList.length; // changes the passwordLength variable to account for characters already added to the passwordList array
  
  // for loop that adds random characters from the `bigList` array to `passwordList` array to fill out the rest of the password length
  for (var i=0; i < (passwordLength); i++) {
    rand = Math.floor(Math.random() * bigList.length);
    passwordList.push(bigList[rand]);
  }

  passwordLength = passwordList.length; // setting the passwordLength variable to the initial length of the `passwordList` array because the next for loop will be shrinking the array with each iteration

  // for loop takes the array with randomly selected characters and randomly puts them into a string, this is to randomize the first characters that were added to the array earlier. Without this the first 1-4 characters would always be in number, lower case, upper case, special character order.
  for (var i=0; i < (passwordLength); i++) {
    rand = Math.floor(Math.random() * passwordList.length);
    password += passwordList[rand]; // adds the character to the string
    passwordList.splice(rand, 1); // removes the character from the array
  }
   
  return password; // returns the string generated
};