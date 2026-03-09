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
    add()

}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addRow);

function chooseClub() {
    const clu = document.getElementById("clubs").value; // Get the selected club
    const infor = JSON.parse(localStorage.getItem("info")) || []; // Retrieve data from localStorage
    const table = document.getElementById("myTable");
    const counter = document.getElementById("number")
    let filteredData
    if(clu === "All") {
        filteredData = infor
    } else {
        filteredData = infor.filter(entry => entry.CL === clu)
    }
    counter.textContent = filteredData.length
    // Clear the table except for the header row
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    
    // If no data matches the selected club, display a message
    if (filteredData.length === 0) {
        const looki = table.insertRow(-1); // Add a new row
        const woahi = looki.insertCell(-1); // Add a single cell
        woahi.colSpan = 6; // Make the cell span all columns
        woahi.textContent = "No Clubs Yet!"; // Set the message
        return; // Exit the function
    }
    
    // Populate the table with filtered data
    filteredData.forEach(entry => {
        const newRow = table.insertRow(-1); // Add a new row
        const columns = ["ID", "FL", "EM", "MN", "GL", "CL"]; // Define the columns
        columns.forEach(column => {
            const newCell = newRow.insertCell(-1); // Add a new cell
            newCell.textContent = entry[column] ?? ""; // Set the cell content
        });
    });
}