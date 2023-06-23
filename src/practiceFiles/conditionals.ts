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

// The most common problem occurs when you’re testing existence in an array
// by checking the index of a value:
console.log(['c', 'd'].indexOf('c')); // 0 which is falsy

/* use a strict equivalency check to make sure the value is there and it’s in
the format you want.If you use strict equivalency, you can guard against a 
situation where someone sets employee.equipmentTraining to 'Not Trained'*/
const baker = {
  name: 'Panfilo',
  bruleeTraining: true,
};

function checkAuthorization() {
  if (baker.bruleeTraining !== true) {
    return 'Not authorized to operate blow torch';
  }
  return `Hello, ${baker.name}`;
}

// baker.bruleeTraining = 'Not Trained';
console.log(checkAuthorization());

// const a = '0';
// if (a == false) {
//   console.log('Hello');
// } else {
//   console.log('Bye');
// }
// output: Hello

// Ternary practice
// ternary expressions allow your code to be not just more simple, but also more predictable,
// because they cut down on the number of variables that are being reassigned.
// before ternary

const active = true;
let display;

if (active) {
  display = 'blue';
} else {
  display = 'black';
}
console.log(display);

// after
const isThisActive = active ? 'blue' : 'black';
console.log(display);

//rewrite
const title = 'cook';
let permissions;
if (title === 'cook') {
  permissions = ['time', 'pay'];
} else {
  permissions = ['time'];
}
console.log(permissions);

// with ternary
const typeOfPermissions = title === 'cook' ? ['time', 'pay'] : ['time'];

// avoid chaining multiple ternary expressions together, it makes it unreadable
function getJobTitle(title: string): string[] {
  const permissions =
    title === 'supervisor' || title === 'teacher'
      ? title === 'teacher'
        ? ['time', 'overtimeAuthorization', 'pay']
        : ['time', 'overtimeAuthorization']
      : ['time'];
  return permissions; // unreadable and ugly looking
}
console.log(getJobTitle('manager'));
console.log(getJobTitle('supervisor'));
