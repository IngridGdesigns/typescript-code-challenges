import { reverseWordsWithForLoop, reverseWords } from '../01-reverseWords';

describe('reverseWords function', () => {
  it('should reverse words in a given string using a for loop', () => {
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

describe('reverseWords function', () => {
  it('should reverse words in a given string using high order functions', () => {
    const sentence1 = 'Hi everyone';
    const expected1 = 'everyone Hi';

    const sentence2 = 'In my experience there is no such thing as luck';
    const expected2 = 'luck as thing such no is there experience my In';

    const reversed1 = reverseWords(sentence1);
    const reversed2 = reverseWords(sentence2);

    expect(reversed1).toEqual(expected1);
    expect(reversed2).toEqual(expected2);
  });
});

