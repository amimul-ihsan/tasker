import { useState } from "react";
import { randomColor } from "../utils/randomColor";

export default function TaskModal({
  onClickCancel,
  activeTask,
  isEditing,
  onAddTask,
  onEditTask,
}) {
  const [task, setTask] = useState(
    () =>
      activeTask ?? {
        id: crypto.randomUUID(),
        title: "",
        color: randomColor(),
        fav: false,
        completed: false,
        tags: [],
      }
  );

  const handlers = {
    // title handler
    onTitleChange: (title) => {
      setTask((prev) => {
        return { ...prev, title };
      });
    },
    // tag handler
    onTagChange: (tagTexts) => {
      let prevColor = "";
      const tags = tagTexts
        .split(",")
        .map((tag) => tag.trim())
        .map((tagName) => {
          const tagColor = randomColor(prevColor);
          prevColor = tagColor;
          return { name: tagName, color: tagColor };
        });

      setTask((prev) => {
        return { ...prev, tags };
      });
    },
  };

  return (
    <div className="task-modal">
      <h2> {isEditing ? "Edit Task" : "Add Task"} </h2>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* title  */}
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task?.title ?? ""}
          onChange={(e) => handlers.onTitleChange(e.target.value)}
        />

        {/* tags  */}
        <textarea
          name="tags"
          placeholder="Tags (comma separated)"
          className="resize-none"
          value={(task?.tags ?? []).map((t) => t.name).join(",")}
          onChange={(e) => handlers.onTagChange(e.target.value)}
        ></textarea>

        {/* {error && (
          <p className="text-red-600 mb-1.5">Title and tags are required</p>
        )} */}

        <div className="modal-buttons">
          <button
            className="bg-blue-400"
            type="submit"
            onClick={() => (isEditing ? onEditTask(task) : onAddTask(task))}
          >
            {isEditing ? "Edit Task" : "Add Task"}
          </button>

          <button type="button" className="bg-red-400" onClick={onClickCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
