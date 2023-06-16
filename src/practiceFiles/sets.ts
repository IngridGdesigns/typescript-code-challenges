// Practicing Sets

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

function getAllAuthors(books: any): any {
  const unique = new Set();
  for (const book of books) {
    unique.add(book.author);
  }
  return [...unique];
}

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

const types = getAllAuthors(booksToRead);
console.log(getAllAuthors(booksToRead));

let ans = new Set([1, 1, 2, 2, 3, 5, 8]);
const mulitply = [...ans].map((x) => x * 2);
console.log(mulitply);

// output: [2, 4, 6, 10, 16]
