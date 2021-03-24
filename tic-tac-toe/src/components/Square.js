import React from 'react';

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button className={style} s onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
