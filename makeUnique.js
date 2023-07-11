// Write your solution below:
// Make Unique String
// Difficulty
// Medium
// Concepts
// Loops, Conditionals, String Methods
// Write a function to remove all duplicate letters from a provided string. 
// The string will only contail lowercase letters between a - z. 
// The string will not contain spaces.
// For example:
// >>> makeUnique('helloworld')
// // helowrd
// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu
 

function removeDuplicate(string) {
    let uniqueLetters = [];
    let answer = '';

    for(let i=0; i < string.length; i++) {
        let currentLetter =string[i];
        if(!uniqueLetters.includes(currentLetter)) {
            uniqueLetters.push(currentLetter);
            answer += currentLetter;
        }
    }
    return answer;
}
console.log(removeDuplicate('helloWorld'));


// Review later 
// function makeUnique(str) {
//     let newStr = str.split("")
//     const unique = [...new Set(newStr.map(item => item))];
//     console.log(unique.join(""))
// }