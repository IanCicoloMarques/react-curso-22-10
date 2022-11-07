import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
     
      <textarea name="inputText" type="text" placeholder="Digite aí" rows={15} 
          value={inputText} onChange={(e) => setInputText(e.target.value)}> 
      </textarea>
      <div className="mirror">
        <h1>Código</h1>
        {inputText.toUpperCase()}
      </div>
    </div >
  );
}

export default App;
