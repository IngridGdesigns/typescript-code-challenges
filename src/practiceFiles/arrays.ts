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
const book: [string, string, number] = ['Popcorn fun', 'Popcorn Enthusiast', 9.99];

function formatBook(title: string, author:string, price: number): string {
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