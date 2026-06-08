const numbers = [1, 2, 3, 4, 5];

// Example 1
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Example 2
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product);