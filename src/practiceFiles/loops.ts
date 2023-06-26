/* Arrow functions strip away as much extraneous information as possible:
- word function
- parentheses around arguments
- word return
- curly braces
All you need to do is use the fat arrow => to indicate that you’ll be building a function!
*/

// before converting to arrow function
function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalizeWord('fork'));

// arrow function
const capitalizeWithArrowFunction = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

// before
function key() {
  return 'abc123';
}
console.log(key());

// after
const keys = () => {
  return 'abc123';
};
console.log(keys);


// before
const capitalize = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
};

function greet(first: string, last: string): string {
  return `Oh, hi ${capitalize(first)} ${capitalize(last)}`;
}

console.log(greet('joe', 'morgan'));

