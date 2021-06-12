import React, { useState } from 'react';
import Add from './Add';
import Items from './Items';
import './TodoList.css';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(false);

  const deleteHandler = (id) => {
    setTodoList((todoList) => {
      return todoList.filter((remainingList, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-container">
        {todoList.map((item, index) => (
          <Items
            key={index}
            item={item}
            id={index}
            todoList={todoList}
            deleteHandler={deleteHandler}
          />
        ))}
        <Add
          setTodoList={setTodoList}
          todoList={todoList}
          setId={setId}
          id={id}
        />
      </div>
      <div className="img" />
    </>
  );
}

export default TodoList;
