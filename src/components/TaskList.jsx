import { TaskItem } from "./TaskItem";

// Temporary static data
const tasks = [
  { taskId: "task-1", label: "New Task 1" },
  { taskId: "task-2", label: "New Task 2" },
  { taskId: "task-3", label: "New Task 3" },
];

const TaskList = () => {
  const taskItems = tasks.map((task) => {
    return (
      <TaskItem key={task.taskId} label={task.label} taskId={task.taskId} />
    );
  });

  return (
    <ul className="list-group mb-3" id="taskList">
      {taskItems}
    </ul>
  );
};

export { TaskList };
