import { useState } from "react";
import { Modal } from "./Modal";
import { TaskItem } from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask, filter }) => {
  const [taskToBeDeleted, setTaskToBeDeleted] = useState();
  console.log("taskToBeDeleted is updated", taskToBeDeleted);

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
        setTaskToBeDeleted={setTaskToBeDeleted}
        toggleTask={toggleTask}
      />
    );
  });

  const noDataMessage = (
    <li className="list-group-item d-flex justify-content-center align-items-center text-muted">
      Nothing to show here
    </li>
  );

  const handleDeleteTask = () => {
    console.log("Deleting task w/ ID: ", taskToBeDeleted.taskId);
    deleteTask(taskToBeDeleted.taskId);
  };

  return (
    <>
      <ul className="list-group mb-3" id="taskList">
        {filteredTasks.length > 0 ? taskItems : noDataMessage}
      </ul>
      <Modal
        id="taskListDeleteTask"
        handleDelete={handleDeleteTask}
        message={`The task "${taskToBeDeleted?.label}" will be deleted permanently.`}
      />
    </>
  );
};

export { TaskList };
