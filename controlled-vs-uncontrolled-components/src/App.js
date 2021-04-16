import React, { useState } from 'react';
import ControlledComponent from './components/ControlledComponent';
import UncontrolledComponent from './components/UncontrolledComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
}

export default App;
