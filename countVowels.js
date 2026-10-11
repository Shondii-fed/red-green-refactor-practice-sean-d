/*
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    if (typeof str !== "string") {
        return "Please enter a string.";
    } else {
        return [...str].filter(char => vowels.includes(char)).length;
    };
};
*/
function countVowels(str) {
    const vowels = "aeiou";
    if (typeof str !== "string") {
        return "Please enter a string.";
    } else {
        return [...str.toLowerCase()].filter(char => vowels.includes(char)).length;
    };
};

module.exports = {countVowels};