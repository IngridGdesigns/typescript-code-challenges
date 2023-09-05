/* 
Find minimum in Subarray
Finish writing the function indexOfMinimum, which takes an array and a number startIndex, 
and returns the index of the smallest value that occurs with index startIndex or greater. 
If this smallest value occurs more than once in this range, then return the index of the 
leftmost occurrence within this range.
*/

export function indexOfMinimum(array: number[], startIndex: number): number {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  let minValue = array[startIndex];
  let minIndex = startIndex;

  // Loop over items starting with startIndex,
  for (let nextValue = minIndex + 1; nextValue < array.length; nextValue++) {
    if (array[nextValue] < minValue) {
      minIndex = nextValue;
      minValue = array[nextValue];
    }
  }

  console.log(
    `The index of the minimum value of the subarray starting at index ${startIndex} is: ${minIndex}`
  );
  // updating minValue and minIndex as needed:

  return minIndex;
};

console.log(indexOfMinimum([18, 6, 66, 44, 9, 22, 14, 5], 2));