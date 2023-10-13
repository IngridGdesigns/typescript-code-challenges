import { charCounts } from '../07-charCounts'

describe('charCounts function', () => {
  it('should count characters in a string and return an object with count for reach letter', () => {
    const expectedOutput1 = { a: 2, l: 1, o:1, h: 1 };
    const result1 = charCounts('aloha');

    const expectedOutput2 = { b: 2, o: 2, m: 1, e: 1, r: 1 };
    const result2 = charCounts('bombero');

    expect(expectedOutput1).toEqual(result1);
    expect(expectedOutput2).toEqual(result2);
  });
});
