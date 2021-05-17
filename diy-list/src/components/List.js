import { useState } from 'react';
import './List.css';

function List({ itemList, updateItemList }) {
  return (
    <div>
      <ul>
        {itemList.map((itemObj) => (
          <li key={itemObj.key}>{itemObj.item}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;
