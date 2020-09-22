// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&;";
    var randomPassword = ""

    var passwordLength = (Math.floor(Math.random() * 121) + 8);
    for (let i = 0; i < passwordLength; i++) {
        var randomCombo = Math.floor(Math.random() * 67);
        let newPassword = characters[randomCombo];
        randomPassword += newPassword;

    }
    prompt("Enter an UPPER case letter.")
    prompt("Enter a lower case letter.")
    prompt("Enter a number.")
    prompt("Enter a special character. #$%&")


    return randomPassword
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
