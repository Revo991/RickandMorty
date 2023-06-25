// eslint-disable-next-line no-unused-vars
import { useAuth0 } from '@auth0/auth0-react';
import mortygif from '../assets/img/morty-gif.gif';

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

export default function LogIn() {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    // Agregar la regla CSS para ocultar el desplazamiento horizontal
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <main className="fondo-2" style={{ minHeight: '100vh' }}>
      <div className="row h-100">
        <div className="col-lg-8 col-md-6 d-flex">
          <img src={mortygif} alt="portal" className="w-100" />
        </div>
        <div className="col-lg-4 col-md-6 d-flex ">
          <div className="text-center">
            <h2 className="text-white">BIENVENIDOS</h2>
            <button className="btn btn-primary mt-3" onClick={() => loginWithRedirect()}>
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
