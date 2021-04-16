/**
 * lift-state-up
 * If two or more Components are relying on the same data then
 * in order to sync that the dependent Components are receiving the
 * same date we can make these two or more dependent Components a Sibling
 * under the same parent.
 *
 * In the following example, we've two Components: List and ItemCount both
 * relying on items data
 * Since List and ItemCount Components are Sibling under parent App Component,
 * we can share the same data between them.
 *
 * This process of making components that are dependent on the same data sibling
 * under one parent in order to keep the shared data in sync, is called the lift-state-up.
 *
 * Visually,
 *          App
 *            |> List
 *            |> ItemCount
 */
import React, { useState } from 'react';
import List from './components/List';
import ItemCount from './components/ItemCount';
import './App.css';

function App() {
  const [items, setItems] = useState([
    'apple',
    'banana',
    'cherry',
    'mango',
    'orange',
  ]);
  return (
    <div className="App">
      <List items={items} />
      <ItemCount count={items.length} />
    </div>
  );
}

export default App;
