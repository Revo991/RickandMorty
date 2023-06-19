/* eslint-disable react/jsx-no-undef */

// eslint-disable-next-line no-unused-vars
import ListaPersonajes from './componets/ListaPersonajes';
import './assets/css/style.css'
import Header from './componets/Header';



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