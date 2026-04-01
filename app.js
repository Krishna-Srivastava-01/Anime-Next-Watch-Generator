const container = document.getElementById("anime-container");
const loader = document.getElementById("loader");

async function fetchAnime() {
  loader.style.display = "block";

  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();

    displayAnime(data.data);
  } catch (error) {
    container.innerHTML = "<p>Failed to load data</p>";
  } finally {
    loader.style.display = "none";
  }
}

fetchAnime();

function displayAnime(animeList) {
  container.innerHTML = "";

  animeList.forEach(anime => {
    const card = document.createElement("div");
    card.className = "anime-card";

    card.innerHTML = `
      <img src="${anime.images.jpg.image_url}">
      <h3>${anime.title}</h3>
      <p> ${anime.score || "N/A"}</p>
      <button class="toggle-btn">View Synopsis</button>
      <p class="synopsis" style="display:none;">
        ${anime.synopsis || "No description"}
      </p>
    `;

    const btn = card.querySelector(".toggle-btn");
    const synopsis = card.querySelector(".synopsis");

    btn.addEventListener("click", () => {
      synopsis.style.display =
        synopsis.style.display === "none" ? "block" : "none";
    });

    container.appendChild(card);
  });
}