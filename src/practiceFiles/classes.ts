
/*
Building readable Classes..
(arrow functions behave differently in classes than normal functions)
In Typescript you have to declare the two properties type before using in 
the constructor, and then field needs to be initialized in the constructor itself. 

Note that inside a method body, it is still mandatory to access fields and other methods
via "this". 
*/
class Garden {
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

const garden = new Garden(4);

console.log(garden.getAmountText());
console.log(garden.getExpirationMessage());
