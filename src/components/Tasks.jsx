import Task from "./Task.jsx";

export default function Tasks({
  tasks,
  onChangeTask,
  onDeleteTask,
  onClickEdit,
}) {
  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
            onClickEdit={onClickEdit}
          />
        ))
      ) : (
        <p className="no-task-massage">
          No tasks available. Please add a task.
        </p>
      )}
    </div>
  );
}
