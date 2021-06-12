import React from 'react';
import './Items.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Items({ item, id, deleteHandler }) {
  console.log(id);

  return (
    <div className="list-container">
      <i
        className="fas fa-trash delete-button"
        onClick={() => {
          deleteHandler(id);
        }}
      ></i>
      <div className="list">{item}</div>
    </div>
  );
}

export default Items;
