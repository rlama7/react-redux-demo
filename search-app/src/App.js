import { useState } from 'react';
import './App.css';
import JSONDATA from './data/MOCK_DATA.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setSearchTerm(e.target.value);
  return (
    <div className="App">
      <input placeholder="Search..." type="text" onChange={handleChange} />
      <ul>
        {JSONDATA.filter((val) => {
          if (searchTerm === '') {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((person, index) => {
          return (
            <li key={person.social_security}>
              {person.first_name} {person.last_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
