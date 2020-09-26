// Assignment Code
var generateBtn = document.querySelector("#generate");
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
function generatePassword() {

    var passwordLength = parseInt(prompt("How many characters do you want in your password?"));
    if (isNaN(passwordLength)) {
        alert("Please enter a number.");
        return;
    }
    if (passwordLength < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    }
    if (passwordLength > 128) {
        alert("Password cannot contain more than 128 characters.");
        return;
    }

    var hasUpperCase = confirm("Will your password contain UPPER case letters?");
    var hasLowerCase = confirm("Will your password contain lower case letters?");
    var hasSpecChar = confirm("Will your password contain special characters?");
    var hasNumbers = confirm("Will your password contain numbers?");
    if (hasLowerCase === false && hasUpperCase === false && hasSpecChar === false && hasNumbers === false) {
        alert("Password must contain at least one option.");
        return;
    }
    console.log(passwordLength)

    var passwordChoices = {
        upCase: hasUpperCase,
        lowCase: hasLowerCase,
        specChar: hasSpecChar,
        num: hasNumbers
    }
// create array of users character selections

    var selectedCharacters = []
    if (passwordChoices.upCase) {
        selectedCharacters.push(upCase);
    }
    if (passwordChoices.lowCase) {
        selectedCharacters.push(lowCase);

    }
    if (passwordChoices.specChar) {
        selectedCharacters.push(specChar);
    }
    if (passwordChoices.num) {
        selectedCharacters.push(num);

    }
    console.log(selectedCharacters);
    // create password based on users selections

    let userPassword = "";
    for (let index = 0; index < passwordLength; index++) {
        let choicesIndex = Math.floor(Math.random() * selectedCharacters.length);
        let type = selectedCharacters[choicesIndex];
        console.log(type);
        let charIndex = Math.floor(Math.random() * type.length);
        let char = type[charIndex];
        userPassword += char;
        console.log(userPassword);
        console.log("------------------------------")
    }
    return userPassword;
}


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




