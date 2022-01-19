import React from 'react';

import './List.css';

const List = ({ itemList, updateItemList }) => {
  const deleteItemFromList = (key) => {
    const newList = itemList.filter((itemObj) => itemObj.createdAt !== key);
    updateItemList(newList);
  };

  const sortInAscendingOrder = () => {
    updateItemList([...itemList].sort((a, b) => a.createdAt - b.createdAt));
  };
  const sortInDescendingOrder = () => {
    updateItemList([...itemList.sort((a, b) => b.createdAt - a.createdAt)]);
  };

  return (
    <div>
      <button onClick={sortInAscendingOrder}>Sort in Ascending Order</button>
      <button onClick={sortInDescendingOrder}>Sort in Descending Order</button>
      {itemList.map((itemObj) => {
        return (
          <div className="Item" key={itemObj.createdAt}>
            <p>
              <span>{itemObj.item}</span>
              <br />
              <span>{` Created At: ${itemObj.createdAt} `}</span>
            </p>
            <button onClick={() => deleteItemFromList(itemObj.createdAt)}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
