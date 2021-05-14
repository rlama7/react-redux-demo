import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{num}</h2>
      <button onClick={increment}>Increment + </button>
      <button onClick={decrement}>Decrement - </button>
    </div>
  );
}

export default App;
