const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

const url = 'https://reqres.in/api/users?page=1';
console.log(fetchData(url));
