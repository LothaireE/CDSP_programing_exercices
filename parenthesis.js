//Function that returns if a string composed (among others) of opening and closing parenthesis is correct (a '(' must have a ')' corresponding to it and vice versa). For example:
// “(()))(())((“ return false
// “())(())” return false
// “(()((bidule)()123((truc)))())” return true

const parenthesis = (str) => {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            arr.push(str[i]);
        }

        if (str[i] === ")") {
            // check if a ")" has a corresponding "(".
            if (arr.length > 0) {
                // at least one "(" remains, remove the last "(" in "arr".
                arr.pop();
            } else {
                return false;
            }
        }
    }
    if (arr.length > 0) {
        // one or more "(" remains without a closing one.
        return false;
    } else {
        return true;
    }
};

console.log("case #1", parenthesis("(()))(())(("));
console.log("case #2", parenthesis("())(())"));
console.log("case #3", parenthesis("(()((bidule)()123((truc)))())"));
