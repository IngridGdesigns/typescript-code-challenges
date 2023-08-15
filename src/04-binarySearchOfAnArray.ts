/*
To-do
pseudocode of binary search:

1 - Let min = 1 and max = n.
2 - Guess the average of max and min, rounded down so that it is an integer.
3 - If array[guess] equals target, stop. You found it! Return guess
4 - If the guess was too low, array[guess] < target, 
    set min to be one larger than the guess, (set min = guess + 1).
5 - If the guess was too high, set max to be one smaller than the guess.
    (set max = guess - 1)
6 - Go back to step two.
*/

function binarySearch(targetValue: number, array: string[]): number {
    return 1;
}