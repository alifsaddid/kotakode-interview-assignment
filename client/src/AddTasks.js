import React, { useState } from 'react';

function AddTasksForm(props){
  
    // These states are for the text that will be displayed in the forms
    const [inputedText, setInputedText] = useState('');
    const [inputedTime, setInputedTime] = useState('00:00');

    // This method is for handling onSubmit event 
    function handleSubmitTask(event){
        event.preventDefault();
        props.onAddNewTask(inputedText, inputedTime);
        setInputedText("");
        setInputedTime("00:00");
    }

    // This method is for handling onChange event in text input field
    function handleOnChangeInputText(event){
        setInputedText(event.target.value);
    }

    // This method is for handling onChange event in time input field
    function handleOnChangeInputTime(event){
        setInputedTime(event.target.value);
    }
  
    // This is the return value of addTaskForm
    // Returning a set of forms that contain text field, time field, and a submit button
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