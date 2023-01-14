import React from 'react'
import ReactDOM from 'react-dom/client'
// Importamos el componente principal de nuestra app
import { GifEpertApp } from './GiftEpertApp'
// Importamos los estilos para que se apliquen de manera global en nuestra app
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifEpertApp/> 
  </React.StrictMode>,
)
