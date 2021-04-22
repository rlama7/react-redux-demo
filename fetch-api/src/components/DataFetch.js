/**
 * DataFetch - Fetch Data from the REST API using fetch
 * url: https://jsonplaceholder.typicode.com/users
 * In the future lookout for React Suspense
 * which is an experimental feature to fetch
 * data and any other asynchronous events
 *
 */
import React, { useState, useEffect } from 'react';

// custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // similar to componentDidMount and componentDidUpdate
  // renders only one time unless the dependency [] list changes
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      // const [username] = data[0];
      // setUser(item);
      // const item = data.map((item, index) => item);
      console.log(data);
    };
    setData(getData());
    setLoading(false);
  }, []);

  return { data, loading };
};

function DataFetch() {
  const [counter, setCounter] = useState(0);

  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <h2>Hello From Data Fetch</h2>
      <p>Counter: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <hr />

      {loading ? <div>loading...</div> : <div>{data.name}</div>}
    </div>
  );
}
export default DataFetch;
