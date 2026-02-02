import Task from "./Task.jsx";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const ListColumn = ({ tasks, handleDeleteTask, handleTaskDone }) => {
  return (
    <SortableContext
      items={tasks.map((task) => task.id)}
      strategy={verticalListSortingStrategy}
    >
      <ol className="to-do-list">
        {tasks.map((task) => (
          <Task
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleTaskDone={handleTaskDone}
          />
        ))}
      </ol>
    </SortableContext>
  );
};

export default ListColumn;
