/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { tasks as initialTasks } from "../store/store";
import { randomColor } from "../utils/randomColor";

const tasksContext = createContext();
const showModalContext = createContext();
const activeTaskContext = createContext();
const searchTermContext = createContext();
const taskHandlersContext = createContext();
const isEditingContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [activeTask, setActiveTask] = useState();
  const [prevColor, setPrevColor] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const visibleTasks = searchTerm
    ? tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm) ||
          task.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm))
      )
    : tasks;

  const handlers = {
    // change task
    onChangeTask: (changedTask) => {
      setTasks((prev) =>
        prev.map((task) => (task.id === changedTask.id ? changedTask : task))
      );
    },
    // delete task
    onDeleteTask: (taskId) => {
      setTasks((prev) => {
        return prev.filter((task) => task.id !== taskId);
      });
    },
    // delete all
    onDeleteAllTasks: () => {
      setTasks([]);
    },
    // on click add
    onClickAdd: () => {
      const color = randomColor(prevColor);
      setActiveTask({
        id: crypto.randomUUID(),
        title: "",
        color,
        fav: false,
        completed: false,
        tags: [],
      });
      setPrevColor(color);
      setShowModal(true);
    },
    // on click edit
    onClickEdit: (task) => {
      setActiveTask(task);
      setIsEditing(true);
      setShowModal(true);
    },
    // on click cancel
    onClickCancel: () => {
      setShowModal(false);
      const color = randomColor(prevColor);
      setActiveTask({
        id: crypto.randomUUID(),
        title: "",
        color,
        fav: false,
        completed: false,
        tags: [],
      });
      setIsEditing(false);
      setPrevColor(color);
    },
    // add task
    onAddTask: (task) => {
      setTasks((prev) => [task, ...prev]);
      setShowModal(false);
    },
    // edit task
    onEditTask: (editedTask) => {
      setTasks((prev) => {
        return prev.map((task) =>
          task.id === editedTask.id ? editedTask : task
        );
      });
      setShowModal(false);
      setIsEditing(false);
    },
    // search task
    onSearch: (keyword) => {
      setSearchTerm(keyword.toLowerCase().trim());
    },
  };

  return (
    <tasksContext.Provider value={visibleTasks}>
      <showModalContext.Provider value={showModal}>
        <activeTaskContext.Provider value={activeTask}>
          <searchTermContext.Provider value={searchTerm}>
            <taskHandlersContext.Provider value={handlers}>
              <isEditingContext.Provider value={isEditing}>
                {children}
              </isEditingContext.Provider>
            </taskHandlersContext.Provider>
          </searchTermContext.Provider>
        </activeTaskContext.Provider>
      </showModalContext.Provider>
    </tasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(tasksContext);
}

export function useShowModal() {
  return useContext(showModalContext);
}

export function useActiveTask() {
  return useContext(activeTaskContext);
}

export function useSearchTerm() {
  return useContext(searchTermContext);
}

export function useTaskHandlers() {
  return useContext(taskHandlersContext);
}

export function useIsEditing() {
  return useContext(isEditingContext);
}
