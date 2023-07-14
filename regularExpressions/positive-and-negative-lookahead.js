let sampleWord = "astronaut";
let pwRegex = /(?=.{6,})(?=.*\d\d.*)/; // Change this line
let result = pwRegex.test(sampleWord);