/* Sorting!
swapping locations of two items in an array 

1 - loop 
swap firstindex to secondindex

*/

function swapping(
  arr: number[],
  firstIndex: number,
  secondIndex: number
): number[] {
  if (firstIndex < arr.length && secondIndex < arr.length) {
    const tempFirstIndex = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tempFirstIndex;
  }

  return arr;
}

const arr1 = [9, 4, 7, 1, 2, 6, 5];

let firstIndex = 2;
let secondIndex = 0;
console.log(swapping(arr1, firstIndex, secondIndex));
/* Sample Output
arr1 = [7,4,9,1,2,6,5] */
