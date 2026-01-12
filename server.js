const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const DATA_FILE = "leaderboard.json";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load leaderboard data
function loadLeaderboard() {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

// Save leaderboard data
function saveLeaderboard(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Get leaderboard
app.get("/leaderboard", (req, res) => {
    res.json(loadLeaderboard());
});

// Add new score
app.post("/leaderboard", (req, res) => {
    const { name, score } = req.body;

    if (typeof name !== "string" || typeof score !== "number") {
        return res.status(400).json({ error: "Invalid data format" });
    }

    let leaderboard = loadLeaderboard();
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score); // Highest first
    leaderboard = leaderboard.slice(0, 10); // Keep top 10

    saveLeaderboard(leaderboard);
    res.json({ success: true, leaderboard });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});