// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import ListaPersonajes from './ListaPersonajes'



export default function Header() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/ListaPersonajes' element={<ListaPersonajes/>}/>
    </Routes>
    </BrowserRouter>
  )
}
