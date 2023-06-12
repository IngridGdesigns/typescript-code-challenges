/*
Code Challenge #1
- Reverse Words

Write a function that will take a given string 187 and reverse the order of 
the words. “Hello world” becomes “world Hello” and “May the Fourth be with you” 
becomes “you with be Fourth the May”
*/

export function reverseWordsWithForLoop(sentence: string) {
  const newArr = [];
  const splitSentence = sentence.split(' ');

  for (let i = splitSentence.length - 1; i >= 0; i--) {
    const str = splitSentence[i];
    newArr.push(str);
  }

  return newArr.join(' ');
}


