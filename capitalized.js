function capitalizeWords(input) {
    const words = input.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
    });
    return capitalizedWords.join(' ');
    return results;
}
const inputString = "karunda";
const capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString); 
