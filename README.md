# Tasker 📝

**Tasker** is a small React + Vite task management demo app with Tailwind CSS. This branch (`usestate-only`) focuses on local state management using `useState` (no global store). ✅

---

## Quick Links

- Run (dev): `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

---

## Features ✨

- Create and manage tasks
- Tags and colors for tasks
- Modal UI for creating/editing tasks
- Minimal, component-driven structure for easy learning and extension

---

## Requirements

- Node.js >= 16
- npm (or pnpm/yarn) installed

---

## Setup (local)

1. Clone the repo and checkout the branch:

```bash
git clone <repo-url>
cd tasker
git checkout usestate-only
```

2. Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Project Structure 🔧

- `index.html` — entry page
- `src/main.jsx` — app entry
- `src/Tasker.jsx` — top-level app component
- `src/components/` — presentational and UI components:
  - `Button.jsx`, `Modal.jsx`, `Navbar.jsx`, `Tags.jsx`, `Task.jsx`, `TaskModal.jsx`, `Tasks.jsx`, `TasksArea.jsx`
- `src/store/` — (kept for reference) `store.js` — this branch emphasizes component-local `useState` rather than a global store
- `src/styles/` — Tailwind / CSS
- `src/utils/` — helpers like `Colors.js`, `randomColor.js`

---

## Branch notes — `usestate-only` ⚠️

This branch intentionally simplifies state handling by using `useState` in components rather than relying on a central store. It's useful for learning or when global state management is not required.

If you plan to migrate back to a global store later, keep `src/store/store.js` as a reference.

---

## Linting & Formatting

- ESLint is configured. Run:

```bash
npm run lint
```

(Adjust or add Prettier if desired.)

---

## Contributing 🤝

- Open issues for bugs or feature requests
- Send PRs to the `usestate-only` branch if they align with the branch goal (keeping state local)

---

## License

This repository does not include a license file by default. If you'd like to license the project, add a `LICENSE` file (e.g., MIT).

---

If you'd like, I can also: add example screenshots, add more detailed docs for components, or create a sample dataset script. 💡
