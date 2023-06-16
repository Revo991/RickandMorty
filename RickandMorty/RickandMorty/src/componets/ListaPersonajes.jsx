// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import CardPersonajes from './CardPersonajes';
import axios from 'axios';

export default function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [filtro, setFiltro] = useState('');
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

  const change = (e) => {
    setFiltro(e.target.value);
  };

  const searchPersonaje = () => {
    const filteredPersonajes = personajesOriginales.filter((personaje) =>
      personaje.name.toLowerCase().includes(filtro.toLowerCase()) ||
      String(personaje.id) === filtro ||
      String(personaje.species) === filtro 
      // eslint-disable-next-line no-undef
      
    );
    setPersonajes(filteredPersonajes);
  };
  

  const resetPersonajes = () => {
    setFiltro('');
    setPersonajes(personajesOriginales);
  };

  return (
    <div>
      <div>
        <input type="text" value={filtro} onChange={change} placeholder="Buscar personaje" />
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
    </div>
  );
}
