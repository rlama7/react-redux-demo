import React, { useState, useEffect } from 'react';
import './App.css';

const useFetch = (url) => {
  const [person, setPerson] = useState(null);
  // const [nextPageNumber, setNextPageNumber] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const [item] = data.results;
      // const [nextPageNumber] = item.info;
      setPerson(item);
      // setNextPageNumber(nextPageNumber + 1);
    };
    getData();
  }, [url]);
  return { person };
};

function App() {
  const [count, setCount] = useState(0);
  const { person } = useFetch('https://api.randomuser.me');
  // ?page=${pageNumber}
  console.log(person);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <hr />
      {person && (
        <div>
          {person.name.title} {person.name.first} {person.name.last}
        </div>
      )}
    </div>
  );
}

export default App;
