/* For loops are necessary but use the right tool for the problem
 you’re going for simplicity, readability, and predictability, and traditional loops don’t
 meet those goals.Array methods do.
All array methods are just methods that take a callback that act on each member of an array.
*/

// .map
const toys = [
  { name: 'stacking cups', material: 'plastic' },
  { name: 'blocks', material: 'wood' },
  { name: 'ball', material: 'rubber' },
  { name: 'teddy', material: 'cotton' },
];
// get list of toys
const allToys = [];
for (let i = 0; i < toys.length; i++) {
  allToys.push(toys[i].name);
}
// console.log(allToys);

// or refactor
function getAllToyNames(toyName: { name: string; material: string }): string {
  return toyName.name;
}

const toyNamesRefactored1 = toys.map(getAllToyNames);

// refactor forloop with anonymous function
const toyNames = toys.map((toy) => toy.name);
console.log(toyNames);

/* Advantages of map method
You know you’re going to get an array. You don’t need to define one ahead of time.
You know it will be the same size as the original array.
You know it will contain the toy names and nothing else.


// filter()
 The array method filter() will perform this exact action as map() but you aren’t changing 
 any information in the array—-- you’re just reducing what you get back */

const supplies = [
  'pencils',
  'paper',
  'markers',
  'paper towels',
  'erasers',
  'glue',
  'sketchbooks',
  'paper rolls',
];

const paper = [];

for (let i = 0; i < supplies.length; i++) {
  if (supplies[i].match(/paper/)) {
    paper.push(supplies[i]);
  }
}
// console.log(paper);

// refactor to use filter
const findPaper = /paper/;
const paperTypes = supplies.filter((item) => item.match(findPaper));
console.log(paperTypes);

/* find()
The find() method takes a function as argument, a function that returns a 
truthy or falsy value, and returns only the first result that evaluates to true.
If there’s no true value, it returns undefined.*/

const findScissors = /scissors/;
const scissors = supplies.filter((item) => item.match(findScissors));
console.log(scissors); // output: empty array

// good candidate if you only want the first item found or if you know there will only
// be one value of the item you're looking for. 

const talent = [
  {
    name: 'Valeria',
    performance: ['juggling'],
  },
  {
    name: 'Rosita',
    performance: ['tightrope', 'dancing'],
  },
  {
    name: 'Joaquin',
    performance: ['clown'],
  },
];

let jugglingPerformer;

for (let i = 0; i < talent.length; i++) {
  if (talent[i].performance.includes('juggling')) {
    jugglingPerformer = talent[i];
    break;
  }
}

// console.log(jugglingPerformer);

// refactor for loop
const juggler = talent.find((performer) =>
  performer.performance.includes('juggling')
);
console.log(juggler);

// The only down-side to using find() is that you can’t be absolutely sure of 
// the return value.If there’s no match, you get undefined,
const contortionist = talent.find((performer) =>
  performer.performance.includes('contortionist')
);
console.log(contortionist); // output: undefined
