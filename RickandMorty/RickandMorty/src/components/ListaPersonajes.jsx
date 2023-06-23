
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import CardPersonajes from './CardPersonajes';

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
    <div>
      <div>
        <label htmlFor="estadoFiltro">Estado:</label>
        <select id="estadoFiltro" value={estadoFiltro} onChange={handleEstadoChange}>
          <option value="">Todos</option>
          <option value="Alive">Vivos</option>
          <option value="Dead">Muertos</option>
          <option value="Unknown">Desconocido</option>
        </select>
      </div>

      <div>
        <input type="text" value={filtro} onChange={handleNombreChange} placeholder="Buscar personaje" />
        <button onClick={searchPersonaje}>Buscar</button>
        <button onClick={resetPersonajes}>Restablecer</button>
      </div>
      <div className="row justify-content-center">
        {personajes.map((personaje) => (
          <div className="col-md-4" key={personaje.id}>
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
      </div>
      {mostrarSinResultados && <div>No se encontraron resultados.</div>}
    </div>
  );
}
