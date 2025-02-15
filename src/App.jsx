import { useState } from 'react'
import Nav from './components/Nav'
import "./styles/app.css"
import Growers from './sections/Growers'

function App() {


  return (
    <>
      <div className='contenedor-principal'>
        <Nav></Nav>
        <Growers></Growers>
      </div>
    </>
  )
}

export default App
