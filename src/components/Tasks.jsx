import { useTasks } from "../contexts/taskContext.jsx";
import Task from "./Task.jsx";

export default function Tasks() {
  const tasks = useTasks();

  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p className="no-task-massage">
          No tasks available. Please add a task.
        </p>
      )}
    </div>
  );
}
