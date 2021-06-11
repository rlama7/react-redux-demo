import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);

  const increment = () => setData(data + 1);
  const decrement = () => setData(data - 1);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{data}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
