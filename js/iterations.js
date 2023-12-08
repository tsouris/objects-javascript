const feedback = {
  good: 10,
  mid: 5,
  bad: 3,
};
//18

let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

const values = Object.values(feedback);
console.log(values);
for (const value of values) {
    console.log(value);
    totalFeedback += value;
}
console.log(totalFeedback);