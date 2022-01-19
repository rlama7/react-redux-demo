import React from 'react';
import './List.css';

function List({ currentItem, setCurrentItem, itemList, updateItemList }) {
  /**
   * edit item list
   * delete item list
   * complete check list
   * sort by ascending order
   * sorty by descending order
   *
   */
  //   console.log(itemList);
  const sortInAscendingOrder = () => {
    updateItemList(
      [...itemList].sort(
        (firstItem, secondItem) => firstItem.timeStamp - secondItem.timeStamp
      )
    );
  };
  const sortInDescendingOrder = () => {
    updateItemList(
      [...itemList].sort(
        (firstItem, secondItem) => secondItem.timeStamp - firstItem.timeStamp
      )
    );
  };

  const deleteItem = (key) => {
    updateItemList([...itemList].filter((item) => item.timeStamp !== key));
  };

  const toggleComplete = (key) => {
    const updatedList = [...itemList].map((itemObj) => {
      if (itemObj.timeStamp === key) {
        itemObj.completed = !itemObj.completed;
      }
      return itemObj;
    });
    updateItemList(updatedList);
  };

  return (
    <div className="item-wrapper">
      <button onClick={sortInAscendingOrder}>Sort in Ascending Order</button>
      <button onClick={sortInDescendingOrder}>Sort in Decending Order</button>
      {itemList.map((itemObj) => {
        return (
          <div className="item" key={itemObj.timeStamp}>
            <p>
              {itemObj.item} {`Created At: ${itemObj.timeStamp}`}
              <button onClick={() => deleteItem(itemObj.timeStamp)}>
                <input
                  type="checkbox"
                  checked={itemObj.completed}
                  onChange={() => toggleComplete(itemObj.timeStamp)}
                />
                Delete
              </button>
              <button>Edit</button>
              <button>Submit</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
