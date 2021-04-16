/**
 * React Hooks
 * In a nut shell react hooks allows function component to tap into
 * the react life cycles method.
 * Prior to react 16 we had to use class based component in order to be
 * able to use state and life cycle methods. However with the introduction
 * of react hooks we can conveniently use state and life cycle methods
 * without having to use a class based components.
 *
 * Custom hooks
 * useHook provides reference that is what will be used
 *
 */
import React, { useRef, useState, useEffect } from 'react';
import './App.css';

import useHoverCustomHook from './components/useHoverCustomHook';

function App() {
  const [hoverRef, hovered] = useHoverCustomHook();

  const style = {
    backgroundColor: 'hovered' ? 'blue' : 'green',
  };
  return (
    <div ref={hoverRef} style={style} className="App">
      <h1>Hello World!</h1>
      <h3>Be prepared to amazed! Move your mouse to see some magic happen!</h3>
    </div>
  );
}

export default App;
