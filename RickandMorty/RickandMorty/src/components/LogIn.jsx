// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import mortygif from '../assets/img/morty-gif.gif';

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <main className="fondo-2" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 d-flex justify-content-center justify-content-md-end">
            <img src={mortygif} alt="portal" className="w-100" />
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center justify-content-md-start my-auto">
            <div className="text-center">
              <h2 className="text-white font-monospace">BIENVENIDOS</h2>
              <button className="btn btn-primary mt-3" onClick={() => loginWithRedirect()}>
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
