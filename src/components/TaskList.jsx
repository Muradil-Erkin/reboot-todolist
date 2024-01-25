import { TaskItem } from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "all":
        return true;
      case "completed":
        return task.isCompleted;
      case "uncompleted":
        return !task.isCompleted;
      default:
        return true;
    }
  });

  const taskItems = filteredTasks.map((task) => {
    return (
      <TaskItem
        key={task.taskId}
        task={task}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    );
  });

  const noDataMessage = (
    <li className="list-group-item d-flex justify-content-center align-items-center text-muted">
      Nothing to show here
    </li>
  );

  return (
    <ul className="list-group mb-3" id="taskList">
      {filteredTasks.length > 0 ? taskItems : noDataMessage}
    </ul>
  );
};

export { TaskList };
