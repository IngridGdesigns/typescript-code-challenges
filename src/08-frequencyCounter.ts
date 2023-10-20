/*
write a function which accepts two arrays
the function should return true if every value in the array has its 
corresponding value squared in the second array.
the frequency of values must be the same
*/
// brute force solution
// export function same(arry1: number[], arry2: number[]): boolean {
//   if (arry1.length !== arry2.length) {
//     return false;
//   }

//   let frequencyCounter1: { [key: string]: any } = {};
//   let frequencyCounter2: { [key: string]: any } = {};

//   for (let val of arry1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of arry2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     const square = Number(key) * Number(key);
//     const squareToString = String(square);
//     if (!(squareToString in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[squareToString] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// refactored with helper function
export function isFirstArrySameAsSecondArry(
  arry1: number[],
  arry2: number[]
): boolean {
  if (arry1.length !== arry2.length) {
    return false;
  }

  const frequencyCounter1 = counter(arry1);
  const frequencyCounter2 = counter(arry2);

  for (let key in frequencyCounter1) {
    const square = Number(key) * Number(key);
    const squareToString = String(square);
    if (!(squareToString in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[squareToString] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

function counter(arr: number[]): any {
  let frequencyCounter: { [key: string]: any } = {};
  for (let val of arr) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }
  return frequencyCounter;
}
