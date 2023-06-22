// Working with arrays exercise

const friends: { name: string; position: string }[] = [
  {
    name: 'Wesley',
    position: 'musician',
  },
  {
    name: 'Davis',
    position: 'engineer',
  },
];

// Some tslint rules are disabling use of [], example message:
// Array type using 'T[]' is forbidden for non - simple types.Use 'Array<T>'
// instead write: function getFriends(friends: Array<{ name: string; position: string }>): any {
function getFriends(friends: { name: string; position: string }[]): any {
  return friends.filter((friend) => friend.position === 'musician');
}

console.log(getFriends(friends));

type User = {
  id: number;
  name: string;
};

type UserGroup = {
  [key: string]: User;
};

var obj: UserGroup = {
  '0': { id: 0, name: 'Tivoli' },
  '1': { id: 1, name: 'Stuart' },
  '2': { id: 2, name: 'Carlo' },
};
// or if you make it an array
var arr: User[] = [
  { id: 0, name: 'Available' },
  { id: 1, name: 'Ready' },
  { id: 2, name: 'Started' },
];

// check existence of items
const sections = ['helpline', 'contacts'];

function displayContacts(sections: string[]) {
  return sections.includes('contacts'); // returns boolean, better than indexOf('item') > -1;
}

console.log(displayContacts(sections));

//spread operator magic
function removeItem(items: string[], removable: string): string[] {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

const books = ['baking bread', 'a scanner darkly', 'cookies'];
const recent = removeItem(books, 'a scanner darkly');
console.log('Recent books: ' + recent);
const novels = removeItem(books, 'baking bread');
console.log('Novels: ' + novels);

// define args as tuple to avoid typeScript error
const book: [string, string, number] = [
  'Popcorn fun',
  'Popcorn Enthusiast',
  9.99,
];

function formatBook(title: string, author: string, price: number): string {
  return `${title} by ${author} ${price}`;
}

console.log(formatBook(...book));

function func1(arr1: number[], arr2: number[], n: number) {
  let arr3 = [...arr2];
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

console.log(func1([1, 2, 3], [4, 5, 6], 1));

// avoiding mutations  - instead of using .push()
const shoppingList = ['Strawberries', 'Apples'];
const moreItems = [...shoppingList, 'Oranges'];
console.log(moreItems);

const pets = [
  {
    name: 'Dot',
    years: 10,
  },
  {
    name: 'Penny',
    years: 5,
  },
  {
    name: 'Roxie',
    years: 3,
  },
];

function sortByYears(a: { years: number }, b: { years: number }): number {
  if (a.years === b.years) {
    return 0;
  }
  return a.years - b.years;
}

const sortByName = (a: { name: string }, b: { name: string }) => {
  if (a.name === b.name) {
    return 0;
  }
  return a.name > b.name ? 1 : -1;
};

// sorting without mutating
const values = [...pets];
//sorting by years
console.log(values.sort(sortByYears));
//next, sorting by name
console.log(values.sort(sortByName));
//lastly, sorting by years a second time
console.log([...pets].sort(sortByYears));

// objects without mutations
// Object.assign() to create and update fields on an object with
//  keys and values from another object(or objects).
// In other words, Object.assign() lets you update an object
// with properties from another object.

const animalDefaults = {
  name: '',
  class: 'bird',
  type: 'vertebrata',
  canFly: null,
  favFood: 'fish',
};

const bird = {
  name: 'penguin',
  canFly: false,
};

const anotherBird = {
  canFly: true,
  favFood: 'fruit',
};

function addAnimalDefaults(bird: object, animalDefaults: object): object {
  return Object.assign({}, animalDefaults, bird);
}

/* expected output
make the first object an empty object. The returned object will be the 
updated empty object. The other objects will have no mutations.
works with flat objects not nested
{
  name: 'penguin',
  class: 'bird',
  type: 'vertebrata',
  canFly: false,
  favFood: 'insects'
}
{
  name: '',
  class: 'bird',
  type: 'vertebrata',
  canFly: true,
  favFood: 'fruit'
}}*/
console.log(addAnimalDefaults(bird, animalDefaults));
console.log(addAnimalDefaults(anotherBird, animalDefaults));

const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 2,
};

//Whenever there is a nested object, copy that with Object.assign()
// and everything will be updated.
const employeeHere = Object.assign({}, defaultEmployee, {
  name: Object.assign({}, defaultEmployee.name),
});
employeeHere.name.first = 'Aliosha';
console.log('Employee:');
console.log(employeeHere);
console.log('\nDefault employee:');
console.log(defaultEmployee);

// Fixing deep copy issues with Object spread operator:
const employee = { ...defaultEmployee, name: { ...defaultEmployee.name } };

employee.name.first = 'Aliosha';
console.log('Employee:');
console.log(employee);
console.log('\nDefault employee:');
console.log(defaultEmployee);

// Instead of Object.assign(), Object spread operator is cleaner and easy on the eyes
// if you add a value with the same key, it will use whatever value is declared last.
const animal = {
  class: 'Mammal',
  name: 'Lion',
};
const update = { ...animal, name: 'Jaguar' };
console.log(`\n`, update);

function addAnimalDefaultsWithObjectSpreadOperator(
  bird: object,
  animalDefaults: object
): object {
  return { ...animalDefaults, ...bird };
}
console.log(addAnimalDefaultsWithObjectSpreadOperator(bird, animalDefaults));


let person1 = { name: 'Joey', age: '21' };
let person2 = { name: 'Rachel', age: '22' };

let persons = [person1, person2];

let setJob = function (persons: any[], index: number, job: string): any[] {
  persons[index].job = job;
  return persons;
};

setJob([...persons], 0, 'Artist');
console.log(persons);