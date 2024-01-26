const TaskItem = ({ task, setTaskToBeDeleted, toggleTask }) => {
  const { label, taskId, isCompleted } = task;

  const handleChange = () => {
    toggleTask(taskId);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input
            className="form-check-input me-1"
            type="checkbox"
            id={taskId}
            checked={isCompleted}
            onChange={handleChange}
          ></input>
          <label
            className={`form-check-label ${isCompleted ? "completed" : ""}`}
            htmlFor={taskId}
          >
            {label}
          </label>
        </div>
        <div
          className="pointer"
          data-bs-toggle="modal"
          data-bs-target="#taskListDeleteTask"
          onClick={() => {
            setTaskToBeDeleted(task);
            console.log("Clicked on trash can, and passing up data", task);
          }}
        >
          <i className="fa-solid fa-trash-can" aria-hidden="true"></i>
        </div>
      </li>
    </>
  );
};

export { TaskItem };
