// src/components/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddClick = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput(''); // Clear input field after adding
    }
  };

  return (
    <div style={{backgroundColor:'aliceblue',border:'2px solid black', width:'50rem', margin:'auto', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a task"
        style={{
            color:'black',
            border:'2px solid black', borderRadius:'2px',
            fontSize:'large'
        }}
      />
      <button onClick={handleAddClick} style={{margin:'10px', width:'6rem', fontSize:'large', fontWeight:'bold', border:'2px solid black', borderRadius:'5px'}}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
