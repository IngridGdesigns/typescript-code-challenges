/* Functions, currying, higher-order functions
Testable functions are more clean and easy to maintain, but learning to 
write them takes a little effort.

Code that’s hard to test is often unnecessarily complex. Focus on writing 
code that is testable. Your code will improve, your tests will be easier 
to write, and the user experience will be identical.
*/

//  Passing in dependencies as arguments is called dependency injection.
// Fixes tightly coupled code

function getWageInformation(location: string): any {
    if (!location) {
        return 0;
    };
    return 0.1;
}

export function formatPrice(user: string, { price, location }: { price: number; location: string; }, getTaxInformation: { (): number | any; }): string {
  const rate = getWageInformation(location);
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';
  return `${user} your total is: ${price} ${taxes}`;
}

const item = { price: 60, location: 'New York' };
const user = 'Pin pon';
console.log(formatPrice(user, item, () => null));
console.log(formatPrice(user, item, () => 0.1));

/* you pass a simple function that returns the value you want. It’s a lot like stubbing but without 
any external dependencies. Your function now takes inputs, including another function, and returns 
outputs. Remember, you aren’t testing getTaxInformation(). You’re testing that formatPrice(),

import { formatPrice } from '../practiceFiles/buildingFunctions';

describe('format price', () => {
    it('should return plus tax if no tax info', () => {
        const item = { price: 50, location: 'Oregon' };
        const user = 'Kye';
        const message = formatPrice(user, item, () => null);
        expect(message).toEqual('Kye your total is: 50 plus tax.');
    });

});

*/

