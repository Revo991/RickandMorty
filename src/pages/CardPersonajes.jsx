/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function CardPersonajes({
  id,
  origin,
  image,
  name,
  specie,
  status,
  gender,
  location,
  episodes,
  type
}) {
  const getStatusColor = () => {
    if (status === 'Alive') {
      return 'green';
    } else if (status === 'Dead') {
      return 'red';
    }
    return 'black';
  };

  return (
    <div>
      <div className='contenedor-img'>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>
      <table className='table'>
        <tbody>
          <tr>
            <td className='title'>Id</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td className='title'>origin</td>
            <td>{origin}</td>
          </tr>
          <tr>
            <td className='title'>specie</td>
            <td>{specie}</td>
          </tr>
          <tr>
            <td className='title'>status</td>
            <td style={{ color: getStatusColor() }}>{status}</td>
          </tr>
          <tr>
            <td className='title'>gender</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td className='title'>location</td>
            <td>{location}</td>
          </tr>
          <tr>
            <td className='title'>Episodes</td>
            <td>{episodes}</td>
          </tr>
          <tr>
            <td className='title'> Type</td>
            <td>{type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
