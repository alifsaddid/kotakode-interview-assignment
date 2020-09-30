import React, { useState } from 'react';

function AddTasksForm(props){
  
    const [inputedText, setInputedText] = useState('');
    const [inputedTime, setInputedTime] = useState('00:00');

    function handleSubmitTask(event){
        event.preventDefault();
        props.onAddNewTask(inputedText, inputedTime);
        setInputedText("");
        setInputedTime("00:00");
    }

    function handleOnChangeInputText(event){
        setInputedText(event.target.value);
    }

    function handleOnChangeInputTime(event){
        setInputedTime(event.target.value);
    }
  
    return (
        <div>
            <br />
            <form onSubmit={handleSubmitTask} className="row">
                <div className="container">
                    <div className="input-field inline col s8">
                        <input id="add_task" className={props.isDarkMode ? "text-darkmode" : "text-lightmode"} value={inputedText} onChange={handleOnChangeInputText} type="text" required/>
                        <label htmlFor="add_task">Add Your Task</label>
                        <div className="row">
                            <div className="col s4">
                                <label htmlFor="start_time">Start Time</label>
                                <input value={inputedTime} className={props.isDarkMode ? "text-darkmode" : "text-lightmode"} id="start_time" type="time" onChange={handleOnChangeInputTime} required/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn waves-effect waves-light">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddTasksForm;