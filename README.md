# 🎌 Anime Next Watch Generator

A modern web application that helps users discover what anime to watch next. The app fetches real-time trending anime data and provides powerful features like search, filtering, and sorting to enhance user experience.

---

## 🚀 Live Demo

https://anime-next-watch-generator-amber.vercel.app/

---

## 📌 Project Objective

This project was built as part of a graded assignment to demonstrate:

* JavaScript fundamentals
* API integration using `fetch`
* Use of Array Higher-Order Functions (HOFs)
* Responsive UI design

---

## 🌐 API Used

* **Jikan API (MyAnimeList Unofficial API)**
  https://docs.api.jikan.moe

Used endpoint:

```
https://api.jikan.moe/v4/top/anime
```

---

## ✨ Features

### 🔍 Search

* Users can search anime by title
* Implemented using `.filter()`
* Includes **debouncing** for performance optimization

### 🎯 Genre Filtering

* Filter anime based on genre (Action, Adventure, Fantasy, etc.)
* Implemented using `.filter()` and `.some()`

### 📊 Sorting

* Sort anime by rating (High → Low / Low → High)
* Implemented using `.sort()`

### 📖 Synopsis Toggle

* Expand/collapse anime description
* Interactive button-based UI

### 🌙 Dark Mode

* Toggle between light and dark themes
* Improves user experience

---

## ⚡ Bonus Features

* 🧠 Debouncing for optimized search
* 🎨 Modern, minimal UI with hover effects
* 📱 Fully responsive design
* ⏳ Loading indicator during API calls

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API

---

## 📂 Project Structure

```
📁 project-folder
│── index.html
│── styles.css
│── app.js
│── README.md
```

---

## ⚙️ How to Run Locally

1. Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the project folder:

```
cd your-repo-name
```

3. Open `index.html` in your browser

---

## 📈 Future Improvements

* ❤️ Add favorites using localStorage
* 📄 Pagination or infinite scrolling
* 🔗 Detailed anime page view
* 📊 More advanced filtering options

---

## 🙌 Acknowledgements

* Jikan API for providing anime data
* MyAnimeList for the original dataset

---

## 📅 Milestones Covered

* ✅ Milestone 1: Project Planning
* ✅ Milestone 2: API Integration
* ✅ Milestone 3: Core Features (Search, Filter, Sort)
* ✅ Milestone 4: UI Enhancement, Documentation & Deployment

---

## 💡 Author

**Krishna**
https://github.com/Krishna-Srivastava-01

---

## ⭐ Final Note

This project demonstrates the practical application of JavaScript concepts and modern UI development. It reflects a strong understanding of API handling, functional programming, and user-centric design.

---
