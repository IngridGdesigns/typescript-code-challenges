/*
Building readable Classes..
(arrow functions behave differently in classes than normal functions)
In Typescript you have to declare the two properties type before using in 
the constructor, and then field needs to be initialized in the constructor itself. 

Note that inside a method body, it is still mandatory to access fields and other methods
via "this". 
*/
class GardenStore {
  amount: number;
  expiration: string;
  constructor(amount: number, expiration?: string) {
    this.amount = amount;
    this.expiration = expiration || 'one week';
  }

  getAmountText() {
    return `${this.amount}`;
  }

  getExpirationMessage() {
    return `This produce expires in ${this.expiration}`;
  }
}

const gardenStore = new GardenStore(4);

console.log(gardenStore.getAmountText());
console.log(gardenStore.getExpirationMessage());

/* Use Inheritance with caution...
 */
class Discount extends GardenStore {
  amount!: number;
  expiration: string;
  constructor(amount: number, expiration?: string) {
    super(amount);
    this.expiration = expiration || '3 days';
  }
  getExpirationMessage(): string {
    return `This is a offer, it expires in ${this.expiration}`;
  }

  isRewardsEligible() {
    return this.amount > 20;
  }
}

const discount = new Discount(8);
console.log(discount.amount);
console.log(discount.getExpirationMessage());

/*
JavaScript is a prototype language. When you create a new instance, you aren’t copying 
methods. You’re creating a link to a prototype. When you call a method on an instance of 
an object, you’re calling it from the prototype, which is itself an object instance 
(not a blueprint).
https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
*/