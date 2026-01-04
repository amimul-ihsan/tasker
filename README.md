# Tasker 📝

**Tasker** is a minimal, responsive task manager built with **React**, **Vite**, and **Tailwind CSS**. It supports adding, editing, deleting, tagging, favoriting tasks and includes a simple search flow.

---

## ⚡ Quick commands

- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

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
- Click the star to favorite, and use task buttons to edit/delete/complete.

---

## Project structure (key files)

- `src/` – application source
  - `main.jsx` – app bootstrap
  - `Tasker.jsx` – top-level app (now wrapped with `TaskProvider`)
  - `contexts/taskContext.jsx` — Context provider and hooks for task state
  - `components/` – UI components (`Task`, `Tasks`, `TaskModal`, `Navbar`, `Modal`, etc.)
  - `store/store.js` – initial task fixtures
  - `styles/index.css` – Tailwind + custom utilities
  - `utils/` – helpers (`randomColor`, color maps)

---

## Context API (current default)

This repository uses a `TaskProvider` (in `src/contexts/taskContext.jsx`) to centralize task state and handlers. The provider exposes hooks you can use in child components:

- `useTasks()` — visible tasks (filtered by search)
- `useShowModal()` — boolean whether the task modal is visible
- `useActiveTask()` — the currently active task object
- `useSearchTerm()` — current search string
- `useTaskHandlers()` — object containing handlers such as `onAddTask`, `onEditTask`, `onDeleteTask`, `onClickAdd`, `onClickEdit`, `onSearch`, etc.
- `useIsEditing()` — boolean: are we editing an existing task?

Example:

```jsx
import { useTasks, useTaskHandlers } from "./contexts/taskContext";

function TaskList() {
  const tasks = useTasks();
  const { onDeleteTask } = useTaskHandlers();
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.title} <button onClick={() => onDeleteTask(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## Persistence (localStorage) 🗄️

This branch persists tasks to the browser's `localStorage` (key: `tasks`). On app start the app reads `localStorage.getItem('tasks')` and falls back to the seeded fixtures in `src/store/store.js` if no saved data exists. Any task changes (add / edit / delete / delete all) are automatically saved.

Helpful tips:

- To reset tasks to the original sample data: use the app's **Delete All** button, or clear the `tasks` key in DevTools (Application → Local Storage → `tasks`), or run `localStorage.removeItem('tasks')` in the console.
- If you'd like persistence to be optional (or to add a UI reset button), I can implement that as a follow-up.

---

## Branch notes

- `main` — current default and contains the Context API implementation (equivalent to `context-api` branch).
- `context-api` — preserved as a feature branch showing Context API usage.
- `usestate-only` — alternative branch that demonstrates managing state locally in components using `useState` only.

If you want `main` to match another branch in the future or keep a backup of previous `main`, create a backup branch before pushing destructive changes.
