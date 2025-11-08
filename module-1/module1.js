// const startTime = performance.now();

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log("firstArray", firstArray.length);
console.log("secondArray", secondArray.length);

// const endTime = performance.now();

// console.log(`This code took ${endTime - startTime} ms`);

console.log("map1");
const firstUserList = firstArray.map((number) => ({ userId: number }));
console.timeEnd("map1");

console.log("map2");
const secondUserList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");

// const user = secondUserList.find((user) => user.userId === 200);
const user = secondUserList[3000];
console.timeEnd("find");
