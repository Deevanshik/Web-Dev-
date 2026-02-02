import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ task, handleDeleteTask, handleTaskDone }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="list-item"
      key={task.id}
    >
      <button className="drag-btn" {...listeners}>⋮⋮</button>
      <span
        className="task-content"
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button
        className="delete-task-btn"
        onClick={() => handleDeleteTask(task.id)}
      >
        delete
      </button>
      <button className="task-done-btn" onClick={() => handleTaskDone(task.id)}>
        {task.done ? "undo" : "done"}
      </button>
    </li>
  );
};

export default Task;
