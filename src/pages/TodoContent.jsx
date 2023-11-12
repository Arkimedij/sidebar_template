import React, { useState } from 'react'
import '../pages/Todo.css'
import {AiFillDelete} from 'react-icons/ai';
import {BsCheckCircle,BsCheckCircleFill} from"react-icons/bs";


function TodoContent() {
    const tasks="Jack Off"
    const[checkbox,setCheckbox]=useState(false)
    const togglecheck=()=>{
        if (checkbox===true){
            setCheckbox(false);

        }
        else if (checkbox===false)
        {
            setCheckbox(true);

        }
        
    }
  return (
    <div className='content-container'>
        <div className='data'>
            <div className='tick-text'>

            { (checkbox) ?
            <BsCheckCircle className='unticked' onClick={togglecheck} />
            :
            <BsCheckCircleFill className='ticked'onClick={togglecheck}/>}
            <div className={(checkbox)?"ongoing":"completed"}>
            {tasks}
            </div>
            </div>
            
            <AiFillDelete className='del'/>

        </div>
    </div>
  )
}

export default TodoContent