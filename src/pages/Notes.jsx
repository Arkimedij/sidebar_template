import React, { useState } from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";

function Notes() {
  const [inputText,setInputText] = useState("");
  const [notes,setNotes]=useState([]);

  const saveHandler=() => {


  };
  return (
    <div className='note-container'>
      <div className='logo-note'>
        <FaRegNoteSticky className='note-logo'/>
        <h4 className='sub-title-note'>Write down your 💡 ideas</h4>
        </div>
      
      <div className='note-sub-container'>
        <div className='note'>
          <textarea
            cols={45}
            rows={7}
            maxLength={260}
            onChange={(e)=>saveHandler(e.target.value)}
            placeholder='Type...'
            ></textarea>
            <div className='note-footer'>
              <span className='note-footer-label'>{} Characters left</span>
              <div className='button-container'>
              <button className='note-save' onClick={saveHandler}>Save</button>

              </div>
              
            </div>
        </div>

      </div>

    </div>
  )
}

export default Notes