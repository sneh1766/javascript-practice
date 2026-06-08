const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Sneh" }
];

// Example 1
const user = users.find(user => user.id === 2);
console.log(user);

// Example 2
const rahul = users.find(user => user.name === "Rahul");
console.log(rahul);