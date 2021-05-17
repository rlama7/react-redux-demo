import { useState } from 'react';
import List from './components/List';

import './App.css';

function App() {
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const handleChange = (e) => setCurrentItem(e.target.value);

  const addItemList = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now() }]);
    // clear items from input box after update
    setCurrentItem('');
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        placeholder="Enter your list..."
        type="text"
        onChange={handleChange}
        value={currentItem}
      />
      <button onClick={addItemList}>+</button>
      <div>
        <List itemList={itemList} updateItemList={setItemList} />
      </div>
    </div>
  );
}

export default App;
