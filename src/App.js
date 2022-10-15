import React from "react";
import "./App.css";
import Home from './Pages/Home'
import SearchResults from './Pages/SearchResults'
import Detail from './Pages/Detail'

import ListOfGifs from './Components/ListOfGifs/ListOfGifs'

import { Link, Route } from "wouter";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h4>APP Buscador de GIFS con API</h4>
          <p>Consiguiendo usar React </p>
        </Link>
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route 
          component={Detail}
          path="/gif/:id"
        />
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
