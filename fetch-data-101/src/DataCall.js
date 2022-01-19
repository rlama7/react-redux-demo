import React, { useState, useEffect } from 'react';

export const DataCall = () => {
  const [allData, setAllData] = useState([]);

  const getAllData = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums');

    const process = (prom) => {
      prom.then((data) => {
        setAllData(data);
      });
    };

    Promise.all([users, posts, albums])
      .then((files) => {
        files.forEach((file) => {
          process(file.json());
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getAllData();
    console.log(allData);
  }, []);
  return (
    <div>
      <h1>Multiple Data Call</h1>
    </div>
  );
};
