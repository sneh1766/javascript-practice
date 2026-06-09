const simulateFetch = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userId === 99 ? resolve({ id: 99, name: "Alex" }) : reject(new Error("User not found"));
        }, 1500);
    });
};

// Fetching & Handling errors using try/catch
async function getUserProfile(id) {
    try {
        console.log("Fetching profile...");
        const user = await simulateFetch(id);
        console.log("Data retrieved:", user);
    } catch (error) {
        console.error("Caught Exception:", error.message);
    }
}
getUserProfile(99);
getUserProfile(5);