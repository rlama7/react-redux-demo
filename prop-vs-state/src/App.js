/**
 * state --> when component defines data locally. The component that
 * defined state can mutate it.
 *
 * props --> is the same data that is passed down to another component. props
 * can't be mutated.
 *
 * In the following example App component defined value state and also has a
 * way to mutate it using setValue.
 *
 * Child component is recreiving the value as a props arguments. The receiver here
 * Child component calls the same piece of data (value) props. Also the Child
 * component can mutate since it doesn't have a method to mutate props.
 *
 * The fundamental difference between state and props then would be that the state
 * can be mutated while props can not be mutated.
 * In order for Child component to mutate props it has request permission to the
 * component that supplied with the value at first and the Component that supplied
 * with the value has to have method that can mutate the value.
 */
import React, { useState } from 'react';
import './App.css';

function Child(props) {
  return <GrandChild value={props.value} />;
}

function GrandChild(props) {
  return <h1>{props.value}</h1>;
}

function App() {
  const [value, setValue] = useState(1);
  return (
    <div className="App">
      <Child value={value} />
    </div>
  );
}

export default App;
