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
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4 fondo-card rounded-5 animacion" style={{ width: '23rem' }}>
            <div className='m-3 text-center '>
            <img src={image} className="w-75 border border-5 border-success rounded-circle" alt={name} />
            </div>
            <div className="card-body card-text">
              <h5 className="fs-3 container">{name}</h5>
              <div className="card-content">
                <div className='container m-3'>
                <p className="card-text">
                  <strong>Id:</strong> {id}
                </p>
                <p className="card-text ">
                  <strong>Origin:</strong> {origin}
                </p>
                <p className="card-text">
                  <strong>Specie:</strong> {specie}
                </p>
                <p className="card-text">
                  <strong>Status:</strong>{' '}
                  <span style={{ color: getStatusColor() }}>{status}</span>
                </p>
                <p className="card-text">
                  <strong>Gender:</strong> {gender}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {location}
                </p>
                <p className="card-text">
                  <strong>Episodes:</strong> {episodes}
                </p>
                <p className="card-text">
                  <strong>Type:</strong> {type}
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
