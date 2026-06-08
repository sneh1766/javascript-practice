// Example 1: Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

// Example 2: Rest Operator
function total(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(total(10, 20, 30));