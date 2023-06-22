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