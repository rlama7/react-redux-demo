/**
 * useEffect Hook
 * it acts as: ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount
 *
 *
 */

/**
 * useEffect hook acting as ComponentDidMount/ComponentWillUnmount
 *  
import React, { useEffect } from 'react';
import './App.css';

function App() {
  function handleClick() {
    alert('I have been clicked');
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener(handleClick);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Prepared to be Amazed!</h3>
    </div>
  );
}

export default App;

*/

/**
 *
 * useEffect hook acting as ComponentDidUpdate
 */

// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [number, setNumber] = useState(0);

//   useEffect(() => {}, [number]);

//   const increment = () => setNumber((n) => n + 1);
//   const decrement = () => setNumber((n) => n - 2);

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <h3>Prepared to be Amazed!</h3>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <h1>Number: {number}</h1>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber((n) => n + 1);
  const decrement = () => setNumber((n) => n - 1);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Be prepared to see some magic!</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>Number : {number}</h1>
    </div>
  );
}
export default App;
