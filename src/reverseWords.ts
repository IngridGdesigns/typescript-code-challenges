/*
Code Challenge #1
- Reverse Words

Write a function that will take a given string 187 and reverse the order of 
the words. “Hello world” becomes “world Hello” and “May the Fourth be with you” 
becomes “you with be Fourth the May”

Solution 1: Decided to convert to an array by splitting words, use a for loop to
iterate through the array starting at the end of the sentence and pushing to a 
new array which reversing the order of the words. 

Solution 1: Used higher order functions to complete the task. Converted to an array, 
reversed the order and then joined back again to a string;

Wrote a jest test for the functions.
*/

// Solution #1
export function reverseWordsWithForLoop(sentence: string) {
  const newArr = [];
  const splitSentence = sentence.split(' ');

  for (let i = splitSentence.length - 1; i >= 0; i--) {
    const str = splitSentence[i];
    newArr.push(str);
  }

  return newArr.join(' ');
}

// const phrase = 'There is an epic book of awesome somewhere';
// console.log(reverseWordsWithForLoop(phrase));

// Solution #2
export function reverseWords(sentence: string) {
  const splitSentence = sentence.split(' ').reverse().join(' ');

  return splitSentence;
}

// const phrase2 = 'Café con leche is tasty';
// console.log(reverseWords(phrase2));
