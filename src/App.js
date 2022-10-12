import React, {useState} from "react";
import "./App.css";
import ListOfGifs from './Components/ListOfGifs'

export default function App() {
  const [keyword, setKeyword] = useState(['Power+rangers'])

  return (
    <div className="App">
      <header className="App-header">
        <p>Consiguiendo usar React </p>
        <h4>APP Buscador de GIFS con API</h4>
        <button onClick={() => setKeyword('Freezer+golden') }>CAMBIAR STADO</button>
        <ListOfGifs keyword={keyword}/>
      </header>
    </div>
  );
}
