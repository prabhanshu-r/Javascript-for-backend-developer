// 1. Select the HTML elements we want to interact with
const button = document.getElementById('fetchButton');
const resultBox = document.getElementById('resultBox');

// 2. Add an event listener to the button
button.addEventListener('click', async () => {
    
    // Show a loading message
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = '<p>Loading data from server...</p>';

    try {
        // 3. Reach out to a mock backend API
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // 4. Convert the backend response into a usable JavaScript Object (JSON)
        const data = await response.json();

        // 5. Update the HTML with the data we received
        resultBox.innerHTML = `
            <h3>Name: ${data.name}</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company.name}</p>
        `;
    } catch (error) {
        // Handle any errors (like network failures)
        resultBox.innerHTML = '<p style="color:red;">Error connecting to server.</p>';
    }
});