import { CheckCheck, Delete, PencilLine, Star } from "lucide-react";
import { useTaskHandlers } from "../contexts/taskContext";
import { taskColors } from "../utils/Colors";
import Tags from "./Tags";

export default function Task({ task }) {
  const { onChangeTask, onDeleteTask, onClickEdit } = useTaskHandlers();

  const handlers = {
    // on click fav
    onFav: () => {
      onChangeTask({
        ...task,
        fav: !task.fav,
      });
    },
    // on click complete
    onComplete: () => {
      onChangeTask({
        ...task,
        completed: !task.completed,
      });
    },
    // on click delete
    onDelete: () => {
      onDeleteTask(task.id);
    },
    //  on click edit
    onEdit: () => {
      onClickEdit(task);
    },
  };

  return (
    <div className={`task ${taskColors[task.color]}`}>
      <div>
        <div className="sm:flex">
          <div className="task-header">
            <div className="cursor-pointer" onClick={handlers.onFav}>
              <Star fill={task.fav ? "yellow" : "gray"} strokeWidth={0} />
            </div>
            <div className="task-heading">
              <h1 className={task.completed ? "completed" : ""}>
                {task.title}
              </h1>
            </div>
          </div>

          <Tags tags={task.tags} />
        </div>
      </div>
      {/* task buttons */}
      <div className="flex gap-3">
        {/* delete button */}
        <button className="bg-red-400" onClick={handlers.onDelete}>
          <Delete />
        </button>
        {/* edit button */}
        <button className="bg-blue-400" onClick={handlers.onEdit}>
          <PencilLine />
        </button>
        {/* complete button */}
        <button className="bg-green-400" onClick={handlers.onComplete}>
          <CheckCheck />
        </button>
      </div>
    </div>
  );
}
