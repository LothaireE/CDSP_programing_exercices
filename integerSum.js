// Function that returns, for an argument N, the sum of integers from 1 to N.

const integerSum = (num) => {
    if (typeof num !== "number" || num < 1) {
        return "please enter a positive integer";
    }
    // result, variable initiated at 0.
    let result = 0;
    // the loop starting at "1", taking "num" for limit.
    for (let i = 1; i <= num; i++) {
        //the action for each loop is to add result to himself + 1.
        result += i;
    }
    return result;
};
// calling the function integerSum().
console.log(integerSum(12));
console.log(integerSum("hello"));
console.log(integerSum(-7));
