/*
Given two strings, write a function to determine if the second string is an anagram of the first
An anagram is a word, phrase or name formed by rearranging the letters of another, 
such as 'cleancode', formed from 'codeclean'
*/

export function isItAnAnagram(firstStr: string, secondStr: string): boolean {
  if (firstStr.length !== secondStr.length) {
    return false;
  }
  let findLetter: { [keys: string]: any } = {};

  for (let val of firstStr) {
    findLetter[val] ? (findLetter[val] += 1) : (findLetter[val] = 1);
  }

  // have the count in wordCount1 and 2,
  // loop and need to compare if firstStr has the same chars in secondStr
    // for (let val of secondStr) {
    //     if(!findLetter[val] )
    // }
  for (let i = 0; i < secondStr.length; i++) {
    let char = secondStr[i];
    if (!findLetter[char]) {
      return false;
    } else {
      findLetter[char] -= 1;
    }
  }

  return true;
}
