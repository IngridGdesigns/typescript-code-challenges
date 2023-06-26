/* Arrow functions strip away as much extraneous information as possible:
- word function
- parentheses around arguments
- word return
- curly braces
All you need to do is use the fat arrow => to indicate that you’ll be building a function!
*/

// before converting to arrow function - Function with one parameter#
function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalizeWord('treasure'));

// arrow function
const capitalizeWithArrowFunction = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

// before
function key() {
  return 'abc123';
}
console.log(key());

// after - Function with no parameters#
const keys = () => {
  return 'abc123';
};
console.log(keys());

const capitalize = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
};

// before - Function with more than one parameter
// function greet(first: string, last: string): string {
//   return `Oh, hi ${capitalize(first)} ${capitalize(last)}`;
// }

const greet = (first: string, last: string) => {
  return `Oh, hi ${capitalize(first)} ${capitalize(last)}!`;
};

console.log(greet('mafalda', 'quino'), '\n');

// before - One line functions
const animalName = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
};

function formatAnimalName(name: string) {
  return `${animalName(name)} is hungry.`;
}

console.log(formatAnimalName('ostrich'));

const oneLineFormatAnimalName = (name: string) =>
  `${animalName(name)} is hungry.`;

console.log(oneLineFormatAnimalName('cat'));

//anonymous function
const capitalizeName = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
};

function applyCustomGreeting(name: string, callback: any) {
  return callback(capitalizeName(name));
}

// anonymous
// const greeting = applyCustomGreeting('mark', function (name: string) {
//   return `Oh, hi ${name}!`;
// });

// to arrow function
const greeting = applyCustomGreeting(
  'mark',
  (name: string) => `Oh, hi ${name}!`
);

console.log(greeting);
