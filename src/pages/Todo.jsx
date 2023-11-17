import React, { useState } from 'react'
import '../pages/Todo.css'
import { RiTodoFill } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";




function Todo() {
  const[inputData,setInputData] = useState([]);
  const[items,setItems] = useState([]);
  const addItem =()=>
  {
    if(!inputData) 
    {
      
    }
    else
    {
      setItems([...items,inputData]);
      setInputData('');

    }
    
  }
  const deleteItem =(index)=>{
    const updateditems=items.filter((element,ind)=>{
      return ind !== index;

    })
    setItems(updateditems);

    
  }
  
  return (
    <>
      <div className='main-div'>
        <div className='sub-main-div'>
          
          <div className='image-container'>
            <RiTodoFill className='image'/>
            <figcaption>ToDO's</figcaption>
          </div>
          
          <div className='todo-container'>
            <input type='text' placeholder='Add todos' className='search' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
            <div className='add-button'>
            <MdOutlineAddCircleOutline className='add-button-todo' onClick={addItem}/>
            </div>
            
          </div>

          <div className='show-items'>
            {
              items.map((elem,index)=>{
                return(
                  <>
                  <div className='each-item' key={index}>
                    <FaCheckCircle />
                    
                    <h4>{elem}</h4>
                    <AiFillDelete onClick={()=>deleteItem(index)}/>
                  </div>
                  </>
                )
              })
            }
            
          </div>
          
          
        </div>
        
        
          
        
        
      </div>
      
    </>
  )
}

export default Todo