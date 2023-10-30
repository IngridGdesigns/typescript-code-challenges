/* 
Challenge:
return a new array with each item squared

*/
function square(arr: number[]): number[] {

  const a = arr.map((num) => {
    const squared = num * num;
    return squared;
  });
  return a;
};

// function multiplys (a: any, b: any): any {
//     const result = BigInt(a) * BigInt(b);
//     return result;
// };

// console.log(multiplys(3, 0.0001)); //0.0003

function greetNow(this: any): void {
  console.log(`${this.greet} ${this.friend!}`);
}

const obj1 = {
  greet: 'hi',
  name: 'friend',
};

const r = Object.values(obj1);
console.log(r);
// function alterContext(fn: Function, obj: object): any {
//   return fn.call(obj);
// };

// console.log(alterContext(greetNow, obj1));
const time = 'hi';
const pie = ' cherry pie';
time.concat(pie);
console.log(time.concat(pie));