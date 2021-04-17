/**
 * importance of keys in react list
 *
 * when react tries to change/update DOM it attempts to do so
 * the most efficient way. This is where the react's reconciliation/diff
 * algorithm comes to play.
 *
 * React compares the current DOM tree and the new tree that has changed. and
 * when it tries to commit the changes it tries to do with the least amount of
 * paints to the DOM.
 *
 * The reason you don't want to use index as the key but use something unique is
 * because say you change your array data. Then if you remove one element, the index
 * will shift. So the react will think umm....I see the index has changed so
 * i'll need to re-paint all the array element even though only the one
 * element has been removed and rest elment has not changed.
 *
 * This is why the index should never be used as the key for list elements in React.
 * React is not really looking at the data but the key for any state change. Therefore,
 * we need to provide react with unique identifier and not the key which
 * could change if we mutate the list.
 *
 */
import React, { useState } from 'react';
import './App.css';

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    number: i,
    id: 'id' + i,
  });
}

function Item(props) {
  return <h1 onClick={() => props.delete(props.id)}>{props.number}</h1>;
}

function App() {
  const [state, setState] = useState(data);

  function deleteNumber(n) {
    const newData = state.filter((num) => num.id !== n);
    setState(newData);
  }
  return (
    <div className="App">
      {state.map((n, i) => {
        return <Item delete={deleteNumber} key={n.id} nummber={n.number} />;
      })}
    </div>
  );
}

export default App;
