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
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card mb-4 h-100 custom-card" style={{ width: '23rem' }}>
            <img src={image} className="card-img-top card-text" alt={name} />
            <div className="card-body card-text">
              <h5 className="card-title titulo">{name}</h5>
              <div className="card-content">
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
                <p className="card-text locacionn">
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
  );
}
