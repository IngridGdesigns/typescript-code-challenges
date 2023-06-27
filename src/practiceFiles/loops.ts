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
const paperTypes = supplies.filter(item => item.match(findPaper));
console.log(paperTypes);
