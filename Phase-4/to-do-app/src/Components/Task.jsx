const Task = ({task, handleDeleteTask, handleTaskDone}) => {
  return (
    <li className="list-item" key={task.id}>
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
