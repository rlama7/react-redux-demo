import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="counter">
        <h1>Counter: {counter}</h1>
        <div className="btn">
          <div>
            <button onClick={() => dispatch(increment(5))}>+</button>
          </div>
          <div>
            <button onClick={() => dispatch(decrement(3))}>-</button>
          </div>
        </div>
      </div>
      <div>
        {isLogged ? (
          <h3>You got the Secret Information!</h3>
        ) : (
          <h3>You didn't get the secret information!</h3>
        )}
      </div>
    </div>
  );
}

export default App;
