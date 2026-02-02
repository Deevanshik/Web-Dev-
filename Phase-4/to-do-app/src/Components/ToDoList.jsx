import { useState } from "react";
import ListColumn from "./ListColumn.jsx";
import { DndContext, closestCorners } from "@dnd-kit/core";

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

      <DndContext collisionDetection={closestCorners}>
        <ListColumn
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleTaskDone={handleTaskDone}
        />
      </DndContext>
    </div>
  );
};

export default ToDoList;
