import React from "react";

function TodoList(props) {

  function onClickHapusHandler(event){
    props.onDeleteTask(event.target.id);
  }

  if (props.tasks.length == 0){
    return(
      <p className = {props.isDarkMode ? "text-darkmode" : "text-lightmode"}> There is no activity yet </p>
    )
  }

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