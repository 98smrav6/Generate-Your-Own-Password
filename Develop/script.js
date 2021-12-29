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
  
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does NOT include any types of characters.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false 
  ) {
    alert('Must select at least one character type');
    return null;
  }

  // Object to store user input
  var passwordOptions = {
    length = length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
  
  return passwordOptions;
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
