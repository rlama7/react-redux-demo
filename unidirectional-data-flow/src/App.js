/**
 * Unidirectional-data-flow
 *
 * In react in order to change what's reflected in view/screen/dom
 * we need to change data/state
 *
 * The view/screen/dom never can change the data/state
 *
 * In the following example if we comment out setState(e.target.value)
 * then there will be no data/state being changed therefore
 * no view/screen/dom will reflect corresponding changes.
 */

import { React, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={state} onChange={handleChange} />
    </div>
  );
}

export default App;
