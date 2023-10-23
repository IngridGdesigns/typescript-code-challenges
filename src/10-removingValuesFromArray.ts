
/* returning a new array after removing all instances of a value from an array*/
//brute force solution

export function remove(arr: number[], item: number): Array<number> {
  const newArr = [...arr]; // maybe could use filter() in next iteration
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === item) {
      newArr.splice(i, 1);
      i--;
    }
  }
  return newArr;
};