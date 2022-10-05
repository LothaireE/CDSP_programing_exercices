// Functions that returns the middle name(s) of someone(ex : “Joe Jean John Smith” must return “Jean John”).

// first function middleName using JS methods
const middleName1 = (name) => {
    if (typeof name !== "string") return "A string is expected";
    let arr = name.split(" ");
    // remove first and last elements
    let result = arr.splice(1, arr.length - 2).join(" ");
    return result;
};

// second function middleName with loop
const middleName2 = (name) => {
    if (typeof name !== "string") return "A string is expected";
    let arr = name.split(" ");
    let result = [];
    for (let i = 1; i < arr.length - 1; i++) {
        result.push(arr[i]);
    }
    return result.join(" ");
};

// calling the functions
console.log(middleName1("Joe John michel Bob Jim Jerome Smith"));
console.log(middleName2("Joe John Bob Jim Jerome Smith"));
console.log(middleName1(14));
console.log(middleName2(18));
