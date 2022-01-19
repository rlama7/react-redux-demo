import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  // const [resourceType, setResourceType] = useState('');
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let controller = new AbortController();

    const loadData = async () => {
      try {
        // const url = `https://jsonplaceholder.typicode.com/photos`;
        // https://reqres.in/api/users/1?delay=5
        // https://reqres.in/api/users/2?delay=3
        // https://reqres.in/api/users/3?delay=1

        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        console.log('Fetch Cancel: got response');
        // const [user_name] = result.data.user_name;
        console.log(data);
        setData(data);
        // console.log(dataObj);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('FetchCancel: caught cancel');
        } else {
          // any other server error
          throw error;
        }
      }
    };
    loadData();

    // clean up
    return () => {
      console.log('FetchCancel: unmounting');
      controller.abort();
    };
  }, [url]);

  const getUser1 = () => setUrl('https://reqres.in/api/users/1?delay=5');
  const getUser2 = () => setUrl('https://reqres.in/api/users/2?delay=3');
  const getUser3 = () => setUrl('https://reqres.in/api/users/3?delay=1');
  // console.log(data);
  return (
    <div className="App">
      <h1>How to Make Multiple Api Calls and Cancel</h1>
      <div>
        <button onClick={getUser1}>User1-5</button>
        <button onClick={getUser2}>User2-3</button>
        <button onClick={getUser3}>User3-1</button>
      </div>
      <hr />
      <h1>Hi</h1>
      <div>{data && `${data.data.first_name} ${data.data.last_name}`}</div>
    </div>
  );
}

export default App;
