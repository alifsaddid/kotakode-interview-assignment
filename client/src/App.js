import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTasksForm from "./AddTasks";
import DarkModeToggle from 'react-dark-mode-toggle';

function App() {
  // This state is for the 'database' of the tasks
  const [tasks, setTasks] = useState(
    []
  );

  // This state is for dark mode state
  const [isDarkMode, setDarkMode] = useState(false);

  // This state is for task id counter
  const [dataId, setDataId] = useState(0);

  // This method is for adding new task to tasks
  function addNewTask(newTask, newTime){

    // Increase the dataId
    setDataId((prevDataId) => {
      return prevDataId + 1;
    });

    // Let cloneTasks be a copy of tasks
    // push the task to the end of the cloneTasks
    // Use insertion sort to keep the cloneTasks sorted by startTime
    let cloneTasks = [...tasks];
    cloneTasks.push({id: dataId, name: newTask, startTime: newTime});
    let i = cloneTasks.length - 1;
    while (i > 0 && cloneTasks[i].startTime < cloneTasks[i-1].startTime){
      let temp = cloneTasks[i];
      cloneTasks[i] = cloneTasks[i-1];
      cloneTasks[i-1] = temp;
      i--;
    }

    // Set tasks to cloneTasks
    setTasks(cloneTasks);
  }

  // This method is for delete a task using the id
  function deleteTask(taskId){
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        console.log(task.id);
        return task.id != taskId;
      });
    });
  }

  // This method is for toggling the isDarkMode state
  function toggleDarkMode(){
    setDarkMode(!isDarkMode);
  }

  // Jsx return value of App
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
