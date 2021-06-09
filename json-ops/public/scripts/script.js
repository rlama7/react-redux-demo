const fetchData = async () => {
  try {
    console.log('Initiating fetch...');
    const res = await fetch(url);
    const record = await res.json();
    console.log(record.data);

    const nameList = record.data
      .map((user) => {
        return `
          <div class="user">
            <p><img src=${user.avatar} alt=${user.first_name} /></p>
            <p>${user.first_name} ${user.last_name}</p>
            <p>${user.email}</p>
            
            <div class="connect">
              <button>Connect with Me</button>
            </div>
            
          </div>
          
        `;
      })
      .join('');

    // console.log(nameList);

    const [email, first_name, last_name] = record.data;
    console.log(email, first_name, last_name);

    document.getElementById('app').insertAdjacentHTML('afterbegin', nameList);
  } catch (error) {
    throw error;
  }
};

const url = 'https://reqres.in/api/users?page=1';
fetchData(url);
