/*
Given an integer array nums, a reducer function fn, and an initial value init, return a 
reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]),
val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array 
has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.
*/


type Fn = (accum: number, curr: number) => number

function fn(accum: number, curr: number): number {
  return accum + curr;
}

function reduce (nums: number[], fn: Fn, init: number): number {
    let sum = init;
    for(let i = 0; i < nums.length; i++){
        sum = fn(sum, nums[i]);
    }
    return sum;
}

console.log(reduce([1, 2, 3, 4], fn, 0)) // expected output: 10
console.log(reduce([1, 2, 3, 4], fn, 100)) // expected 110
console.log(reduce([], fn, 25)) // answer is always init for empy arrays, 25


/*
Time complexity: O(n)
n is the length of the input array. This is because the function iterates through each element in the array once.

Space complexity: O(1)
This is because it only uses a constant amount of additional space to store the sum and the loop counter.
*/