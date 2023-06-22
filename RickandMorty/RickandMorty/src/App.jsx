/* eslint-disable react/jsx-no-undef */

// eslint-disable-next-line no-unused-vars

import './assets/css/style.css'
import Header from './components/Header';
// eslint-disable-next-line no-unused-vars
import Inicio from './components/Inicio';
import ListaPersonajes from './components/ListaPersonajes';




function App() {
  
  return (
    <>
    <Header/>
      <div>
        <ListaPersonajes/>
      </div>
    </>
  )
}

export default App