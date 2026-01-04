import { Plus, Trash2 as Trash } from "lucide-react";
import { useTaskHandlers } from "../contexts/taskContext";
import Tasks from "./Tasks";

export default function TaskArea() {
  const { onDeleteAllTasks, onClickAdd } = useTaskHandlers();

  return (
    <section>
      <div className="task-area-buttons">
        <button className="bg-blue-500" onClick={onClickAdd}>
          <Plus />
          <span>ADD TASK</span>
        </button>
        <button className="bg-red-500" onClick={onDeleteAllTasks}>
          <Trash />
          <span>DELETE ALL</span>
        </button>
      </div>

      <div className="task-area">
        <Tasks />
      </div>
    </section>
  );
}
