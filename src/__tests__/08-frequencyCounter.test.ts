import { isFirstArrySameAsSecondArry } from '../08-frequencyCounter';

describe('frequency counter function', () => {
  it('test', () => {
    const frequencyCounter1 = isFirstArrySameAsSecondArry(
      [1, 2, 3, 2, 5],
      [9, 1, 4, 4, 25]
    );
    const frequencyCounter2 = isFirstArrySameAsSecondArry([1, 2, 3], [1, 9]);
    const frequencyCounter3 = isFirstArrySameAsSecondArry([1, 2, 1], [4, 4, 1]); // (must be same frequency)

    expect(frequencyCounter1).toBe(true);
    expect(frequencyCounter2).toBe(false);
    expect(frequencyCounter3).toBe(false);
  });
});
