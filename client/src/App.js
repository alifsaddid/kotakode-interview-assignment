import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTasksForm from "./AddTasks";
import DarkModeToggle from 'react-dark-mode-toggle';

function App() {
  const [tasks, setTasks] = useState(
    []
  );

  const [isDarkMode, setDarkMode] = useState(false);

  const [dataId, setDataId] = useState(0);

  function addNewTask(newTask, newTime){
    setDataId((prevDataId) => {
      return prevDataId + 1;
    });
    let cloneTasks = [...tasks];
    cloneTasks.push({id: dataId, name: newTask, startTime: newTime});
    let i = cloneTasks.length - 1;
    while (i > 0 && cloneTasks[i].startTime < cloneTasks[i-1].startTime){
      let temp = cloneTasks[i];
      cloneTasks[i] = cloneTasks[i-1];
      cloneTasks[i-1] = temp;
      i--;
    }
    setTasks(cloneTasks);
  }

  function deleteTask(taskId){
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        console.log(task.id);
        return task.id != taskId;
      });
    });
  }

  function toggleDarkMode(){
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App bg-darkmode" : "App bg-lightmode"}>
      <div>
        <div class="toggle-button">
          <DarkModeToggle onChange={toggleDarkMode} checked={isDarkMode}/>
        </div>

        <h3 className={isDarkMode ? "text-darkmode" : "text-lightmode"}>To-Do-List Manager</h3>
        <AddTasksForm onAddNewTask={addNewTask} isDarkMode={isDarkMode} />
        <TodoList tasks={tasks} onDeleteTask={deleteTask} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
