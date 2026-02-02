import Task from "./Task.jsx";

const ListColumn = ({ tasks, handleDeleteTask, handleTaskDone }) => {
  return (
    <ol className="to-do-list">
      {tasks.map((task) => (
        <Task
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleTaskDone={handleTaskDone}
        />
      ))}
    </ol>
  );
};

export default ListColumn;
