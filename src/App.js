import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Form from './components/Form';

function App() {

  const [userData, setData] = useState([{name: "Charlie", age: 20, color: "green"}]);

  const fetchData = async () => {
    const res = await Axios.get('/.netlify/functions/post');
    const arr = Object.values(res.data)
    setData(arr);
  }

  console.log(userData);

  useEffect(() => {
    fetchData()
  }, [])

  const dataHandler = userData.map((u) => {
      return (
        <div>
          <p>{u.name}</p>
          <p>{u.age}</p>
          <p>{u.color}</p>
        </div>
      )
    });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {dataHandler}
        </div>
        <Form />
      </header>
    </div>
  );
}

export default App;
