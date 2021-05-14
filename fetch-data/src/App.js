import React, { useState, useEffect } from 'react';
import './App.css';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }
    fetchData();
  }, []);

  return { data, loading };
};

function App() {
  const [num, setNum] = useState(0);
  const { data, loading } = useFetch('https://api.randomuser.me/');

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);
  // const getNewUser = () => setData(data);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{num}</h2>
      <button onClick={increment}>Increment + </button>
      <button onClick={decrement}>Decrement - </button>
      <hr />

      {/*<button onClick={getNewUser}>Click Me</button>*/}
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h3>
            User: {data.name.first} {data.name.last}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
