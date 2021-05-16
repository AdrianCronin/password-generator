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

  var password = password + specialChar[23]; // testing behavior of escape character

  // 
  console.log(bigList);
  console.log(numbers);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChar);
  

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


