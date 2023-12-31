// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Logout() {
    const { logout } = useAuth0();

    return (
        <button className="nav-link link" onClick={ () => logout({ logoutParams: {returnTo: window.location.origin}})}>Cerrar Sesion</button>
    )
}