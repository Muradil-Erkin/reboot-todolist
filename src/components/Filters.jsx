const Filters = () => {
  return (
    <div className="mb-3 d-flex column-gap-2">
      <button className="btn btn-outline-dark" id="show-all">
        Show All
      </button>
      <button className="btn btn-outline-dark" id="show-complated">
        Show Completed
      </button>
      <button className="btn btn-outline-dark" id="show-uncompleted">
        Show Uncompleted
      </button>
    </div>
  );
};

export { Filters };
