import { remove } from '../10-removingValuesFromArray';

describe('remove function', () => {
  it('makes sure all values are removed from array', () => {
    const arr1 = [1, 2, 3, 4, 2, 5];
    const expectedOutput1 = [1, 3, 4, 5];

    const arr2 = [1];
    const expectedOutput2: any = [];

    const removed1 = remove(arr1, 2);
    const removed2 = remove(arr2, 1);

    expect(expectedOutput1).toEqual(removed1);
    expect(expectedOutput2).toEqual(removed2);
  });
});
