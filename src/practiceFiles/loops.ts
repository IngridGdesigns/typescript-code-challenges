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

// you can short circuit to avoid undefined using 'coalescing operator' aka elvis operator ?:

const images = [
  {
    path: './me.jpg',
    profile: false,
  },
];

const profile = images.find((image) => image.profile) ?? {
  path: './default.jpg',
};

console.log(profile);

//forEach()
/*forEach() performs an action on every member.This is common when you finally 
get an array to the size and shape you want and then you want to do 
something with that data.
The return statment does absolutely nothing!! its void by nature

Any action you take must affect something outside the function. Changing something outside 
the scope of the function is called a side effect, and though it’s not horrible, it should 
be exercised with caution.

when you know you must cause a side effect, you should use forEach().

*/

const danceClub = [
  { name: 'minh', active: true, email: 'minh@email.com' },
  { name: 'alani', active: true, email: '' },
  { name: 'maël', active: true, email: '' },
  { name: 'leo', active: false, email: 'leo452@email.com' },
  { name: 'juan', active: true, email: '' },
  { name: 'alex', active: false, email: 'lex@email.com' },
  { name: 'joão', active: true, email: 'joãolovesfood@email.com' },
];

function sendEmail(member: string): void {
  console.log(
    `Email sent with msg: hello ${member.toUpperCase()}, bring something to share for the potluck!!`
  ); // send email
}

danceClub.forEach((member) => sendEmail(member.name));

//  If members have an email set, use that. Otherwise, use their default danceClub email address.
const activeMembers = danceClub.filter((members) => members.active); // first filter out inactive members

const emails = activeMembers.map(
  (member) => member.email || `${member.name}@wiscsail.io`
);
console.log(emails);
/* output:
[
  'minh@email.com',
  'alani@wiscsail.io',
  'maël@wiscsail.io',
  'juan@wiscsail.io',
  'joãolovesfood@email.com',
];


if member.email ?? `${member.name}@wiscsail.io` output would be an array of some empty strings, 
['minh@email.com', '', '', '', 'joãolovesfood@email.com'];
*/

emails.forEach((bookClubMember) => sendEmail(bookClubMember));

// Chaining
// Removing the intermediate steps, you get an identical set of actions without any variable declarations.
const allActiveMembers = danceClub
  .filter((member) => member.active)
  .map((activeMember) => activeMember.email || `${activeMember.name}@wiscsail.io`)
  .forEach((person) => sendEmail(person));

/* Downside to chaining array methods is that each time you call a new method, you’re iterating 
over the whole returned array. This is bad if you are dealing with large data sets and Order does matter!

The reduce() method is different from other array methods in several ways, but the most important is 
that it can change both the size and the shape of data. And it doesn't necessarily return an array. */