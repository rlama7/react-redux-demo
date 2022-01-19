import React, { useState, useEffect } from 'react';

import { DataCall } from './DataCall';

import './App.css';

export const App = () => {
  const [resourceType, setResourceType] = useState('users');
  const [dataItem, setDataItem] = useState([]);

  const getUsers = () => {
    setResourceType('users');
  };
  const getPosts = () => {
    setResourceType('posts');
  };
  const getComments = () => {
    setResourceType('comments');
  };

  const getData = async (url) => {
    const result = await fetch(url);
    const resultData = await result.json();
    setDataItem(resultData);
  };

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/${resourceType}`;
    getData(url);
    console.log(getData(url));
  }, [resourceType]);

  return (
    <div className="App">
      <h1>Fetch Data</h1>
      <h3>{resourceType}</h3>
      <button onClick={getUsers}>Users</button>
      <button onClick={getPosts}>Posts</button>
      <button onClick={getComments}>Comments</button>
      <div>
        {dataItem.map((users) => {
          return <div key={resourceType.id}>{resourceType && users.name}</div>;
        })}
      </div>
      <hr />
      <DataCall />
    </div>
  );
};
