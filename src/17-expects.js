// var expect = function (val) {
//     return {
//         toBe: (valToCompare) => {
//             if (val !== valToCompare) throw new Error("Not Equal");
//             else return true;
//         },
//         notToBe: (valToCompare) => {
//             if (val === valToCompare) throw new Error("Equal");
//             else return true;
//         }
//     }
// };

const expect = function (val) {
   const throwError = (errorStr) => {throw new Error(errorStr)};
    return {
        toBe: (valToCompare) => {
          const toBes = val !== valToCompare ? throwError("Not Equal") : true;
          return toBes
        },
        notToBe: (valToCompare) => {
            const notToBes = val === valToCompare ? throwError("Equal") : true;
            return notToBes
        }
    }
};


() => expect(5).toBe(5);
() => expect(5).toBe(null);
() => expect(5).notToBe(null);

console.log(a);
    

var createCounter = function (init) {
    let initalCount = init
    return {
        increment:()=> ++initalCount,
        decrement:()=> --initalCount,
        reset:()=> initalCount = init,
    }
};

