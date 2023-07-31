
/*

arrow functions behave differently in classes than normal functions
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
