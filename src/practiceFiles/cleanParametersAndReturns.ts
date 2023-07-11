// setting default parameters
// if the value isn’t passed, it takes the placeholder value, in this case ounces = 0.
function convertWeight(weight: number, ounces: number = 0): number {
  const oz = ounces ? ounces / 16 : 0;
  const total = weight + oz;
  return weight / 2.2;
}
console.log(convertWeight(34));

// passing undefined as parameter, use with caution!!
function emailGreeting(
  name: string = 'Friend',
  location: string = 'Earth'
): string {
  return `Hello ${name} from ${location}, welcome!`;
}
console.log(emailGreeting(undefined, 'mars'));

// Default parameters aren’t helpful if you want to skip a parameter. you could use undefine

// Destructuring allows you to create a variable with the same name as an object’s key assigned
// with the value from the object.
const flowerGarden = {
  photographer: 'Isa',
};
const { photographer } = flowerGarden;
console.log(photographer);

/*
- First, you still have to declare a variable type. Preferably a const.
- Second, the assignment variable must match the key in the object.
- It’s set against the object. You are merely assigning a variable. 
  The curly braces merely signal the value that variable should use is inside an object.
*/

// rest operator
// You can collect any additional values into a new variable using three dots (...)
// followed by the variable name

const gardens = {
  gardener: 'Lily',
  equipment: 'Rake',
  shift: 'Mornings',
};

const { gardener, ...additional } = gardens;
console.log(additional);

// Assign a key to a different variable name
// This is useful in situations where the key name is taken by a previously defined
// variable or you just don’t like the key name and you want something more expressive.

const cookieMakingWorkshop = {
  baker: 'Nitza',
  equipment: 'cookie sheets',
  cookieType: 'chocolate chip',
  src: '/cookie-Nitza-Baking.jpg',
};

const { src: photo } = cookieMakingWorkshop;
console.log(photo);
// console.log(src); src will be undefined

//Destructuring with arrays
// You can also use destructuring assignment with arrays, with one big exception: Because there are no
// keys in arrays, you can use any variable name you want, but you must assign the information in order.
const gps = {
  location: [45.7122222, -106.1203526],
};
const {
  location: [latitude, longitude],
} = gps;

console.log(latitude);
console.log(longitude);

// passing variable number of arguments with rest operator
function validateCharacterCount(max: number, ...items: string[]): boolean {
  return items.every((item) => item.length < max);
}
const food = ['melon', 'eggs', 'toast'];
console.log(validateCharacterCount(7, ...food));

const crayolabox = ['red', 'brown', 'green', 'purple'];
console.log(validateCharacterCount(10, ...crayolabox));
console.log(validateCharacterCount(10, 'cup', 'tableware'));
console.log(validateCharacterCount(8, 'washables', 'sponges'));

// recreating shift() method with rest operator
const classRules = ['share', 'collaborate', 'listen'];
const [first, ...remaining] = classRules;
console.log(first);
console.log(remaining);

// rest operator can help you see parameters that you might not have otherwise known about. 
// The rest operator is a great way to debug.

// downside to using the rest operator as an argument is that it must be the last argument in all 
// situations. It must be the last parameter for a function.It must be the last value when destructuring.
const multiplyAndAdd = (val1: number, val2: number, val3: number, ...restOfNumbers: number[]) => {
  const multipliedNumbers = restOfNumbers.map((val) => val * 2);// 8, 10
  const res2 = multipliedNumbers.reduce((number, acc) => (number += acc)); // 8 + 10
  const addedNums = val1 + val2 + val3 + res2; // 1+2+3+8+10 = 24
  return addedNums;
};

console.log(multiplyAndAdd(1, 2, 3, 4, 5));
