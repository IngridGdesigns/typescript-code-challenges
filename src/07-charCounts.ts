/* Write a function which takes in a string and returns counts of each character in the string
- Expected output : "aloha" ---> {a:2, l:0, h:1}
- Expected output : "bombero" ---> {b:2, o:2, m:1, e:1, r:1}


steps:
- loop through each character in string and count
- if char is not in object add it and set value to 1,
- if char is in object, add one to the object
*/

// export function charCounts(str: string): object {
//   const letterCount: { [key: string]: any } = {};
//   for (let i = 0; i < str.length; i++) {
// if (letterCount.hasOwnProperty(str[i])) { // if(letterCount[str[i] > 0])
//   // Wanted to use hasOwn()
//   letterCount[str[i]] += 1;
// } else {
//   letterCount[str[i]] = 1;
// }
//   }
//   return letterCount; // return object with keys that are lowercase characters
// }

// run npm test, test completed for this one
export function charCounts(str: string): object {
  const letterCount: { [key: string]: any } = {};

  for (let i = 0; i < str.length; i++) {
    // regex, find out if its a letter or number, skip spaces, punctuation..
    const regex = /[a-z0-9]/;
    // refactored with ternary
    const inputStr = str[i].toLowerCase();
    if (regex.test(inputStr)) {
      letterCount.hasOwnProperty(inputStr)
        ? (letterCount[inputStr] += 1)
        : (letterCount[inputStr] = 1);
    }
  }
  return letterCount; // return object with keys that are lowercase characters
}

function charCountsUsingForOfLoop(str: string): object {
  const letterCount: { [key: string]: any } = {};

  for (let character of str) {
    const regex = /[a-z0-9]/; // performance can vary with regex
    const inputStr = character.toLowerCase();
    if (regex.test(inputStr)) {
      letterCount[inputStr] = ++letterCount[inputStr] || 1;
    }
  }
  return letterCount;
}

console.log(charCountsUsingForOfLoop('Muito bom!'));
// Expected output: { m: 2, u: 1, i: 1, t: 1, o: 2, b: 1 }
