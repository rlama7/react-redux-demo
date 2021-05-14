import { useState } from 'react';
import Child from './components/Child';

import './App.css';

function App() {
  // parent provides callback function onChange to the child
  // child uses this callback function to provide value to the
  // parent
  // then parent takes this value and uses to update the setName set
  // name gets updated therefore the UI rerenders when the value changes.

  const [name, setName] = useState('');

  return (
    <div className="App">
      <h3>
        Parent greets - Hi <strong>{name} </strong>
      </h3>

      <hr />
      <Child onChange={(value) => setName(value)} />
    </div>
  );
}

export default App;
