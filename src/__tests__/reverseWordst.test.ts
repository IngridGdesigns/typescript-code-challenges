import { reverseWordsWithForLoop } from '../reverseWords';

describe('reverseWords function', () => {
  it('should reverse words in a given string', () => {
    const sentence1 = 'Hello world';
    const expected1 = 'world Hello';

    const sentence2 = 'May the Fourth be with you';
    const expected2 = 'you with be Fourth the May';

    const reversed1 = reverseWordsWithForLoop(sentence1);
    const reversed2 = reverseWordsWithForLoop(sentence2);

    expect(reversed1).toEqual(expected1);
    expect(reversed2).toEqual(expected2);
  });
});
