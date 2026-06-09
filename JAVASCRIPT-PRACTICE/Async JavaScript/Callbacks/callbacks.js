// 1. Basic Callback
function greetUser(callback) {
    console.log("Initializing greeting...");
    callback();
}
function sayHello() {
    console.log("Hello! Welcome back. 👋");
}
greetUser(sayHello);

// 2. Callback with Parameters
function calculateTotal(price, taxRate, callback) {
    const total = price + (price * taxRate);
    callback(total);
}
calculateTotal(100, 0.15, (amount) => {
    console.log(`Total bill: $${amount.toFixed(2)}`);
});

// 3. Callback with Delay
function downloadFile(fileName, callback) {
    console.log(`Downloading ${fileName}...`);
    setTimeout(() => {
        callback(fileName);
    }, 3000);
}
downloadFile("cheat_sheet.pdf", (file) => console.log(`🔔 File "${file}" ready!`));