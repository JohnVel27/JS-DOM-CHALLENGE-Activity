
//Challenge 1- JavaScript START
function changeToFontBold() {
    document.querySelector('#content-list').style.fontWeight = 'bold';
}

function changeFontFamily() {
    document.querySelector('#content-list').style.fontFamily = 'Verdana, sans-serif';
}

function addNewElement() {
    const myInput = document.getElementById("newBucketlist").value.trim();
    
    if (myInput !== "") {
        const ul = document.querySelector('#content-list ul'); // Ensure selecting the correct ul
        const li = document.createElement('li');
        li.textContent = myInput;
        ul.appendChild(li);
        
        // Clear the input field after adding the item
        document.getElementById("newBucketlist").value = "";
    } else {
        alert("Please enter a valid item to add to the list.");
    }
}
//Challenge 1 - JAVASCRIPT END


//Challenge 2 - JAVASCRIPT START
function PutThedesign() {
    const container = document.querySelector('.containerdesign');
    container.style.fontWeight = 'bold'; // Make text bold
    container.style.fontFamily = 'Georgia, serif'; // Change font family
    container.style.backgroundColor = '#f0f8ff'; // Add a light background color
    container.style.padding = '20px'; // Add padding
    container.style.borderRadius = '10px'; // Add rounded corners
    container.style.borderStyle = 'solid'; // Correct camelCase for border style
}

function Removethedesign() {
    const container = document.querySelector('.containerdesign');
    container.style.fontWeight = ''; // Remove bold text
    container.style.fontFamily = ''; // Reset font family
    container.style.backgroundColor = ''; // Remove background color
    container.style.padding = ''; // Remove padding
    container.style.borderRadius = ''; // Remove rounded corners
    container.style.borderStyle = ''; // Reset border style
}

//Challenge 2 - JAVASCRIPT END


//Challenge 3 - JAVASCRIPT START

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    // Password validation
    if (password.length > 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
        alert(`Welcome ${username}`);
    } else {
        alert('Password must be more than 8 characters and contain both uppercase and lowercase letters.');
    }
});
//Challenge 3- JAVASCRIPT END