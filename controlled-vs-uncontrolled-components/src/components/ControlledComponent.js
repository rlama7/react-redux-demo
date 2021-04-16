/**
 * In the case of controlled component,
 * input is bound to the state data.
 *
 * In other words input is controlled by the state data.
 */
import React, { useState } from 'react';

function ControlledComponent() {
  const [state, setState] = useState('');

  const handleChange = (e) => setState(e.target.value);

  const handleClick = () => alert(state);

  return (
    <div>
      <input type="text" value={state} onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ControlledComponent;
