/**
 * context-api use to solve props drilling
 *
 * the goal here is to render animal list set in the parent App Component
 *
 * First the animal list is passed down from App Component to Child Component as props
 * Next the Child component receives the animal list in the form of props and
 * further passes down to the Grandchild.
 *
 * Finally, the grandchild maps through the list and renders it.
 * In this case, the props travel from parent App Component --> Child Component --> Grandchild Component
 * because we can pass the props only at a one level deeper that is from parent component
 * to child component and NOT from the parent to the grandchild commponent.
 *
 * This is what is known as props drilling which context api tries to solve.
 *
 * We'll make use of useContext hook to avoid app drilling and avoid having to pass
 * props from Child Component altogether. In words we can directly pass the props
 * from the parent App Component to the Child Component.
 *
 */
import React, { useState, useContext } from 'react';

import './App.css';

const Context = React.createContext();

function Child() {
  return (
    <div>
      <GrandChild />
    </div>
  );
}

function GrandChild(props) {
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

function App() {
  const [state, setState] = useState(['ant', 'bat', 'cat']);

  return (
    <Context.Provider value={state}>
      <div className="App">
        <Child />
      </div>
    </Context.Provider>
  );
}

export default App;
