# Tasker — Context API Branch 🧩

**Branch:** `context-api`

This branch demonstrates using the React Context API (via a `TaskProvider`) to manage and share task state and handlers across the app instead of passing props or relying on isolated local `useState` only.

---

## Quick commands

- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

---

## What changed ✅

- Added `src/contexts/taskContext.jsx` which exposes a `TaskProvider` and several hooks to access state and handlers across components.
- `src/Tasker.jsx` now wraps the app with `<TaskProvider>` so child components can call the provided hooks.
- Keeps the same component structure but centralizes task-related logic (search, add/edit/delete, modal visibility, etc.).

---

## Provided Context hooks

Use these hooks anywhere in child components inside `TaskProvider`:

- `useTasks()` — returns the list of visible tasks (already filtered by search term)
- `useShowModal()` — boolean whether the task modal is visible
- `useActiveTask()` — the currently active task object (for edit/add)
- `useSearchTerm()` — current search term string
- `useTaskHandlers()` — object containing handlers:
  - `onChangeTask(changedTask)`
  - `onDeleteTask(taskId)`
  - `onDeleteAllTasks()`
  - `onClickAdd()`
  - `onClickEdit(task)`
  - `onClickCancel()`
  - `onAddTask(task)`
  - `onEditTask(editedTask)`
  - `onSearch(keyword)`
- `useIsEditing()` — boolean flag indicating if we are editing an existing task

Example usage:

```jsx
import { useTasks, useTaskHandlers } from "./contexts/taskContext";

function TaskList() {
  const tasks = useTasks();
  const { onDeleteTask } = useTaskHandlers();
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>/* ... */</li>
      ))}
    </ul>
  );
}
```

---

## Notes & migration tips 🔁

- Compared to the `usestate-only` approach, this branch centralizes state so components can read and modify task state without prop drilling.
- If you want to keep both branches: maintain `README.md` for `usestate-only` and this file for `context-api`, or update the root `README.md` to include branch notes.

---

## Project structure (relevant parts) 🔧

- `src/contexts/taskContext.jsx` — provider + hooks
- `src/Tasker.jsx` — wraps the UI with `TaskProvider`
- `src/store/store.js` — initial task fixtures used by the provider
- `src/components/` — UI pieces (Navbar, Modal, TasksArea, TaskModal, etc.)
