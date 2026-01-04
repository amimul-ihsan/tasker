import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import TaskModal from "./components/TaskModal";
import TaskArea from "./components/TasksArea";
import TaskProvider from "./contexts/taskContext";

export default function Tasker() {
  return (
    <TaskProvider>
      <div className="main-container">
        <Navbar />
        <Modal>
          <TaskModal />
        </Modal>
        <TaskArea />
      </div>
    </TaskProvider>
  );
}
