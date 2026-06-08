// Example 1
function processUser(callback) {
    callback();
}

processUser(() => {
    console.log("User Processed");
});

// Example 2
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(5, 3, (x, y) => x + y));