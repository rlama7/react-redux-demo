import React, { useState } from 'react';

function DetectHover(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.render(hovered)}
    </div>
  );
}

export default DetectHover;
