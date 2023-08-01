/*
Building readable Classes..
(arrow functions behave differently in classes than normal functions)
In Typescript you have to declare the two properties type before using in 
the constructor, and then field needs to be initialized in the constructor itself. 

Note that inside a method body, it is still mandatory to access fields and other methods
via "this". 
*/
// class GardenStore {
//   amount: number;
//   expiration: string;
//   constructor(amount: number, expiration?: string) {
//     this.amount = amount;
//     this.expiration = expiration || 'one week';
//   }

//   getAmountText() {
//     return `${this.amount}`;
//   }

//   getExpirationMessage() {
//     return `This produce expires in ${this.expiration}`;
//   }
// }

// const gardenStore = new GardenStore(4);

// console.log(gardenStore.getAmountText());
// console.log(gardenStore.getExpirationMessage());

// /* Use Inheritance with caution...
//  */
// class Discount extends GardenStore {
//   amount!: number;
//   expiration: string;
//   constructor(amount: number, expiration?: string) {
//     super(amount);
//     this.expiration = expiration || '3 days';
//   }
//   getExpirationMessage(): string {
//     return `This is a offer, it expires in ${this.expiration}`;
//   }

//   isRewardsEligible() {
//     return this.amount > 20;
//   }
// }

// const discount = new Discount(8);
// console.log(discount.amount);
// console.log(discount.getExpirationMessage());

/*
JavaScript is a prototype language. When you create a new instance, you aren’t copying 
methods. You’re creating a link to a prototype. When you call a method on an instance of 
an object, you’re calling it from the prototype, which is itself an object instance 
(not a blueprint).
https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

Getter and Setters
A getter or setter is a way to mask complexity by making a function appear like a property.
By convention, methods or functions are usually verbs and properties are usually nouns.

best practice to have pairs of getter and setters...
*/

class GardenStore {
  amount: number;
  expiration: string;
  constructor(amount: number, expiration?: string) {
    this.amount = amount;
    this.expiration = expiration || 'one week';
  }

  get getAmountText() {
    return `${this.amount}`;
  }

  get getExpirationMessage() {
    return `This produce expires in ${this.expiration}`;
  }
}

const gardenStore = new GardenStore(4);

console.log(gardenStore.getAmountText);
console.log(gardenStore.getExpirationMessage);

/* Use Inheritance with caution...
 */
class Discount extends GardenStore {
  amount!: number;
  expiration: string;
  constructor(amount: number, expiration?: string) {
    super(amount);
    this.expiration = expiration || '3 days';
  }
  get getExpirationMessage(): string {
    return `This is a offer, it expires in ${this.expiration}`;
  }

  get isRewardsEligible() {
    return this.amount > 20;
  }
}

const discount = new Discount(8);
console.log(discount.amount);
console.log(discount.getExpirationMessage);
/* solve your problem of someone setting a bad value, you will need to create a setter.
they should have the same name.
you can’t have a property with the same name as your getter or setter, it will crash..
you can’t do is have a property with the same name as your getter or setter.
Getters and setters can sometimes be very hard to debug and hard to test. As always, 
use with caution and make sure your intentions are clear with plenty of tests and documentation.

Generators
generator is a function that doesn’t fully execute its body immediately when called.
a generator is a function that has break points where it essentially pauses until the 
next step.

To make a generator, you add an asterisk (*) after the function keyword. You then have 
access to a special method called next(), which returns a part of the function. Inside 
the function body, you return a piece of information with the keyword yield. When executing 
the function, use the next() method to get the information yielded by the function.
*/

function* getDessertTrilogy() {
  yield 'Wonderful world of Chocolate';
  yield 'Palace of sugary treats';
  yield 'Fun with Cookies & Cakes';
}
// const trilogy = getDessertTrilogy();
// console.log(trilogy.next());
// console.log(trilogy.next());
// console.log(trilogy.next());
// console.log(trilogy.next());

const trilogy = [...getDessertTrilogy()];
console.log(trilogy);
/* The generator will go through the parts one at a time as if it were going through the 
indexes of an array or the keys of a map.
For example, if you want the Cairo trilogy in the form of an array, you’d simply use the 
spread operator.
*/
