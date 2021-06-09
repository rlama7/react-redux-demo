import React, { useState, useEffect } from 'react';
import './App.css';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const users = await res.json();

        // console.log(res);
        console.log(users);
        // const [obj] = json;
        setResponse(users);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, [url]);
  // console.log(response);
  return { response, error };
};

function App() {
  const response = useFetch('https://jsonplaceholder.typicode.com/users', {});
  console.log(response);
  // console.log(error);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        {response.map((itemObj) => {
          return <p>{itemObj[0].name}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
