import React, { useState, useEffect } from 'react';

import List from './components/List';

import './App.css';

/**
 * ToDo MVC
 *
 * 1. add todo
 * 2. display todos
 * 3. cross off todo
 * 4. show number of active todos
 * 5. filter all/active/complete
 * 6. delete todo
 * 7. delete all complete
 *  7.1 only show if atleast one is complete
 * 8. button to toggle all on/off
 */

function App() {
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setCurrentItem(e.target.value); // store input value
    // console.log(e.target.value);
  };

  const addItemToFrontOfList = () => {
    // // if currentItem is null just return previous list
    // if (currentItem === null) return;
    updateItemList([
      {
        item: currentItem,
        createdAt: Date.now(),
      },
      ...itemList,
    ]);
    // after item is updated clear the input field
    setCurrentItem('');
  };

  const addItemToBackOfList = () => {
    // // if currentItem is null just return previous list
    // if (currentItem === null) return;
    updateItemList([
      ...itemList,
      {
        item: currentItem,
        createdAt: Date.now(),
      },
    ]);
    // after item is updated clear the input field
    setCurrentItem('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input
              placeholder="Enter your todos..."
              value={currentItem}
              onChange={handleInputChange}
            />
            <button onClick={addItemToFrontOfList}>Add to Front</button>
            <button onClick={addItemToBackOfList}>Add to End</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
