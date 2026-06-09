// 1. Promise Resolve
const verifyPayment = new Promise((resolve) => {
    resolve("Payment verified successfully! ✅");
});
verifyPayment.then(msg => console.log(msg));

// 2. Promise Reject
const checkInventory = new Promise((_, reject) => {
    reject("Error: Out of stock item requested. ❌");
});
checkInventory.catch(err => console.log(err));

// 3. Chaining Multiple .then()
function processOrder() {
    return new Promise((resolve) => resolve({ orderId: 4521, amount: 50 }));
}
processOrder()
    .then(order => {
        console.log(`Step 1: Order #${order.orderId} received.`);
        return order.amount;
    })
    .then(price => {
        console.log(`Step 2: Processing payment of $${price}...`);
        return price + 5;
    })
    .then(total => console.log(`Step 3: Total billed: $${total}`))
    .catch(err => console.log("Error:", err));