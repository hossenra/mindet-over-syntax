const arr = ["apple", "mango", "orange", "apple"];

// const set = new Set(arr);
// set.has("tomato");

// console.log(set.delete("mango"));

// const test = Array.from(set);
// console.log(set);

const removeDupArr = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

// Set implementation

console.log(removeDupArr(arr));
const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(arr));
