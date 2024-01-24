import { useEffect, useState } from "react";
import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("==> tasks", tasks);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      window.localStorage.getItem("react-todo-list-tasks")
    );

    if (!!tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  const updateTasks = (tasks) => {
    setTasks(tasks);
    window.localStorage.setItem("react-todo-list-tasks", JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    updateTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    updateTasks(updatedTasks);
  };

  return (
    <div id="main-container">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <Filters />
      <ClearTask />
    </div>
  );
}

export default App;
