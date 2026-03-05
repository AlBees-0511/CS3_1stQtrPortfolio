function showAlert() {
    if (document.getElementById('fname').value === '' || 
        document.getElementById('lname').value === '' || 
        document.getElementById('bday').value === '' || 
        document.getElementById('email').value === '' || 
        document.getElementById('MobNum').value === '' || 
        document.getElementById('Grade').value === 'Grade Level' || 
        document.getElementById('club').value === 'Example Club' || 
        document.getElementById('Why').value === '') {
        alert('Please fill in all the required fields.');
        return false;
    } else {
        alert('Form submitted successfully!');

        // Retrieve existing data from localStorage
        let existingData = JSON.parse(localStorage.getItem('info')) || [];

        // Create a new entry
        const newEntry = {
            "CL": document.getElementById('club').value,
            "ID": document.getElementById('fname').value,
            "FL": document.getElementById('lname').value,
            "GL": document.getElementById('Grade').value,
            "EM": document.getElementById('email').value,
            "MN": document.getElementById('MobNum').value,
        };

        // Append the new entry to the existing data
        existingData.push(newEntry);

        // Save the updated data back to localStorage
        localStorage.setItem('info', JSON.stringify(existingData));

        // Call addRow to update the table
        addRow();

        return true;
    }
}

function getout() {
    window.location.href = "viewSignUps.html";
}

function check()
{
    let info = thisInfo.ID
    console.log(info);
}

function addRow() {
    // Parse the data from localStorage
    const look = JSON.parse(localStorage.getItem('info'));
    if (!look || !Array.isArray(look)) {
        console.error("No valid data found in localStorage.");
        return;
    }

    const table = document.getElementById("myTable");
    if (!table) {
        console.error("Table with id 'myTable' not found in the DOM.");
        return;
    }

    const columns = ["ID", "FL", "EM", "MN", "GL", "CL"];

    // Loop through each element in the data array
    look.forEach(element => {
        const newRow = table.insertRow(-1); // Add a new row to the table

        // Loop through each column and add a cell
        columns.forEach(column => {
            const newCell = newRow.insertCell(-1);
            newCell.textContent = element[column] ?? ""; // Use the column key to get the value
        });
    });


}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addRow);