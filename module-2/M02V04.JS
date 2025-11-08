// * Some

// const numbers = [1, 99, 3, 7, 9];

// const hasEvenNumber = numbers.some((number) => number % 2 === 0);

// console.log(hasEvenNumber);

// const currentUserRole = ["user", "editor", "admin"];
// const futureAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRole.some((role) =>
//   futureAccessRoles.includes(role)
// );

// console.log(canAccess);

// Array.from()

// const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil(stop - start) / step },
    (_, i) => start + i * step
  );

console.log(range(1, 11, 2));
