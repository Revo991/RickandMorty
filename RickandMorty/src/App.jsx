/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.css';
import Comodin from './components/Comodin';
import Header from './components/Header';
import CardPersonajes from './pages/CardPersonajes';
import Home from './pages/Home';
import ListaPersonajes from './pages/ListaPersonajes';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='comodin' element={<Comodin />}/>
          <Route path='lista-personajes' element={<ListaPersonajes />}/>
          <Route path='card-personajes' element={<CardPersonajes />}/>
          {/* <Route path='*' element={<NotFound />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}