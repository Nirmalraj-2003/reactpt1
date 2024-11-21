
import React ,{ useState}from 'react';
import Taskform  from"./Taskform";
import TaskList from"./TaskList";
import "./index.css";

function App(){
  const [tasks, setTasks] = useState([]);


    function addTask(task) {
  setTasks([...tasks,{...task,id: Date.now(),completed: false }]);
 }
     function toggleTaskcompltion(id){
  setTasks(
    tasks.map((task)=>
    task.id === id ? {...task, completed: !task.completed }: task
  )
  );
 }
    function deletetask(id){
      setTasks(tasks.filter((task)=> task.id !== id));
    }
    
    return(
      <div className="app">
        <h1>task manager</h1>
        <Taskform addtask={addtask} />
        <TaskList tasks={tasks} toggleTaskcompltion={toggleTaskcompltion}
        deletetask={deletetask} />
      </div>
    );
  }

  export default App;