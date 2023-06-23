// Practicing Sets
// The main difference is that instead of taking an array of pairs, you can
// create a new instance of Set by passing a flat array as an argument.

const favCookies = ['butter', 'lemon', 'butter'];
const unique = new Set(favCookies);
console.log(unique);

// using spread operator on Set
const allFavCookies = ['lemon', 'butter', 'lemon', 'chocolate', 'shortbread'];

function getUniqueCookies(attributes: string[]): string[] {
  const favCookies = [...new Set(attributes)];
  return favCookies;
}

console.log(getUniqueCookies(allFavCookies));

// A set can keep only one of each value. If you try to add a value that isn’t yet in the set,
// it will be added. If you try to add a value that already exists, it will be ignored.
// Order is preserved, and the initial point a value is added will remain.If you try to add an
// item that’s there already, it keeps the original position.

let travelBag = new Set();
travelBag.add('towel');
travelBag.add('socks');
travelBag.add('face wipes');
travelBag.add('towel');
console.log(travelBag);


const booksToRead = [
  {
    name: 'Anne Franks Diary: The Graphic Adaptation',
    publisher: 'Pantheon',
    author: 'Ari Folman',
    type: 'paperback',
  },
  {
    name: 'Fahrenheit 451',
    publisher: 'Ray Bradbury',
    author: 'Simon & Schuster',
    type: 'hardcover',
  },
  {
    name: 'The Bluest Eye',
    publisher: 'Knopf Doubleday Publishing Group',
    author: 'Toni Morrison',
    type: 'paperback',
  },
  {
    name: 'The House on Mango Street',
    publisher: 'Knopf Doubleday Publishing Group',
    author: 'Sandra Cisneros',
    type: 'paperback',
  },
  {
    name: 'I am not your Perfect Mexican Daughter',
    publisher: 'Ember',
    author: 'Erika L. Sánchez',
    type: 'hardcover',
  },
  {
    name: 'The Martian Chronicles',
    publisher: 'William Morrow Paperbacks',
    author: 'Ray Bradbury',
    type: 'paperback',
  },
];

// function gettypes(books: any): string[] {
//   return books.map((book: { type: any; }) => book.type);
// }

function getAllAuthors(books: any) {
  const unique = new Set();
  for (const book of books) {
    unique.add(book.author);
  }
  return [...unique];
}

console.log(getAllAuthors(booksToRead));

function getUniqueBooks(books: any[]): string[] {
  let unique: string[] = [];
  for (const book of books) {
    if (!unique.includes(book)) {
      unique.push(book);
    }
  }

  return unique;
}

console.log(booksToRead.forEach((book) => book.author));


let ans = new Set([1, 1, 2, 2, 3, 5, 8]);
const mulitply = [...ans].map((x) => x * 2);
console.log(mulitply);

// output: [2, 4, 6, 10, 16]
