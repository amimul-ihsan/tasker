import { Plus, Trash2 as Trash } from "lucide-react";
import Tasks from "./Tasks";

export default function TaskArea({
  tasks,
  onChangeTask,
  onDeleteTask,
  onDeleteAllTasks,
  onClickAdd,
  onClickEdit,
}) {
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
        <Tasks
          tasks={tasks}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
          onClickEdit={onClickEdit}
        />
      </div>
    </section>
  );
}
