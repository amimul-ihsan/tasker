import { useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import TaskModal from "./components/TaskModal";
import TaskArea from "./components/TasksArea";
import { tasks as initialTasks } from "./store/store";
import { randomColor } from "./utils/randomColor";

export default function Tasker() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [activeTask, setActiveTask] = useState();
  const [prevColor, setPrevColor] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
      isEditing(false);
    },
    // search task
    onSearch: (keyword) => {
      setSearchTerm(keyword.toLowerCase().trim());
    },
  };

  const visibleTasks = searchTerm
    ? tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm) ||
          task.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm))
      )
    : tasks;

  return (
    <div className="main-container">
      <Navbar onSearch={handlers.onSearch} />
      <Modal showModal={showModal}>
        <TaskModal
          key={activeTask?.id}
          onClickCancel={handlers.onClickCancel}
          activeTask={activeTask}
          isEditing={isEditing}
          onAddTask={handlers.onAddTask}
          onEditTask={handlers.onEditTask}
        />
      </Modal>
      <TaskArea
        tasks={visibleTasks}
        onChangeTask={handlers.onChangeTask}
        onDeleteTask={handlers.onDeleteTask}
        onDeleteAllTasks={handlers.onDeleteAllTasks}
        onClickAdd={handlers.onClickAdd}
        onClickEdit={handlers.onClickEdit}
      />
    </div>
  );
}
