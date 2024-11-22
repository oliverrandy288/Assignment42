// 1. Exploring Array Manipulation in JavaScript

// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];

// Adding a new element to the end of the array
fruits.push('grapes');
console.log('Fruits after push:', fruits);

// Removing the last element from the array
fruits.pop();
console.log('Fruits after pop:', fruits);

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', numbers);

// Task 3: Applying Array Methods
let numbers2 = [3, 1, 5, 2, 4];

// Using the map method to double each number in the array
let doubledNumbers = numbers2.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// Using the filter method to filter out even numbers from the array
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Using the reduce method to calculate the sum of all numbers in the array
let sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of numbers:', sum);

// 2. Exploring String Manipulation in JavaScript

// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log('Message length:', message.length);

// Task 2: Converting Cases
let text = "Hello, World!";

// Converting to uppercase
let upperText = text.toUpperCase();
console.log('Uppercase text:', upperText);

// Converting to lowercase
let lowerText = text.toLowerCase();
console.log('Lowercase text:', lowerText);

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";

// Extracting a substring (from index 4 to 9)
let substring = sentence.substring(4, 9);
console.log('Extracted substring:', substring);

// Task 4: Splitting Strings
let sentence2 = "The quick brown fox";

// Splitting the sentence into an array of words
let wordsArray = sentence2.split(' ');
console.log('Array of words:', wordsArray);
