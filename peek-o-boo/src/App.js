import { useState } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState('');

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleChange = (e) => {
    setUpdate(e.target.value);
  };

  return (
    <div className="App">
      <div className={toggle ? null : 'toggle'}>
        <h1>Hello World!</h1>
        <div>{update}</div>
        <input placeholder="Type here.." type="text" onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
