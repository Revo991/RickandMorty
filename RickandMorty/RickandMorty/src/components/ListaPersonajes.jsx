// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import CardPersonajes from './CardPersonajes';
import logo from '../assets/img/logo.png'

export default function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [estadoFiltro, setEstadoFiltro] = useState('');
  const [personajesOriginales, setPersonajesOriginales] = useState([]);

  const getPersonajes = async () => {
    try {
      let allPersonajes = [];
      let page = 1;

      while (allPersonajes.length < 826) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = response.data;
        allPersonajes = allPersonajes.concat(data.results);
        page++;
      }

      setPersonajes(allPersonajes);
      setPersonajesOriginales(allPersonajes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  const handleNombreChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleEstadoChange = (e) => {
    setEstadoFiltro(e.target.value);
  };

  const searchPersonaje = () => {
    const filteredPersonajes = personajesOriginales.filter((personaje) => {
      const nombreMatch =
        personaje.name.toLowerCase().includes(filtro.toLowerCase()) ||
        String(personaje.id) === filtro ||
        String(personaje.species) === filtro ||
        String(personaje.location.name) === filtro;

      const estadoMatch =
        estadoFiltro === '' ? true : estadoFiltro === 'Unknown' ? personaje.status === 'unknown' : personaje.status === estadoFiltro;

      return nombreMatch && estadoMatch;
    });

    if (filtro === '' && estadoFiltro === '') {
      setPersonajes(personajesOriginales);
    } else {
      setPersonajes(filteredPersonajes);
    }
  };

  const resetPersonajes = () => {
    setFiltro('');
    setEstadoFiltro('');
    setPersonajes(personajesOriginales);
  };

  const mostrarSinResultados = personajes.length === 0 && filtro !== '';

  return (
    <div className="fondo">
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <img className='logo-psj' src={logo} alt="logo"/>
        </div>
      <div className='py-4'>
        <h2 className='text-white fs-2 fw-semibold font-monospace'>Todos los personajes</h2>
      </div>

      <div>
      <div className=' d-flex justify-content-around '>
        <div>
        <label className='text-white fs-4 font-monospace ' htmlFor="estadoFiltro">Estado:</label>
        <select className='border border-success rounded-pill bg-success bg-opacity-60 text-white font-monospace' id="estadoFiltro" value={estadoFiltro} onChange={handleEstadoChange}>
          <option value="">Todos</option>
          <option value="Alive">Vivos</option>
          <option value="Dead">Muertos</option>
          <option value="Unknown">Desconocido</option>
        </select>
        </div>
        <div>
        <input className='border rounded-pill bg-white font-monospace' type="text" value={filtro} onChange={handleNombreChange} placeholder="Buscar personaje" />
        <button className="btn btn-outline-info rounded-pill ms-3"  onClick={searchPersonaje}>Buscar</button>
        <button className="btn btn-outline-info rounded-pill ms-2" onClick={resetPersonajes}>Restablecer</button>
      </div>  
      </div>
      </div>

      <div className="container">
        <div className='row gx-5 '>
        {personajes.map((personaje) => (
          <div className="col-10 col-md-6 col-lg-4" key={personaje.id}>
            <CardPersonajes
              id={personaje.id}
              name={personaje.name}
              type={personaje.type}
              specie={personaje.species}
              image={personaje.image}
              status={personaje.status}
              gender={personaje.gender}
              origin={personaje.origin.name}
              location={personaje.location.name}
              episodes={personaje.episode.length > 0 ? personaje.episode.length : 'Desconocido'}
            />
          </div>
        ))}
      </div >
        </div>
      <div>
      {mostrarSinResultados && <div className='text-white p-4 '>No se encontraron resultados.</div>}
      </div>
      </div>
    </div>
  );
}
