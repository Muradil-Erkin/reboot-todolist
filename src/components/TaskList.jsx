import { TaskItem } from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  const taskItems = tasks.map((task) => {
    return (
      <TaskItem
        key={task.taskId}
        label={task.label}
        taskId={task.taskId}
        deleteTask={deleteTask}
      />
    );
  });

  return (
    <ul className="list-group mb-3" id="taskList">
      {taskItems}
    </ul>
  );
};

export { TaskList };
