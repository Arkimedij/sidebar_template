import React, { useState, useEffect } from 'react';
import '../pages/Todo.css';
import { RiTodoFill } from 'react-icons/ri';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';

function Todo() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Load items and done state from local storage on component mount
    const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    const storedDone = JSON.parse(localStorage.getItem('doneState')) || false;

    setItems(storedItems);
    setDone(storedDone);
  }, []);

  useEffect(() => {
    // Save items to local storage whenever 'items' state changes
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    // Save done state to local storage whenever 'done' state changes
    localStorage.setItem('doneState', JSON.stringify(done));
  }, [done]);

  const toggleDone = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].done = !updatedItems[index].done;
      return updatedItems;
    });
  };

  const addItem = (e) => {
    e.preventDefault();

    if (!inputData) {
      // Handle the case when inputData is empty
    } else {
      setItems([...items, { text: inputData, done: false }]);
      setInputData('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <div className='main-div'>
        <div className='sub-main-div'>
          <div className='image-container'>
            <RiTodoFill className='image' />
            <figcaption>ToDO's</figcaption>
          </div>

          <div className='todo-container'>
            <input
              type='text'
              placeholder='Add todos'
              className='search'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <div className='add-button'>
              <MdOutlineAddCircleOutline className='add-button-todo' onClick={addItem} />
            </div>
          </div>

          <div className='show-items'>
            {items.map((elem, index) => (
              <div className='each-item' key={index}>
                <FaCheckCircle
                  className={elem.done ? 'checked' : 'unchecked'}
                  onClick={() => toggleDone(index)}
                />
                <h4 className={elem.done ? 'checked' : 'unchecked'}>{elem.text}</h4>
                <AiFillDelete className='delete-button-todo' onClick={() => deleteItem(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
