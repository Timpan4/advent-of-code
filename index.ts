const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const str = "3ddzjxlsg69nine2eighttwoseven";

let tempWord = "";
let matches = [];

for (let i = 0; i < str.length; i++) {
    tempWord += str[i];
    if (
        (words.includes(tempWord) || numbers.includes(tempWord)) &&
        (str[i + 1] === undefined || !isNaN(str[i + 1]) || !isNaN(tempWord))
    ) {
        matches.push(tempWord);
        tempWord = "";
    }
}

console.log(matches); // ["3", "nine", "2", "eight", "seven"]
