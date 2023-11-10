import { isPalindrome, isPalindromePartTwo } from '../18-palindrome';

describe('calls function isPalindrome', () => {
  it('it checks and returns a boolean and string', () => {
    const word = 'Mom';
    const expected = word.toLowerCase();

    const result = isPalindrome(expected);

    const isItAPalindrome = result ? true : false;

    expect(result).toEqual(
      `The word ${expected} returned ${isItAPalindrome} is a palindrome`
    );
  });
});

describe('calls function isPalindromePartTwo', () => {
  it('it checks and returns a boolean and string', () => {
    const word = 'Mom';
    const expected = word.toLowerCase();

    const result = isPalindromePartTwo(expected);

    const isItAPalindrome = result ? true : false;

    expect(result).toEqual(
      `The word ${expected} returned ${isItAPalindrome} is a palindrome`
    );
  });
});
