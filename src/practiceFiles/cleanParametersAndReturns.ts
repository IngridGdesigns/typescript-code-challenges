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

const { src: photo } = cookieMakingWorkshop
console.log(photo);
// console.log(src); src will be undefined
