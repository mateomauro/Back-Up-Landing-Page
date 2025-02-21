import { useState } from 'react'
import Nav from './components/Nav'
import "./styles/app.css"
import Growers from './sections/Growers'
import Servicios from './sections/Servicios'
import Equipo from './sections/Equipo'
import Galeria from './sections/Galeria'
import Preguntas from './sections/Preguntas'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

function App() {


  return (
    <>
      <div className='contenedor-principal'>
        <Nav></Nav>
        <Growers></Growers>
        <Servicios></Servicios>
        <Equipo></Equipo>
        <Galeria></Galeria>
        <Preguntas></Preguntas>
        <Contacto></Contacto>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
