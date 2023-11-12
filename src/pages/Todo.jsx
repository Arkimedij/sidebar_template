import React from 'react'
import '../pages/Todo.css'
import TodoContent from './TodoContent'
import {MdDownloading} from 'react-icons/md';
import {FaPercent} from 'react-icons/fa';
import { useState } from 'react';

function Todo() {
  const[tasks,setTasks]=useState([]);
  const[taskName,setTaskName]=useState('');
    function handleSubmit(e) {
        e.preventDefault();
        addTask(taskName);
        setTaskName('');
    }
    function addTask(taskName) {
      if(taskName==="") return alert('please enter task name');
      setTasks(prev=>{
          return [...prev,{name:taskName,done:false}];
        });
    }
  

  
  return (
    <div className='todo-container'>
      <div className='stats'>
        <h1>Todo Stats</h1>
        <div className='stats-container'>
        <div className='progress-status'>
          <h3>Status:Ongoing <MdDownloading/></h3>
        </div>
        <div className='progress-bar'>
           <FaPercent/>90
           
        </div>
        <div className='tasks'>
        </div>
      </div>
      </div>
      <h1 className='title'>Main Goal</h1>
      <form onSubmit={handleSubmit}>
        <button>+</button>
        <input type="text" 
        value={taskName} 
        onChange={(e)=>setTaskName(e.target.value)} placeholder='your next task'>

        </input>
      </form>
      
      


      <div className='todos'>
        <TodoContent onAdd={addTask}/>
        {tasks&&tasks.map((tasks,index)=>(
        <TodoContent {...tasks}
        />
      ))}
        
       
        
        
      </div>
      <h1 className='second-title'>Small Task's</h1>

    </div>
  )
}

export default Todo