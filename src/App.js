import React from "react";
import "./App.css";
import ListOfGifs from './Components/ListOfGifs'

import { Link, Route } from "wouter";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Consiguiendo usar React </p>
        <h4>APP Buscador de GIFS con API</h4>
        <Link to="/gif/Goku">Gifs de Goku</Link>
        <Link to="/gif/Vegeta">Gifs de Vegeta</Link>
        <Link to="/gif/Gohan">Gifs de Gohan</Link>  
        <Route 
          component={ListOfGifs} 
          path="/gif/:keyword"  />
      </header>
    </div>
  );
}
