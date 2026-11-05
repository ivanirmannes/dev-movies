import React from 'react'
import ReactDom from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Router from './routes/routes.jsx'
import GlobalStyle from './styles/globalStyles'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
    <GlobalStyle />
  </React.StrictMode>,
)
