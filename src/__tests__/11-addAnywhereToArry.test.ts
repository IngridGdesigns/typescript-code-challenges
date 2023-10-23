import { addAnywhere } from '../11-addAnywhereToArry';

describe('addAnywhere function', () => {
  it('adds an item in any part of the array', () => {
    const expected1 = ['lemon', 'sugar', 'water'];
    const item1 = 'sugar';

    const expected2 = [1, 2, 3, 4, 5];
    const item2 = 5;

    const added = addAnywhere(['lemon', 'water'], item1, 1);
    const added2 = addAnywhere([1, 2, 3, 4], item2, 5);

    expect(expected1).toEqual(added);
    expect(expected2).toEqual(added2);
  });
});
