// eslint-disable-next-line no-unused-vars
import { useAuth0 } from '@auth0/auth0-react'

// eslint-disable-next-line no-unused-vars
import React from 'react'


export default function LogIn() {


const {loginWithRedirect} = useAuth0();
  return (
    
    <button className='btn btn-primary' onClick={ () => loginWithRedirect()}>Iniciar Sesion</button>
  )
}