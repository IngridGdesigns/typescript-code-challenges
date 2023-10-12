# Big O Notation

### How do we know which implemenation is best/ how do we determine which on is better?

A system that classifies and compares solutions, putting things into context
Big O is a numeric representation

Which does better mean?

- Faster?
- Readable?
- Less memory-intensive?
  Speed and Less memory are important and readability is something to consider too

#### Why does it matter?

- It's imporant to have precise vocaulary to talk about how our solution performs
- Useful to discuss trade-offs between different approaches
- Helpful in identifying parts of the code that are inefficient, helps us find pain points in our applications
- It comes up in interviews a lot!!!

Timing functions can be used to time performance...but different machines will record different times and same machine will record different times!

Counting number of simple operations the computer has to perform, The number of operations grows roughly proportianlly with n!

Example:
function that sums all of numbers from 1 up to n

```javascript
function addAll(n): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
    // 1. n additions, 2. total on assignment, 3. i <= n; 4. i = 1, 5. n assignments
    // O(n) - number of operations is bounded by multiple of n
  }
  return total;
}
// Which one is better?

function addUpTo(n): number {
  return (n * (n + 1)) / 2;
  // <--- 1 - multiplication, 2. addition, 3. division, always 3 operations
  // Big O notation is O(1) - as input grows it has no change in runtime
}
```

#### Nested loops are different

```javascript
function print(n): void {
  // nested loop
  for (let i = 0; i < n; i++) {
    // O(n) operation inside an O(n) operation
    for (let j = 0; j < n; j++) {
      console.log(i, j); // 0(n²)
    }
  }
}
```

```javascript
//Other example
function log4(n): void {
  for (let i = 1; i <= Math.max(4, n); i++) {
    console.log(i); // 0(n)
  }
}

function logAtMost5(n): void {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i); // As n grows, big O is constant (graph stays flat when it hits 5),
    // if n is 1000 it will only run 5 times =  0(1) fantastic runtime
  }
}
```

- Constants don't matter - example: if we have O(500) (there will always be 500 operations), we express that by writing O(1), O(13n²) will expressed as O(n²)
- Smaller terms don't matter - O(n + 50) = O(n)
- When analyzing comlexity with big that can get complicated
- Arithmetic operations are always constant
- variable assignment is constant
- Accessing elements in an array (by index) or object(by key) is constant
- In a loop the complexity is the length of the loop tiimes the complexity of whatever happens inside the loop

![Big O Notation](/src/assets/bigOgraph.png 'Big O notation')

[image source](https://www.cdn.geeksforgeeks.org/wp-content/uploads/mypic.png)

### Space Complexity in JS

- most primitives are constant space
- strings require O(n) space (where n is the string length)
- reference types are generally O(n) :

```javascript
// if array.length is 4 it takes up twice as more space than a shorter array
// we are concerned about space not time... 
function add(arr): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//We will always have total and i, no matter how big arr is, it will be 0(1) space

```

### Logarithms!!

Big O expressions have more complex mathematical expressions, such as log
What is log? It's the verse of exponentiation
examples: 
- log₂(8)= 3 ----> 2³= 8, which is (2x2x2 = 8)
more examples:
![logarithmic examples](/src/assets/logarithmicExamples.png 'Logarithmic examples')
[image source](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-intro/a/intro-to-logarithms)

- logₓ(a) = C -----> xᵃ=2
    - x is the base
    - c is the exponent
    - a is called the argument
    - it is helpful to remember that the base of the logarithm is the same as the base of the exponent.
Online the shorthand is log, usually the base is ignored

Logarithmic time complexity is great 0(log n), or 0(n), better than O(n²)..


