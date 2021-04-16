/**
 * In the case of uncontrolled component,
 * input is NOT tied to the state data.
 *
 * In other words input is NOT controlled by the state data.
 */
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef();
  const handleClick = () => alert(inputRef.current.value); // get the value of the dome element
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UncontrolledComponent;
