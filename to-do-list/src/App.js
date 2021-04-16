import './App.css';
import { useState } from 'react';
import List from './components/List';

function App() {
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem(' ');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <h3>To Do List</h3>
          <div className="Input-wrapper">
            <input
              placeholder="Add item..."
              value={currentItem}
              onChange={onChangeHandler}
            />
            <button onClick={addItemList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
