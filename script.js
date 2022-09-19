
var optionsUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var optionsLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var optionsNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var optionsSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "?", "@", "[", "]", "^", "|", "~"]

function generatePassword() {
  var allCharacters = []
  var optionsLength = prompt("How long do you want the password to be? Password must be between 8 and 128 characters.");
  var length = parseInt(optionsLength);

  if (length < 8 || length > 128) {
    alert("Invalid length. Length must be between 8 and 128 characters.");
    return null;
  }

  var confUp = confirm("Do you want uppercase letters?")
  var confLow = confirm("Do you want lowercase letters?")
  var confNum = confirm("Do you want numbers?")
  var confSpecial = confirm("Do you want special characters?")
  console.log(length, confUp, confLow, confNum, confSpecial)
  if (confUp) {
    allCharacters = allCharacters.concat(optionsUp)
  }
  if (confLow) {
    allCharacters = allCharacters.concat(optionsLow)
  }
  if (confNum) {
    allCharacters = allCharacters.concat(optionsNum)
  }
  if (confSpecial) {
    allCharacters = allCharacters.concat(optionsSpecial)
  }
  console.log(allCharacters)

  var result = []
  for (var i = 0; i < length; i++) {
    var randIndex = Math.random() * allCharacters.length;
    var randInt = Math.floor(randIndex);
    result.push(allCharacters[randInt]);
  }
  console.log(result)
  return result.join('');
}


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
