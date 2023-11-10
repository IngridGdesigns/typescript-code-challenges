/*

A string is a palindrome if it is read the same from forward or backward.For example,
dad reads the same either from forward or backward.So the word dad is a palindrome.
Similarly, madam is also a palindrome. 
*/

export function isPalindrome(word: string): string {
  const lowercased = word.toLowerCase();
  const reversed = word.split('').reverse().join('');

  const isItAPalindrome = lowercased === reversed ? true : false;
    
  return `The word ${word} returned ${isItAPalindrome} is a palindrome`;
}


export function isPalindromePartTwo(word: string): string {
    const lowercased = word.toLowerCase();
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reverseWord = reverseWord + word[i]
    }
    const isPalindrome = lowercased === reverseWord ? true : false;
    return `The word ${lowercased} returned ${isPalindrome} is a palindrome`;
}