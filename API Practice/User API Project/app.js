// State variables to hold global application scope data
let allUsers = [];
const apiURL = "https://jsonplaceholder.typicode.com/users";

// DOM Element Selectors
const userGrid = document.getElementById("userGrid");
const loadingIndicator = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const searchInput = document.getElementById("searchInput");

// ==========================================
// 1. Fetching Data Data from API
// ==========================================
async function loadUsers() {
    try {
        // Show loading state, hide errors
        loadingIndicator.style.display = "block";
        errorMessage.style.display = "none";
        
        const response = await fetch(apiURL);

        // Explicit Check for API Success Status (e.g. 404/500 errors)
        if (!response.ok) {
            throw new Error(`Server returned a status code of ${response.status}`);
        }

        // Convert Response into readable JSON format
        allUsers = await response.json();
        
        // Display data and activate search feature
        displayUsers(allUsers);
        searchInput.disabled = false;

    } catch (error) {
        handleUiError(error);
    } finally {
        // Remove loading state indicator regardless of outcome
        loadingIndicator.style.display = "none";
    }
}

// ==========================================
// 2. Display Data Dynamically onto the DOM
// ==========================================
function displayUsers(usersArray) {
    // Clear out old markup before rendering
    userGrid.innerHTML = "";

    if (usersArray.length === 0) {
        userGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#7f8c8d;">No users match your criteria.</p>`;
        return;
    }

    usersArray.forEach(user => {
        const cardHTML = `
            <article class="card">
                <h3>${user.name}</h3>
                <p class="email">📧 ${user.email}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            </article>
        `;
        userGrid.insertAdjacentHTML("beforeend", cardHTML);
    });
}

// ==========================================
// 3. User-Friendly Error Handling
// ==========================================
function handleUiError(err) {
    console.error("Technical Log:", err);
    errorMessage.innerText = "⚠️ Unable to load user profiles. Please check your internet connection and try again.";
    errorMessage.style.display = "block";
}

// ==========================================
// Task 5: Live Filtering / Search Functionality
// ==========================================
searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredUsers = allUsers.filter(user => {
        return (
            user.name.toLowerCase().includes(searchTerm) || 
            user.email.toLowerCase().includes(searchTerm)
        );
    });
    
    displayUsers(filteredUsers);
});

// Fire off network initialization upon page script execution
loadUsers();