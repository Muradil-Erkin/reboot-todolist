import { Modal } from "./Modal";

const ClearTask = ({ clearTasks, disabled }) => {
  return (
    <>
      <div className="w-100">
        <button
          className="btn btn-dark w-100"
          id="clear-completed-tasks"
          data-bs-toggle="modal"
          data-bs-target="#clearCompletedTasks"
          disabled={disabled}
        >
          Clear Completed Tasks
        </button>
      </div>

      <Modal id="clearCompletedTasks" handleDelete={clearTasks} />
    </>
  );
};

export { ClearTask };
