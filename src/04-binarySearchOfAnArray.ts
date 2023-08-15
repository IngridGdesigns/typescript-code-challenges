/*
To-do
pseudocode of binary search:

1 - Let min = 1 and max = n.
2 - If max<min, then stop; target is not present in array. Return -1.
3 - Guess the average of max and min, rounded down using Math.floor -  so that it is an integer.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
4 - If arr[guess] equals target, stop. You found it! Return guess
5 - If the guess was too low, array[guess] < target, 
    set min to be one larger than the guess, (set min = guess + 1).
6 - If the guess was too high, set max to be one smaller than the guess.
    (set max = guess - 1)
7 - Go back to step two.
*/

function binarySearch(arr: number[], targetValue: number): string {
  let min = 0;
  let max = arr.length - 1;

  let guess; // or mid
  while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (arr[guess] === targetValue) {
      return `Number is ${targetValue} with index of ${guess}`;
    } else if (arr[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return 'Number not found, -1';
}

const arrs = [4, 7, 10, 14, 18, 22, 34, 36, 44, 45, 50];
console.log(binarySearch(arrs, 34));
