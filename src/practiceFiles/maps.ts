const cats = [
  {
    name: 'max',
    coastSize: 'long',
    breed: 'himalayan',
    color: 'black',
  },
  {
    name: 'don',
    coastSize: 'long',
    breed: 'balinese',
    color: 'colorpoint',
  },
  {
    name: 'shadow',
    coastSize: 'short',
    breed: 'brazilian shorthair',
    color: 'chocolate',
  },
];

// you must always explicitly create a new instance of a Map.
let catMap = new Map();

catMap.set('breed', 'balinese');

console.log(catMap);

console.log(catMap.get('breed'));

//ading data by chaining directly from the creation of the new instance
let chainingMapCats = new Map()
  .set('breed', 'siamese')
  .set('coatSize', 'long')
  .set('color', 'colorpoint');

console.log(chainingMapCats);
console.log('Getting the coat size:');
console.log(chainingMapCats.get('coatSize'));

/* you can pass an array of pairs with the first element being
 a key and the second element being a value.*/
let filters = new Map([
  ['breed', 'bengal'],
  ['coatSize', 'short'],
  ['color', 'spotted/marbled'],
]);

console.log(filters);
console.log(filters.get('color'));
filters.delete('color');
console.log(filters.get('color'));
console.log(filters);
filters.clear(); // delete all key-value pairs with clear() method
console.log(filters.get('color'));

// Map can take in different type of keys, such as integers
let errors = new Map([
  [100, 'Invalid name'],
  [110, 'Name should only contain letters'],
  [200, 'Invalid color'],
]);
console.log(errors.get(100));
// can also get the keys from a Map
console.log(errors.keys()); // The MapIterator is what will allow us to loop through data.

const map = new Map();

const foods = { dinner: 'Quesadillas', lunch: 'Soup', breakfast: 'Oatmeal' };
const yummyFood = {};

map.set(yummyFood, foods);

for (const [key] of map) {
  console.log(map.get(key));
}

const f = {
  color: 'black',
  breed: 'labrador',
};

function getAppliedFilters(f: any): any {
  const keys = Object.keys(f); // lengthy without a map
  keys.sort();
  console.log(keys);
  const applied: string[] = [];
  for (const key of keys) {
    applied.push(`${key}:${f[key]}`);
  }
  return `Your filters are: ${applied}.`;
}

// The for ... of syntax is very simple. It returns each value in the collection one at a time
const fruitFilters = new Map()
  .set('color', 'red')
  .set('type', 'apple')
  .set('seedless', false);

function checkFilters(fruitFilters: Map<string, string>): void {
  for (const entry of fruitFilters) {
    console.log(entry); // It’s a pair of the key-value, translating to an array
  }
}

checkFilters(fruitFilters);
console.log(fruitFilters.entries());

const veggies = new Map().set('color', 'green').set('type', 'squash');

// uses destructuring, helps you avoid breaking apart your data structure.
function getVeggies(veg: Map<string, string>): string {
  const applied = [];
  for (const [key, value] of veg) {
    applied.push(`${key}:${value}`);
  }
  return `Your filters are: ${applied.join(', ')}.`;
}

console.log(getVeggies(veggies), '\n');

const veggies2 = new Map().set('color', 'purple').set('type', 'eggplant');
// sorting by key with the spread operator
function sortByKey(a: [string, string], b: [string, string]) {
  return a[0] > b[0] ? 1 : -1;
}
function getSortedAppliedFilters(veggies2: Map<string, string>): string {
  //   const applied = [];
  //   for (const [key, value] of [...veggies].sort(sortByKey)) {
  //     applied.push(`${key}:${value}`);
  //   }
  // using map method to loop through
  const applied = [...veggies2]
    .sort(sortByKey)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(', '); //and because everything is an arry you can chain sort and join methods
  return `Your filters are: ${applied}\n`;
}

console.log(getSortedAppliedFilters(veggies2));

/* Looping over maps roadmap
here’s a summary of the steps:

1 - Convert your map to an array.

2 - Sort the array. (if needed)

3 - Convert each pair to a string of the form key:value.

4 - Join the array items creating a string.

5 - Combine the string with other information using a template literal.*/

/* Mutating maps! 

check to see if the map has a key using the has() method. If no key exists, 
set the key value. If the key already exists, you can ignore it.

Copying & avoiding mutation using the spread operator, colors Map
is map is safe from side effects while your new map contains all 
the defaults and all the applied information.

Avoiding side effects and mutations requires discipline more than syntax.

Maps, like objects, can only have a key once. So if you tried to create a map 
with a new key, it will use whatever value for that key is declared last. It’s as if you 
were updating the value instead of setting it.

*/
const defaults = new Map()
    .set('color', 'brown')
    .set('breed', 'beagle')
    .set('state', 'kansas');

const colors = new Map()
    .set('color', 'black');

function applyDefaults(map: Map<string, string>, defaults: Map<string, string>): Map<string, string> {
    return new Map([...defaults, ...map]);
}

console.log(applyDefaults(colors, defaults));