/* Functions, currying, higher-order functions
Testable functions are more clean and easy to maintain, but learning to 
write them takes a little effort.

Code that’s hard to test is often unnecessarily complex. Focus on writing 
code that is testable. Your code will improve, your tests will be easier 
to write, and the user experience will be identical.
*/

//  Passing in dependencies as arguments is called dependency injection.
// Fixes tightly coupled code

function getWageInformation(location: string): number {
  if (!location) {
    return 0;
  }
  return 0.1;
}

export function formatPrice(
  user: string,
  { price, location }: { price: number; location: string },
  getTaxInformation: { (): number | any }
): string {
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

// Arrow functions and destructuring
// For special parameters, wrap the parameter in parentheses when using arrow functions
const baker = {
  job: 'Baker',
  location: 'Santa Cruz',
  state: 'California',
};

const jobTitleAndLocation = ({
  job,
  location,
}: {
  job: string;
  location: string;
}) => `${job} - ${location}`;
console.log(jobTitleAndLocation(baker));

// If returning an object you must wrap it in parentheses when using arrow functions
// and omitting return
const getFullLocation = ({
  job,
  location,
  state,
}: {
  job: string;
  location: string;
  state: string;
}) => ({
  jobTitle: `${job}`,
  completeLocation: `${location}, ${state}`,
});
console.log(getFullLocation(baker));

//Reusing the Rest operator
// you may want to combine the two arrays into pairs, it is so common that
// it has a name: 'zip'
function getBirds(...countries: string[]): string[] {
  return ['Condor', 'Quetzal', 'Keel-billed Toucan'];
}

const birds = getBirds('ecuador', 'guatemala', 'costa rica');
console.log(birds);

// To write a zip function that can take multiple parameters, you need to write
// a higher - order function that takes the original array(call it left), returns
// a function that takes the results array(right), and combines them.
const zip =
  (
    ...left: string[] // since parameters are independent you can use rest parameters
  ) =>
  (...right: string[]) => {
    return left.map((item, i) => [item, right[i]]);
  };

console.log(zip('ecuador', 'guatemala', 'costa rica')(...birds));

// prevent contex confusion with arrow function
// Context is what the keyword this refers to in a function or class.

/*
Scope pertains to functions and context pertains to objects. not 100 percent true—you
can use this in any function—it’s a good general rule. - http://ryanmorr.com/understanding-scope-and-context-in-javascript/
*/