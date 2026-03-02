# 🎬 Netflix Clone (React)

A Netflix-inspired web application built with **React + Vite**.  
This project focuses on **fetching movie data from a local JSON file**, **filtering movies**, and **viewing detailed movie information**, wrapped in a clean Netflix-style UI.

---

## 🚀 Features

- Netflix-style home page UI
- Movie listing page
- Fetch movie data from a local JSON file
- Filter movies using JavaScript `.filter()` method
- Click a movie to view full movie details
- Dynamic routing using React Router
- Responsive layout
- Clean component-based structure

---

## 🛠 Tech Stack

- React
- Vite
- React Router
- HTML5
- CSS3
- Local JSON data

---

## 📂 Project Structure
movie-app/
│
├── src/
│ ├── assets/
│ │ ├── react.svg
│ │ └── images
│ │
│ ├── data/
│ │ └── moviedb.json
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Home.css
│ │ ├── Movie.jsx
│ │ ├── Movie.css
│ │ ├── Detail.jsx
│ │ ├── Detail.css
│ │ ├── About.jsx
│ │ └── About.css
│ │
│ ├── router/
│ │ └── router.jsx
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
│
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
---

## 📡 Data Fetching

- Movie data is stored in `src/data/moviedb.json`
- Data is fetched when the Movie page loads
- Movies are rendered dynamically using React state
- No page reload required

Example:
```js
fetch('/src/data/moviedb.json')
🎥 Movie Details Page

Each movie card is clickable

Clicking a movie navigates to a dynamic route

Movie details page displays:

Movie title

Description

Image

Category

Routing is handled in:
src/router/router.jsx
1️⃣ Install dependencies
npm install
2️⃣ Run the development server
npm run dev

---

### ✅ Next step (important)
After saving the README:

```bash
git add README.md
git commit -m "Add project README"
git push
