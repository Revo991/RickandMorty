import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Auth0Provider} from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-undef
  <Auth0Provider
    domain='dev-ilv0wg4e5jn6qrh5.us.auth0.com'
    clientId='R4IUMXeL3sNSyZx0UAF5ORT5WhBePaIO'
    redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)
