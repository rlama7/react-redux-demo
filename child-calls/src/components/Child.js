// import React, { useState } from 'react';

function Child({ onChange }) {
  // parent provides a call back function onChange
  // child receives call back function onChange as a props.
  // Here we've destructred the {onChange} props

  // on input change, this event value is passed on to the
  // callback function
  // which then parent uses to update the state
  // therefore renders to the page any updated name

  return (
    <div>
      <h2>Hello From Child</h2>
      <input
        placeholder="Enter your name..."
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default Child;
