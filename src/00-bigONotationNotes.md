# Big O Notation

### How do we know which implemenation is best/ how do we determine which on is better? 

A system that classifies and compares solutions, putting things into context
Big O is a numeric representation

Which does better mean?
 - Faster?>
 - Readable?
 - Less memory-intensive?
 Speed and Less memory are important and readability is something to consider too

Why does it matter?
- It's imporant to have precise vocaulary to talk about how our solution performs
- Useful to discuss trade-offs between different approaches
- Helpful in identifying parts of the code that are inefficient, helps us find pain points in our applications
- It comes up in interviews a lot!!! 

Timing functions can be used to time performance...but different machines will record different times and same machine will record different times!

Counting number of simple operations the computer has to perform, The number of operations grows roughly proportianlly with n!

Example:
function that sums all of numbers from 1 up to n

```javascript


function addAll(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total +=i;
        // 1. n additions, 2. total on assignment, 3. i <= n; 4. i = 1, 5. n assignments
        // O(n) - number of operations is bounded by multiple of n 
    }
    return total;
}
// Which one is better?

function addUpTo(n) {
    return n * (n + 1) / 2; 
    // <--- 1 - multiplication, 2. addition, 3. division, always 3 operations
    // Big O notation is O(1) - as input grows it has no change in runtime
}


```