//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// todo initiate empty object
// todo Check if the response already exists or not
// todo if it exists then increment the count
// todo if not then initialize it with 1

const count = surveyResponses.reduce((table, response) => {
  // console.log(table, " : ", response);
  // if (table[response]) {
  //   table[response] = table[response] + 1;
  // } else {
  //   table[response] = 1;
  // }
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});

console.log(count);

// ? Output
// {A:  }
