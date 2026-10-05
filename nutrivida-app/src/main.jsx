import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App.jsx'
import './index.css' // Aquí pegaremos tu style.css actual

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)