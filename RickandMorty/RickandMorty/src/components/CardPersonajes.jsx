/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function CardPersonajes({
  // eslint-disable-next-line react/prop-types
  id,
  // eslint-disable-next-line react/prop-types
  origin,
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  specie,
  // eslint-disable-next-line react/prop-types
  status,
  // eslint-disable-next-line react/prop-types
  gender,
  // eslint-disable-next-line react/prop-types
  location,
  // eslint-disable-next-line react/prop-types
  episodes,
  // eslint-disable-next-line react/prop-types, no-unused-vars
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
    <div className="container my-3">
          <div className="card mb-5 fondo-card rounded-5 animacion" style={{ width: '19rem' }}>
            <div className='m-3 text-center '>
            <img src={image} className="w-75 border border-5 border-success rounded-circle" alt={name} />
            </div>
            <div className="card-body card-text">
              <h5 className="fs-5 container fw-bold">{name}</h5>
              <div className="card-content">
                <div className='container m-3'>
                <p className="card-text">
                  <strong>Id:</strong> {id}
                </p>
                <p className="card-text fs-6">
                  <strong className='fs-5'>Origin:</strong> <br/>{origin}
                </p>
                <p className="card-text">
                  <strong className='fs-5'>Specie:</strong> {specie}
                </p>
                <p className="card-text">
                  <strong className='fs-5'>Status:</strong>{' '}
                  <span style={{ color: getStatusColor() }}>{status}</span>
                </p>
                <p className="card-text">
                  <strong className='fs-5'>Gender:</strong> {gender}
                </p>
                <p className="card-text fs-6">
                  <strong className='fs-5'>Location:</strong> <br/>{location}
                </p>
                
                <p className="card-text">
                  <strong className='fs-5'>Episodes:</strong> {episodes}
                </p>
                <p className="card-text fs-6">
                  <strong className='fs-5'>Type:</strong>{type}
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
