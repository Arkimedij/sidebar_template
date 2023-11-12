import React from 'react'
import '../pages/Todo.css'
import TodoContent from './TodoContent'
import {MdDownloading} from 'react-icons/md';
import {FaPercent} from 'react-icons/fa';

function Todo() {
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
      <div className='todos'>
        <TodoContent/>
        <TodoContent/>
        <TodoContent/>
        <TodoContent/>
       
        
        
      </div>
      <h1 className='second-title'>Small Task's</h1>

    </div>
  )
}

export default Todo