/**
 * useRef()
 * Every JSX element has the ref accessible use useRef()
 *
 * the purpose of useRef() is so that you can directly manipulate the
 * actual DOM instead of the virtual DOM that react uses.
 *
 * The goal here is to set focus to the input box.
 * Here we need to first get hold of the underlying node in the real DOM
 * that we want to set focus then apply current.focus()
 * to set the focus()
 *
 */
import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
