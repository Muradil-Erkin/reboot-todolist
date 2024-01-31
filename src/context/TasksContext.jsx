import { createContext, useState } from "react";

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("Murad");

  return (
    <TasksContext.Provider value={{ userName: userName }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
