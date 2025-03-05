import React from 'react'
import "../styles/galeria.css"
import GrowersDesktop from '../components/GrowersDesktop'
import galeria1 from '../assets/galeria1.webp'
import galeria2 from '../assets/galeria2.webp'
import galeria3 from '../assets/galeria3.webp'

const Galeria = () => {
  return (
    <section className='galeria-container' id='galeria'>
        <h2>Conoce la <span>Escuela</span></h2>
        <div className='galeria'>
            <img src={galeria1} />
            <img src={galeria2} />
            <img src={galeria3} />
            <img src={galeria1} />
            <img src={galeria2} />
            <img src={galeria3} />
            <img src={galeria1} />
            <img src={galeria2} />
            <img src={galeria3} />
            <img src={galeria1} />
            <img src={galeria2} />
            <img src={galeria3} />

        </div>
        <GrowersDesktop></GrowersDesktop>
    </section>
  )
}

export default Galeria
