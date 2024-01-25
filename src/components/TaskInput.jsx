import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskInput = ({ addTask }) => {
  const [taskLabel, setTaskLabel] = useState("");

  const handleAddTask = () => {
    if (taskLabel.trim() === "") {
      return;
    }

    const newTask = {
      taskId: `task-${uuidv4()}`,
      label: taskLabel.trim(),
      isCompleted: false,
    };

    addTask(newTask);

    setTaskLabel("");
  };

  // change event handler
  const handleChange = (e) => {
    setTaskLabel(e.target.value);
  };

  // keydown event handler
  const handleKeyDown = (e) => {
    // only when the enter key is pressed
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        id="newTaskText"
        type="text"
        className="form-control"
        placeholder="What do you need to do today?"
        aria-label="What do you need to do today?"
        aria-describedby="task-input"
        value={taskLabel}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-dark"
        type="button"
        id="task-input"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export { TaskInput };
