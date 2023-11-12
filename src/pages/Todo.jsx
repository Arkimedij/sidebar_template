import React from 'react'
import '../pages/Todo.css'
import TodoContent from './TodoContent'

function Todo() {
  return (
    <div className='todo-container'>
      <h1 className='title'>Your Todo's</h1>
      <div className='todos'>
        <TodoContent/>
       
        
        
      </div>
    </div>
  )
}

export default Todo