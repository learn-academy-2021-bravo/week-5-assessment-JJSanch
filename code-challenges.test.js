// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// / --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


// I used let statements to organize the input and the expected output
describe("codedMessage", () => {
    let stringInput = "a,e,i,o"
    
    let codedMessageOutput = "4,3,2,1";

    test("return a string with a coded message that is 4,3,2,1",() =>{

        expect(codedMessage(stringInput)).toEqual(codedMessageOutput)
    })
})

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


//Used describe and it statement to name and show the behavior of this test
describe("codeWordScrambler",() => {
    it("converts the letter A into number 4 or the letter E into number 3 based on input",() => {
        // expect statements and .toEqualare used to define and compare the expected inputs and outputs
        expect(CodeWordScrambler(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(CodeWordScrambler(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(CodeWordScrambler(secretCodeWord3)).toEqual("3cc3ntr1c")


    })
})
// this test failed as expected

// b) Create the function that makes the test pass.

    const codeWordScrambler = (string) => {
        //write let statement that will hold an empty string for the expected output
        let newString = string.split("")
        //here I would write conditional statements to return the letter or A or E based on the input.  However I did not know how to write that out.


        //return would return the newString and would use .join to join the values into a string that had been rpeviously split.
        return newString.join("")
    }
    // attempted to use if and else statements to make the test pass, but was not able to have the test pass using this function


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Banana", "Peach"]




    

// a) Create a test with an expect statement using the variable provided.

    //decided to use let statements to represent the expected inputs and variables in the test

describe("returnWordsWithA",() => {
    let arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
    
    let arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]

    test("return all words that contain the letter A",() => {

        // used expect statements and the .toEqual matcher to compare the inputs and outputs
        expect(returnWordsWithA(arrayOfWords1)).toEqual(["Apple", "Banana"])
        expect(returnWordsWithA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Blueberry",  "Peach"])
    })
})

//test failed as expected



// b) Create the function that makes the test pass.
const returnWordsWithA = (array) => {
    //Here the function needs to .search() method but did not know how to apply it to the function to return the expected output
    return array.search((value) => {
        return value === a
    })

// attempted to make the test pass using const and a .search method.  However I was not able to make this test pass with the above function.





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//used it and expect statements to structure the test

describe("fullHouse",() => {
    it("returns full house or not a full house based on input")
        //used .toEqual matcher to compare the inputs and outputs
        expect(hand1()).toEqual("full house")
        expect(hand2()).toEqual("not a full house")
        expect(hand3()).toEqual("not a full house")
})

//test did not pass as expected.



// b) Create the function that makes the test pass.
const fullHouse = (array) => {
    if(array === [5, 5, 5, 3, 3]){
        return "full house"
    } else {
        return "not a full house"
    }
}
//did not know how to go about solving this problem.  I did think to use the .filter() method and/or conditonal statements but did not know how to apply them to this function
