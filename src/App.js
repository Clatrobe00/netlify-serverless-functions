import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [data, setData] = useState('');

  const fetchData = async () => {
    const results = Axios.get('/.netlify/functions/helloWorld');
    console.log(results);
    setData('Got it!');
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
