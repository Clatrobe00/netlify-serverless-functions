import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Form from './components/Form';

function App() {

  const [data, setData] = useState('');

  const fetchData = async () => {
    const res = await Axios.get('/.netlify/functions/post');
    setData(res.data.newPost?.title);
    const arr = Object.values(res.data)
    console.log(arr);
    setData(arr);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* {data} */}
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;
