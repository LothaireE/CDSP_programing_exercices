// Function that displays the values of the fibonacci sequence up to N

// Here is an exemple* of the fibonacci numbers :
// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10
// 0	1	1	2	3	5	8	13	21	34	55

const fibonacciNumber = (num) => {
    if (typeof num !== "number" || num < 1)
        return "please enter a positive integer";

    let result = [];

    //callback function fibo()
    const fibo = (n) => {
        if (n == 0 || n == 1) {
            //the first two position do not require any calculus as F and its value are equals.
            return n;
        } else {
            // additioning the value of the two previous "n" positions using the principle of a recursive function.
            return fibo(n - 1) + fibo(n - 2);
        }
    };

    for (let i = 0; i <= num; i++) {
        //for each turn the return value of the callback fibo() with "i" for argument is pushed into "result".
        result.push(fibo(i));
    }
    return result;
};
// the argument here represents the F in the exemple line 4.
console.log(fibonacciNumber(8));
console.log(fibonacciNumber(-2));
console.log(fibonacciNumber("rerer"));
