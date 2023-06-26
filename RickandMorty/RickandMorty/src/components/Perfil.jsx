// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Perfil() {
  const { isAuthenticated, user } = useAuth0();
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const storedFechaNacimiento = localStorage.getItem('fechaNacimiento');
    const storedPersonaje = JSON.parse(localStorage.getItem('personaje'));

    if (storedFechaNacimiento) {
      setFechaNacimiento(storedFechaNacimiento);
    }

    if (storedPersonaje) {
      setPersonaje(storedPersonaje);
    }
  }, []);

  const obtenerPersonajeAleatorio = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      const totalPages = data.info.pages;
      const randomPage = Math.floor(Math.random() * totalPages) + 1;
      const randomCharacter = await obtenerPersonajePorPagina(randomPage);
      setPersonaje(randomCharacter);
      localStorage.setItem('personaje', JSON.stringify(randomCharacter));
    } catch (error) {
      console.error('Error al obtener el personaje aleatorio:', error);
    }
  };

  const obtenerPersonajePorPagina = async (page) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      const characters = data.results;
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters[randomIndex];
    } catch (error) {
      console.error('Error al obtener el personaje por página:', error);
    }
  };

  const handleFechaNacimientoChange = (e) => {
    setFechaNacimiento(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    obtenerPersonajeAleatorio();
    localStorage.setItem('fechaNacimiento', fechaNacimiento);
  };

  return (
    isAuthenticated && (
      <main className='fondo p-5  '>
         <div class="container fs-3  ">
            <div class="row text-white ">
              <div class=" col-md-5 col-lg-6">
                <h2 >Usuario: {user.name}</h2>
                <p>Correo: {user.email}</p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                  <input
                    className='bg-info text-white font-monospace'
                    type="date"
                    id="fechaNacimiento"
                    value={fechaNacimiento}
                    onChange={handleFechaNacimientoChange}
                  />
                  {fechaNacimiento && (
                    <div className='p-3'>
                      <button className='btn btn-outline-info' type="submit">Ver Personaje</button>
                      <p className=''>Fecha de nacimiento seleccionada: {fechaNacimiento}</p>
                    </div>
                  )}
                </form>
              </div>
              <div class=" col-md-5 col-lg-6">
                {personaje && (
                    <div>
                      <h3>Según tu fecha de nacimiento, eres:</h3>
                      <img src={personaje.image} alt={personaje.name} />
                      <p>Nombre: {personaje.name}</p>
                      <p>Especie: {personaje.species}</p>
                      <p>Género: {personaje.gender}</p>
                    </div>
                  )}
              </div>
            </div>
          </div>
      </main>
    )
  );
}
