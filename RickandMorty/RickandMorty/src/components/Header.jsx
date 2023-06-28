// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Inicio from './Inicio';
import ListaPersonajes from './ListaPersonajes';
import About from './About';
import LogOut from './LogOut';
import Perfil from './Perfil';


export default function Header() {
  return (
    <Router>
<header className='fondo'>
  <nav className="navbar navbar-expand-lg p-4">
    <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon natural2"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav font-monospace">
          <li className="nav-item fondo-nav">
            <Link to="/" className="nav-link link">
              Inicio
            </Link>
          </li>
          <li className="nav-item fondo-nav">
            <Link to="/listaPersonajes" className="nav-link link">
              Personajes
            </Link>
          </li>
          <li className="nav-item fondo-nav">
            <Link to="/About" className="nav-link link">
              Nosotros
            </Link>
          </li>
          <li className="nav-item fondo-nav">
              <Link to="/Perfil" className="nav-link link">
                Perfil Usuario
              </Link>
          </li>
        </ul>
        <div className='ms-auto'>
        <ul className='navbar-nav font-monospace'>
        <li className='nav-item fondo-nav'>
          <Link to="/" className="nav-link link">
          <LogOut />
            </Link>
          </li>
          
          
        </ul>
        </div>
      </div>
    </div>
  </nav>
</header>


      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/listaPersonajes" element={<ListaPersonajes />} />
        <Route path="/About" element={<About />} />
        <Route path='/Perfil' element={<Perfil />}/>
      </Routes>
    </Router>
  );
}