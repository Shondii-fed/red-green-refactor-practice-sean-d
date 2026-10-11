const { countVowels } = require("../countVowels");

describe("A function that takes in a string and returns a value for how many vowels are present", () => {
    
    test("Positive case: String inputted and number of vowels returned", () => {
        expect(countVowels("word")).toBe(1);
    })

    test("Negative case: If a non-string is entered, a message should be returned", () => {
        expect(countVowels(47)).toBe("Please enter a string.");
    })

    test("Edge case: If a string is entered with capitalized characters and spaces", () => {
        expect(countVowels("This Works")).toBe(2);
    })
})