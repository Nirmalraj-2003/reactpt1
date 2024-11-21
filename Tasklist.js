import React from "react";
import Task from "./Task";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length > 0 ? ( tasks.map((task) => (
          <Task key={task.id}  task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}/>)
    
    )
      ):
        (<p>No tasks available. Add a new task!</p>
      )
      }
    </div>
  );
}

export default TaskList;