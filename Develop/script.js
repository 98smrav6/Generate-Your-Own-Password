// Assignment code here
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return null;
  }
}

function generatePassword() {
  var options = getPasswordOptions();
// Variable to store password as it's being concatenated
  var result = [];

// Arrray to store types of characters to include in password
  var possibleCharacters = [];
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
