# Tasker 📝

**Tasker** is a minimal, responsive task manager built with **React**, **Vite**, and **Tailwind CSS**. It supports adding, editing, deleting, tagging, favoriting tasks and includes a simple search flow.

---

## 🚀 Features

- Add / Edit / Delete tasks
- Assign colored tags to tasks
- Favorite and complete tasks
- Modal-based task creation/editing
- Instant search by title and tags
- Tailwind utility classes for quick UI

---

## 🛠️ Built with

- React 19
- Vite
- Tailwind CSS
- lucide-react (icons)

---

## Getting started

Prerequisites:

- Node.js 18+ (or LTS)

Install and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Usage

- Click **ADD TASK** to open the task modal and create a new task.
- Use the **search** field in the navbar to find tasks by title or tag.
- Click the star to favorite, and buttons on each task to edit/delete/complete.

---

## Project structure (key files)

- `src/` – application source
  - `main.jsx` – app bootstrap
  - `Tasker.jsx` – main app + state & handlers
  - `components/` – React components (`Task`, `Tasks`, `TaskModal`, `Navbar`, `Modal`, etc.)
  - `store/store.js` – initial tasks data
  - `styles/index.css` – Tailwind + custom utilities
  - `utils/` – helpers (`randomColor`, color maps)

---

## Notes & tips

- Search is implemented client-side; clearing the search field shows all tasks by design (filtered view is derived at render time).
- The project uses a small custom utility for hiding scrollbars (`.no-scrollbar`) in CSS.
