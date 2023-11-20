import React, { useEffect, useState } from 'react';
import { FaRegNoteSticky } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';

function Notes() {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState([]);
  const char = 260;
  const charLimit = char - inputText.length;

  const saveHandler = (value) => {
    setInputText(value);
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: uuid(),
        text: value,
      },
    ]);
    setInputText('');
  };

  const deleteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Notes'));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="note-container">
      <div className="logo-note">
        <FaRegNoteSticky className="note-logo" />
        <h4 className="sub-title-note">Write down your 💡 ideas</h4>
      </div>

      <div className="note-sub-container">
        <div className="note">
          <textarea
            cols={45}
            rows={7}
            maxLength={260}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type..."
          ></textarea>
          <div className="note-footer">
            <span className="note-footer-label">{charLimit} Characters left</span>
            <div className="button-container">
              <button className="note-save" onClick={() => saveHandler(inputText)}>
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Display saved notes */}
        
      </div>
      <div className="saved-notes">
          {notes.map((note) => (
            
              
              
              <div className="note-sub-container-data"key={note.id}>
                    <div className="note">
                      <div className='textarea'>{note.text}</div>
                      
                      <div className="note-footer">
                        <span className="note-footer-label">{charLimit} Characters left</span>
                        <div className="button-container">
                        <button onClick={() => deleteHandler(note.id)}>Delete</button>
                        </div>
                      </div>
                    </div>

                    {/* Display saved notes */}
                    
                  </div>
            
          ))}
        </div>
    </div>
  );
}

export default Notes;
