import React,{ useState} from "react";

function TaskForm({ addTask }) {
    const [title,setTitle]= useState("");


function handleSubmit(e) {
    e.preventDefault();
    if (title) {
        addTask({ title });
        setTitle("");
    }
}

 return(
    <form onSubmit={handleSubmit} className="task-form">
        <input type="text" placeholder="enter task title"
        value={title} onChange={(e) => setTitle(e.target.value)}
        required/>
        <button type="submit">ADD Task</button>
    </form>

 );
}

export default TaskForm;