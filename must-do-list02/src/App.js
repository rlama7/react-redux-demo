import React, { useState, useEffect } from 'react';

import List from './List';

import './App.css';

function App() {
  /**
   * Lama Todos
   * add to end [Y]
   * add to front [Y]
   * sort by ascending order [Y]
   * sort by descending order [Y]
   * edit list [X]
   * delete list [Y]
   * style the list [x]
   * set/get localStorage [Y]
   *
   */
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState([]);

  // const [todoEditing, setTodoEditing] = useState(null);
  // const [editingText, setEditingText] = useState('');

  // localStorage getter
  useEffect(() => {
    const getTodoList = localStorage.getItem('ToDoList');
    const getTodoListObj = JSON.parse(getTodoList);
    if (getTodoListObj) {
      updateItemList(getTodoListObj);
    }
  }, []);

  // localStorage setter
  useEffect(() => {
    const todoList = JSON.stringify(itemList);
    localStorage.setItem('ToDoList', todoList);
  }, [itemList]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setCurrentItem(e.target.value);
    // console.log(e.target.value);
  };

  const addItemToFront = () => {
    // add item to front
    // update the state
    // clear the input box
    updateItemList([
      { item: currentItem, completed: false, timeStamp: Date.now() },
      ...itemList,
    ]);
    setCurrentItem('');
  };
  const addItemToEnd = () => {
    // add item to front
    // update the state
    // clear the input box
    updateItemList([
      ...itemList,
      { item: currentItem, completed: false, timeStamp: Date.now() },
    ]);
    setCurrentItem('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Lama's Todos</h1>
        <div className="container">
          <input
            placeholder="Enter todos..."
            value={currentItem}
            onChange={handleInputChange}
          />
          <button onClick={addItemToFront}>Add Front</button>
          <button onClick={addItemToEnd}>Add End</button>
        </div>
        <List
          itemList={itemList}
          updateItemList={updateItemList}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      </header>
    </div>
  );
}

export default App;
