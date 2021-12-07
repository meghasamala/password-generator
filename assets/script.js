// Assignment code here

var getPasswordLength = function() {
  let length = window.prompt("Enter a password length between 8 and 128 characters")

  lengthInt = parseInt(length)

  if (Number.isInteger(lengthInt)) {
    if (lengthInt >= 8 && lengthInt <= 128) {
      return lengthInt
    }
    else {
      window.alert("Pick a number between 8 and 128")
      return getPasswordLength()
    }
  }
  else {
    window.alert("Make sure to enter a number")
    return getPasswordLength()
  }
}

var buildPassword = function() {
  var includeLowercase = window.confirm("Include lowercase letters in password?")
  var includeUppercase = window.confirm("Include uppercase letters in password?")
  var includeNumbers = window.confirm("Include numbers in password?")
  var includeSpecial = window.confirm("Include special characters in password?")

  let chars = ''

  if (includeLowercase == true) {
    chars += "abcdefghijklmnopqrstuvwxyz"
  }
  if (includeUppercase == true) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (includeNumbers == true) {
    chars += "1234567890"
  }
  if (includeSpecial == true) {
    chars += " !#$%&()*+,-./:;<=>?@[]\^_`{|}~"
  }
  else {
    window.alert("You must pick at least one character type")
    return buildPassword()
  }

  return chars
}

var generatePassword = function(lengthInt, chars) {
  
  for (var i = 0; i < lengthInt; i++) {
    randomChar = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomChar, randomChar+1)
  }

  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = getPasswordLength()
  var characters = buildPassword()
  

  var password = generatePassword(passLength, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
