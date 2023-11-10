

export default function greaterThan10(num: number, i: number): boolean {
    return num > 10;
}

// pass in arr with type and function with type...
// source: 
// https://blog.logrocket.com/how-to-pass-typescript-function-parameter/
const filter = function (arr: number[], greaterThan10: (num: number) => boolean ) {
  return arr.filter(greaterThan10);
  // Runtime: 55 ms
};

const filter2 = function (arr: number[], greaterThan10: (n: number, i: number) => boolean): number[] {
  const more10: number[] = [];
  arr.forEach((item, i) => {
    const filter = greaterThan10(item, i);
    if (filter) {
      more10.push(item);
    }
  })
  return more10;
}

export { filter, filter2};