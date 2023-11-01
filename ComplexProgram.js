/* 
   FILENAME: ComplexProgram.js
   DESCRIPTION: A complex and sophisticated JavaScript program that performs various operations
                such as data manipulation, algorithmic calculations, and DOM manipulation.
*/

// Global variables
let data = [1, 2, 3, 4, 5];
let result = 0;

// Function to calculate the sum of an array
function calculateSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// Function to calculate the factorial of a number
function calculateFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// DOM manipulation function to display the result
function displayResult() {
  const div = document.createElement('div');
  div.textContent = `The result is ${result}`;
  document.body.appendChild(div);
}

// Generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to sort an array in ascending order using bubble sort algorithm
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Function to find the longest word in a sentence
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Main execution
const sum = calculateSum(data);
console.log(`Sum of the elements in the data array: ${sum}`);

const factorial = calculateFactorial(5);
console.log(`Factorial of 5: ${factorial}`);

displayResult();

const randomNumber = getRandomNumber(1, 100);
console.log(`Random number between 1 and 100: ${randomNumber}`);

const sortedArray = bubbleSort([9, 5, 2, 7, 1]);
console.log(`Sorted Array: ${sortedArray}`);

const longestWord = findLongestWord("This is a sample sentence");
console.log(`Longest word in the sentence: ${longestWord}`);

const reversedString = reverseString("Hello World");
console.log(`Reversed string: ${reversedString}`);

// ... (continued with additional functions and complex logic)
// ...
// ... (~200 lines or more of complex and sophisticated JavaScript code)