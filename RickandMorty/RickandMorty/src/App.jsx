/* eslint-disable react/jsx-no-undef */

// eslint-disable-next-line no-unused-vars

import './assets/css/style.css'
import Header from './components/Header';
import ListaPersonajes from './components/ListaPersonajes';



function App() {
  
  return (
    <>
    <Header/>
      <div className='container'>
        <ListaPersonajes/>
        
      </div>
    </>
  )
}

export default App