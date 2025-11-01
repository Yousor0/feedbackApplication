# 📝 Feedback App

<img width="1049" height="568" alt="Screenshot 2025-11-01 at 2 16 34 AM" src="https://github.com/user-attachments/assets/d906dd24-cbae-417e-b64a-1cb090b90e2c" />

A simple & fully functional **Feedback Application** built with **React**.  
Users can leave reviews and ratings with descriptions, as well as **add**, **edit**, and **delete** feedback entries — all in a smooth, animated interface powered by **Framer Motion**.  
A mock backend is provided via **JSON Server**.

---

## 🚀 Features

- ✍️ Add new feedback with a rating and description  
- 🔄 Edit existing feedback  
- ❌ Delete feedback entries  
- 💾 Persistent data via `json-server`  
- ⚡ Smooth UI animations using **Framer Motion**  
- 🧪 Unit testing with **Jest**  
- 🧩 Built with modular React components for scalability  

---

## 🛠️ Tech Stack

- **Frontend:** React  
- **Animations:** Framer Motion  
- **Backend (Mock API):** JSON Server  
- **Testing:** Jest  
- **Build Tooling:** react-scripts  

---

## 📂 Project Structure

```
feedback-app/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── db.json              # Mock backend data
├── package.json
└── README.md
```

---

## ⚙️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open **[http://localhost:3000](http://localhost:3000)** to view it in the browser.

### `npm run server`
Runs **json-server** to serve your mock API at **[http://localhost:4000](http://localhost:4000)**.

### `npm run dev`
Runs both the React app and JSON Server concurrently.  
Ideal for development.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
Exposes configuration files for full control (use with caution).

---

## 💻 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/feedback-app.git
   cd feedback-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development servers**
   ```bash
   npm run dev
   ```
   This starts both the React app (`localhost:3000`) and JSON Server (`localhost:4000`).

---

## 🧪 Testing

Run all Jest tests with:
```bash
npm test
```

You can add more unit tests under the `__tests__` directory for components and utilities.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it.
