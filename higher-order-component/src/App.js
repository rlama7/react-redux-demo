/**
 * Higher order component is a function that recieves
 * Component as an argumet and returns the augmented
 * Component.
 *
 * In the following example, detechHover could be reusable function
 * in multiple scenarios. In such case, we can use Higher order function
 * approach to share the loic across multiple components without having
 * to rewrite the same fuction again.
 */
import React from 'react';
import './App.css';

import detectHover from './components/detectHover';

function App(props) {
  const style = {
    backgroundColor: props.hovered ? 'blue' : '',
  };
  return (
    <div style={style} className="App">
      <div>
        <h1>Hello World!</h1>
        <h3>Be be prepared to me amazed!</h3>
      </div>
    </div>
  );
}

export default detectHover(App);
