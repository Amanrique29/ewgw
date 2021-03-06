import React from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Test from './test';
import Resultados from './resultados';
import Header from './header';
import Inicio from './Inicio'
import Aboutus from './nosotros';
import SobreNosotros from './nosotros';
import Buscador from './buscador';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route path="/test">     <Test /></Route>
        <Route path="/buscador">
          <Buscador />
        </Route>
        <Route path="/resultados">
          <Resultados />
        </Route>
        <Route path="/aboutus">
          <SobreNosotros />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
