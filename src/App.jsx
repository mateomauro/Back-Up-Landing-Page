import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
