import React from "react";
import "./App.css";
import Home from './Pages/Home'
import SearchResults from './Pages/SearchResults'
import Detail from './Pages/Detail'
import StaticContext from './Context/StaticContext'
import {GifsContextProvider} from './Context/GifsContext'


import ListOfGifs from './Components/ListOfGifs'

import { Link, Route } from "wouter";

export default function App() {
  return (
    <StaticContext.Provider value={ { name: 'miduDev', suscribeteAlCanal: true  } }>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h4>APP Buscador de GIFS con API</h4>
            <img src="https://imgs.search.brave.com/GOegr92r_v6i0kersM3n20eOh2VAMtTXqMcWiNLhBWA/rs:fit:320:320:1/g:ce/aHR0cDovL3BhMS5u/YXJ2aWkuY29tLzY4/MTIvMTkxMDFjYjc0/M2FmMDk5MTQ3MTll/ZjE2NTVkOTI2NGNk/ODdlNGVmN18wMC5n/aWY.gif" alt="Goku Feliz" />
          </Link>
          <GifsContextProvider.Provider value={}>
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
            <Route 
              component={ListOfGifs}
              path="/gif/:keyword"  />
          </GifsContextProvider.Provider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
