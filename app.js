function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const container = document.getElementById("anime-container");
const loader = document.getElementById("loader");

const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genre-filter");
const sortSelect = document.getElementById("sort");
const themeToggle = document.getElementById("theme-toggle");

let allAnime = []; 

async function fetchAnime() {
  loader.style.display = "block";

  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();

    allAnime = data.data;
    displayAnime(allAnime);
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

function applyFilters() {
  let filtered = [...allAnime];

  const searchText = searchInput.value.toLowerCase();
  filtered = filtered.filter(anime =>
    anime.title.toLowerCase().includes(searchText)
  );

  const selectedGenre = genreFilter.value;
  if (selectedGenre !== "all") {
    filtered = filtered.filter(anime =>
      anime.genres.some(g => g.name === selectedGenre)
    );
  }

  const sortValue = sortSelect.value;
  if (sortValue === "rating-high") {
    filtered = filtered.sort((a, b) => b.score - a.score);
  } else if (sortValue === "rating-low") {
    filtered = filtered.sort((a, b) => a.score - b.score);
  }

  displayAnime(filtered);
}

const debouncedSearch = debounce(applyFilters, 300);
searchInput.addEventListener("input", debouncedSearch);
genreFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});