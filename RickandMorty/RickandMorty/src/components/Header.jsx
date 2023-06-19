// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
      <div className="boton-container bg-white bg-opacity-50 m-2 border-boton">
          <button className="navbar-toggler btn m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
           </button>
      </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/comodin" className="nav-link link">Comodin</Link>
            </li>
            <li className="nav-item">
              <Link to="/lista-personajes" className="nav-link link">personajes</Link>
            </li>
            <li className="nav-item">
              <Link to="/card-personajes" className="nav-link link">Cards</Link>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
