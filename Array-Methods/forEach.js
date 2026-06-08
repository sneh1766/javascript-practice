const fruits = ["Apple", "Banana", "Mango"];

// Example 1
fruits.forEach(fruit => {
    console.log(fruit);
});

// Example 2
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});