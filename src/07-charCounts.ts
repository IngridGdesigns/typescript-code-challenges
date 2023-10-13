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
    // if (letterCount.hasOwnProperty(str[i])) {
    //   // Wanted to use hasOwn()
    //   letterCount[str[i]] += 1;
    // } else {
    //   letterCount[str[i]] = 1;
    // }
//   }
//   return letterCount; // return object with keys that are lowercase characters
// }

export function charCounts(str: string): object {
  const letterCount: { [key: string]: any } = {};
  for (let i = 0; i < str.length; i++) {
    // refactored with ternary
    const inputStr = str[i];
    letterCount.hasOwnProperty(inputStr)
      ? (letterCount[inputStr] += 1)
      : (letterCount[inputStr] = 1);
  }
  return letterCount; // return object with keys that are lowercase characters
}

// run npm test, test completed forthis one