import React, { useContext } from 'react';

function GrandChild(props) {
  const Context = React.createContext();
  const value = useContext(Context);

  return (
    <div>
      <ul>
        {value.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default GrandChild;
