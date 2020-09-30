import React from "react";

function TodoList(props) {

  // This method is for handling onClick event on delete button
  function onClickHapusHandler(event){
    props.onDeleteTask(event.target.id);
  }

  // This condition block is for initial text when the tasks is empty
  if (props.tasks.length == 0){
    return(
      <p className = {props.isDarkMode ? "text-darkmode" : "text-lightmode"}> There is no activity yet </p>
    )
  }

  // This is the return value of TodoList
  // Returning a table of tasks
  return (
    <div className="container">
      <table>
        <thead>
          <tr className={props.isDarkMode ? "border-darkmode" : "border-lightmode"}>
            <th className={props.isDarkMode ? "text-darkmode" : "text-lightmode"}>Activity</th>
            <th className={props.isDarkMode ? "text-darkmode" : "text-lightmode"}>Start Time</th>
            <th className={props.isDarkMode ? "text-darkmode" : "text-lightmode"}>Action</th>
          </tr>
        </thead>

        <tbody>
          {props.tasks.map((task) => {
            return (
              <tr className={props.isDarkMode ? "border-darkmode" : "border-lightmode"} key={task.id}>
                <td className={props.isDarkMode ? "text-darkmode" : "text-lightmode"}>{task.name}</td>
                <td className={props.isDarkMode ? "text-darkmode" : "text-lightmode"}>{task.startTime}</td>
                <td className={props.isDarkMode ? "text-darkmode" : "text-lightmode"}><button id={task.id} onClick={onClickHapusHandler} className="btn red"> Hapus </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default TodoList;