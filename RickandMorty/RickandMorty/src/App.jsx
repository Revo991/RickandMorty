/* eslint-disable react/jsx-no-undef */

// eslint-disable-next-line no-unused-vars

import './assets/css/style.css'
import Header from './components/Header';
import LogIn from './components/LogIn';
import { useAuth0 } from "@auth0/auth0-react"

function App() {
 
const {isAuthenticated}= useAuth0();
  return (
    <>
    {
      isAuthenticated ? (
        <>
 <Header/> 
        </>
      ) : (
      <LogIn/>

      )
    }
    
    </>
  )
}

export default App
