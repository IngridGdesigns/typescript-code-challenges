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

// Equivalency - a value that’s equivalent if it’s the same, but of a different 
// type & is checked with ‘==‘.
// console.log(4 == '4'); // errors in TypeScript but not JavaScript
// output: true

// Identical values, or values with strict equality, mean that they must be of the same type.
// console.log(4 === '4'); // errors in TypeScript but not JavaScript
// output: false;

console.log(4 === 4);
// output: true;

// An empty string is equal to false (but not identical). It’s falsy.
// console.log('' == false); //errors in TypeScript
// outputs: true
if ('') {
  console.log('I am not false!');
} else {
  console.log('I am false :( !');
}
// Values that are falsey:  0, null, and an empty string.

// Arrays and objects, even empty arrays and objects, are always truthy.
// So they have to be checked with [].length or Object.keys({}).length to 
// get a truthy number
const person = {
  name: 'Eric',
  equipmentTraining: '',
};

if (!person.equipmentTraining) {
  console.log(`${person.name} is not authorized to operate machinery`);
}