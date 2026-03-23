// Load saved collection or start fresh
let animeCollection = JSON.parse(localStorage.getItem("animeCollection")) || {};

// Function to display characters
function displayCharacters() {
  const list = document.getElementById("animeList");
  list.innerHTML = "";
  for (let key in animeCollection) {
    const char = animeCollection[key];
    const div = document.createElement("div");
    div.className = "character";
    div.innerHTML = `
      <strong>${char.name}</strong> (Age: ${char.age}, Anime: ${char.anime})
      <button class="delete-btn" onclick="deleteCharacter('${key}')">Delete</button>
    `;
    list.appendChild(div);
  }
}

// Add or update character
document.getElementById("animeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const key = document.getElementById("key").value.trim();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const anime = document.getElementById("anime").value.trim();

  animeCollection[key] = { name, age, anime };
  localStorage.setItem("animeCollection", JSON.stringify(animeCollection));
  displayCharacters();
  this.reset();
});

// Delete character
function deleteCharacter(key) {
  delete animeCollection[key];
  localStorage.setItem("animeCollection", JSON.stringify(animeCollection));
  displayCharacters();
}

// Show characters on page load
displayCharacters();