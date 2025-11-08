// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);

// const sortedNumber = numbers.sort((a, b) => b - a);
// console.log(numbers);
// console.log(sortedNumber);

// Nested array flat

// const arr = [1, 2, 3, [4, 7, [8, 12, 6, [6, 98, 32]]]];
// const flatArr = arr.flat(Infinity);
// console.log(flatArr);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())];
console.log(filterTags);
