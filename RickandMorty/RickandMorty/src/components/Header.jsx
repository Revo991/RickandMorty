// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Inicio from './Inicio';
import ListaPersonajes from './ListaPersonajes';
import About from './About';

export default function Header() {
  return (
    <Router>
<header>
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <div className="boton-container bg-white bg-opacity-50 m-2 border-boton">
        <button
          className="navbar-toggler btn m-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lista-personajes" className="nav-link link">
              Personajes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link link">
              Acerca de
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</header>


      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lista-personajes" element={<ListaPersonajes />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}
