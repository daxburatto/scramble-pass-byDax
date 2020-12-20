// Assignment code here
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min)

   return value
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
