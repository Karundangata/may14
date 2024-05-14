function isPasswordValid(password, commonWords = []) {
    // Check if the password is blank
    if (!password) {
        return false;
    }

    // Check for repeated characters in a row
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return false;
        }
    }
    const passwordLower = password.toLowerCase();
    for (let word of commonWords) {
        if (passwordLower.includes(word.toLowerCase())) {
            return false;
        }
    }
    return true;
}
const password = "StrongPa$$word123";
const commonWords = ["password", "123456", "qwerty", "admin"];
console.log(isPasswordValid(password, commonWords));