import { useEffect, useState } from "react";
import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      // checking to see if the current task is the task we're trying update
      if (task.taskId === taskId) {
        // if it is, update the isCompleted property by flipping it
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // if the element is not the one we're trying to update, return it as is
      return task;
    });
    updateTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
    updateTasks(uncompletedTasks);
  };

  return (
    <div id="main-container">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        filter={filter}
      />
      <Filters filter={filter} setFilter={setFilter} />
      <ClearTask
        clearTasks={clearCompletedTasks}
        disabled={tasks.filter((task) => task.isCompleted).length === 0}
      />
    </div>
  );
}

export default App;
