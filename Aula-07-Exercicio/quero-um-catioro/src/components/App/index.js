import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [getResponse, setGetResponse] = useState(null);
  const [dogResponse, setDogResponse] = useState(null);

  useEffect(() => {
    const promise = axios.get('https://dog.ceo/api/breeds/image/random');
    promise.then((response) => {
      console.log("getResponse = ", response.data.message)
      setDogResponse(response.data.message)
    });
    promise.catch(e => console.log("erro", e));
  }, []);

  function buildImage() {
    if (dogResponse === null) return <h1>Carregando...</h1>
    if (dogResponse.length === 0) return <h1>Sem catioros para você</h1>

    return (
        <img src={dogResponse}></img>
      )
  }

  
  
  return (
    <div>
      <div className="view">
      <div className="image">
        {buildImage()}
      </div>
      </div>
    </div>
  );
}

export default App;
