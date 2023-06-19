import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClickGet = () => {
    axios
      .get(url)
      .then((response) => {
        setResponse(JSON.stringify(response.data));
      })
      .catch((error) => {
        setResponse(JSON.stringify(error));
      });
  };

  const handleClickPost = () => {
    axios
      .post(url, { code: "11" })
      .then((response) => {
        setResponse(JSON.stringify(response));
      })
      .catch((error) => {
        setResponse(JSON.stringify(error));
      });
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter base URL"
        className="request-input"
        onChange={(event) => {
          handleInputChange(event);
        }}
      />
      <button className="request-button" onClick={handleClickGet}>
        Make Request
      </button>
      <p>{response}</p>
    </div>
  );
}

export default App;
