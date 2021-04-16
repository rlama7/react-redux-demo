import React, { useState } from 'react';

function detectHover(Component) {
  return function (props) {
    const [hovered, setHovered] = useState(false);
    // console.log(props);
    return (
      <div
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Component hovered={hovered} {...props} />
      </div>
    );
  };
}

export default detectHover;
