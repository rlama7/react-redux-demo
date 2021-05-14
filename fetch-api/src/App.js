import React, { useState } from 'react';
import DataFetch from './components/DataFetch';
import FetchRandomUser from './components/FetcthRandomUser';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 2);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <DataFetch />
      <FetchRandomUser />
      <hr />

      <h1>Hello From App</h1>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment + </button>
      <button onClick={decrement}>Decrement - </button>
      <hr />
    </div>
  );
}

export default App;
