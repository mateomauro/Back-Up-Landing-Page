import { useState } from 'react'
import Nav from './components/Nav'
import "./styles/app.css"
import Growers from './sections/Growers'
import Servicios from './sections/Servicios'

function App() {


  return (
    <>
      <div className='contenedor-principal'>
        <Nav></Nav>
        <Growers></Growers>
        <Servicios></Servicios>
      </div>
    </>
  )
}

export default App
