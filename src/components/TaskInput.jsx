import { useState } from "react";

const TaskInput = () => {
  const [taskLabel, setTaskLabel] = useState("");

  // change event handler
  const handleChange = (e) => {
    setTaskLabel(e.target.value);
  };

  // click event handler
  const handleClick = () => {
    alert(`Clicked on the button with the text: ${taskLabel}`);
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
        onChange={handleChange}
      />
      <button
        className="btn btn-dark"
        type="button"
        id="task-input"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export { TaskInput };
