import { useState } from "react";
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleInputSubmit() {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: crypto.randomUUID(), text: newTask.trim(), done: false },
      ]);
      setNewTask("");
    }
  }

  function handleDeleteTask(idToDelete) {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }

  function handleTaskDone(idToChange) {
    setTasks(
      tasks.map((task) =>
        task.id === idToChange ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function handleClearTasks() {
    setTasks([]);
  }
  return (
    <div className="main">
      <h1>To-Do List</h1>
      <input
        type="text"
        className="list-input"
        placeholder="add a task..."
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleInputSubmit();
          }
        }}
      />
      <button className="add-task-btn" onClick={handleInputSubmit}>
        Add task
      </button>
      <button className="clear-tasks-btn" onClick={handleClearTasks}>
        Clear Tasks
      </button>
      <ol className="to-do-list">
        {tasks.map((task) => {
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
              <button
                className="task-done-btn"
                onClick={() => handleTaskDone(task.id)}
              >
                {task.done ? "undo" : "done"}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ToDoList;
