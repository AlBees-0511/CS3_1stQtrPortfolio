function addTeam() {
    const table = document.getElementById("myTable");
    const teamInput = document.getElementById("teams").value.trim();

    if (teamInput === "") {
        alert("Please enter a team name.");
        return;
    }
    const teamNames = teamInput.split(",").map(name => name.trim()).filter(name => name !== "");

    teamNames.forEach(teamName => {
        const row = table.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = teamName;
    });
}
