function generatePassword(firstName, lastName) {
    if (firstName.length < 3 || lastName.length < 3) {
        throw new Error("First name and last name must each be at least 3 characters long.");
    }
    const firstPart = firstName.substring(0, 3);
    const lastPart = lastName.substring(lastName.length - 3);
    const password = `${firstPart}${lastPart}@2024`;
    return password;
}
const firstName = "Karunda";
const lastName = "Ngata";
console.log(generatePassword(firstName, lastName)); 
