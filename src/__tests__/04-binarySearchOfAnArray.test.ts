import { binarySearch } from '../04-binarySearchOfAnArray';

describe('binary search of an array function', () => {
  it('should search for target value and return value and index', () => {
    const binarySearchOfAnArray1 = binarySearch([22, 44, 66, 88], 88);
    const expected1 = 3;

    const binarySearchOfAnArray2 = binarySearch(
      [2, 3, 5, 7, 11, 16, 19, 20, 22, 28, 31, 35, 38, 42, 43, 44],
      42
    );
    const expected2 = 13;
    expect(expected1).toEqual(binarySearchOfAnArray1);
    expect(expected2).toEqual(binarySearchOfAnArray2);
  });

  it('should return -1, if target is not present in array', () => {
    const binarySearchOfAnArray = binarySearch(
      [1, 3, 6, 7, 9, 12, 15, 18, 22],
      33
    );
    
    const targetNotFound = -1
    expect(targetNotFound).toEqual(binarySearchOfAnArray);
  });
});
