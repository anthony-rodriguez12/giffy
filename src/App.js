import React from "react";
import "./App.css";
import ListOfGifs from './Components/ListOfGifs'

import { Route } from "wouter";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Consiguiendo usar React </p>
        <h4>APP Buscador de GIFS con API</h4>
        <Route 
          component={ListOfGifs} 
          path="/gif/:keyword"  />

        {//<ListOfGifs keyword={keyword}/>
        }
      </header>
    </div>
  );
}
