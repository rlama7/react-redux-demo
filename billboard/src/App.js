import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentLetter, setCurrentLetter] = useState('');
  const [letter, setLetter] = useState('');

  // hello
  const handleInputChange = (e) => {
    e.preventDefault();
    setCurrentLetter(e.target.value);
    console.log(e.target.value);
  };

  const displayLetter = () => {
    let timeId;
    for (let i = 0; i < currentLetter.length; i++) {
      setLetter(currentLetter[i]);
      timeId = setInterval(() => console.log(letter), 2000);
    }
    timeId.clear();
  };

  const handleClick = () => {
    // setInterval(displayLetter(), 2000);
    displayLetter();
  };

  return (
    <div className="App">
      <div>
        <input
          placeholder="Enter text..."
          value={currentLetter}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Click Me</button>
      </div>
      <hr />
      <div>{letter}</div>
    </div>
  );
}

export default App;
