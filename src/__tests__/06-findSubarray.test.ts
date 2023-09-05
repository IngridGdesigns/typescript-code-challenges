// console.log(indexOfMinimum([18, 6, 66, 44, 9, 22, 14, 5], 2))

import { indexOfMinimum } from '../06-findSubarray';

// describe('binary search of an array function', () => {
//   it('should search for target value and return value and index', () => {
describe('indexOfMinimum function', () => {
  it('should search find minimum and return number', () => {
    const expectedOutput1 = 7;
    const result1 = indexOfMinimum([18, 6, 66, 44, 9, 22, 14, 5], 2);

    const expectedOutput2 = 5;
    const result2 = indexOfMinimum(
      [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 13, 59, 61, 67,
        71, 73, 79, 83, 89, 97,
      ],
      5
    );

    expect(expectedOutput1).toEqual(result1);
    expect(expectedOutput2).toEqual(result2);
  });
});
