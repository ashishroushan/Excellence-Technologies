import React, { useState } from 'react';
import './Add.css';

function Add({ setTodoList, setId }) {
  const [items, setItems] = useState([]);
  const addHandler = () => {
    const arrData = [items];
    setTodoList((prevState) => [...prevState, arrData]);
    setId(true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setItems([]);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="inp"
          outline="none"
          type="text"
          placeholder="write your task"
          onChange={(e) => setItems(e.target.value)}
          value={items}
        />
        <button className="add-button" onClick={addHandler}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
