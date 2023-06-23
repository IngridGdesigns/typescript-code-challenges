// ternaries - a simple method for reducing if/else conditionals to a single line.
function calculateBalance(spent: number[]): number {
  const [spendings, income] = spent;
  const balance = income - spendings;
  return balance;
}

const spending = [430];
const income = [700];

const transactions = [...spending, ...income];
const balance = calculateBalance(transactions);
// let color;
const color = balance > 0 ? 'green' : 'red';
// is the same as :
// if (balance > 0) {
//   color = 'green';
// } else {
//   color = 'red';
// }
console.log(color);

