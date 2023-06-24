// eslint-disable-next-line no-unused-vars
import { useAuth0 } from '@auth0/auth0-react'
import mortygif from '../assets/img/morty-gif.gif'

// eslint-disable-next-line no-unused-vars
import React from 'react'


export default function LogIn() {


const {loginWithRedirect} = useAuth0();
  return (
    <main className='fondo-2 p-5' >
      <div className="row">
        <div className='col-6'>
          <img src={mortygif} alt="portal"/>
        </div>
        <div className='col-5 position-absolute top-100 start-50'>
        <h2 className="text-white">BIENVENIDOS</h2>
        <button className='btn btn-primary' onClick={ () => loginWithRedirect()}>Iniciar Sesion</button>
        </div>
      </div>
    </main>
  )
}