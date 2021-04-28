import './App.css';

function App() {
  const handleChange = (e) => console.log(e.target.value);
  return (
    <div className="App">
      <hr />
      <input placeholder="Search..." type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
