// https://randomuser.me/api
import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // the empty dependency array in the useEffect means
  // that the useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return { response, error, isLoading };
};

function FetchRandomUser() {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [users, setUsers] = useState([]);

  const { response, error, isLoading } = useFetch('https://randomuser.me/api');
  console.log(response, error, isLoading);
  //   if (!res.response) {
  //     return <div>Loading...</div>;
  //   }
  // const
  return (
    <div>
      <ul>
        {response.map((user) => {
          console.log(user);
          return <li>Hi {user.gender}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchRandomUser;
