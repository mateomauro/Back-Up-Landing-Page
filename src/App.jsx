import { useState } from 'react'
import Nav from './components/Nav'
import "./styles/app.css"
import Growers from './sections/Growers'
import Servicios from './sections/Servicios'
import Equipo from './sections/Equipo'
import Galeria from './sections/Galeria'

function App() {


  return (
    <>
      <div className='contenedor-principal'>
        <Nav></Nav>
        <Growers></Growers>
        <Servicios></Servicios>
        <Equipo></Equipo>
        <Galeria></Galeria>
      </div>
    </>
  )
}

export default App
