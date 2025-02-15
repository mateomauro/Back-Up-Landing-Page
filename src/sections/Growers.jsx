import React from 'react'
import "../styles/growers.css"
import GrowersDesktop from '../assets/GrowersDesktop'
import niñoMobile from '../assets/niñoMobile.png'
import Testimonio from '../components/Testimonio';
import testimonio1 from '../assets/testimonio1.png'
import testimonio2 from '../assets/testimonio2.jpg'
import testimonio3 from '../assets/testimonio3.png'



const Growers = () => {
    return (
        <section id='growers' className='growers-section'>
            <div className='growers-informacion'>
                <h1 className='titulo-growers'>Aprendé Inglés con un Método Multi- Sensorial y Social</h1>
                <button>Cupos limitados. ¡Anotate hoy! </button>
            </div>
            <div className='growers-imagen'>
                <img src={niñoMobile} alt="" />
            </div>
            <div className='growers-testimonios'>
                <Testimonio titulo='Sofi la mejor teacher!' subtitulo='Muy dedicada y apasionada, se aprende muy rapido con ella' img={testimonio1} />
                <Testimonio titulo='Sofi la mejor teacher!' subtitulo='Muy dedicada y apasionada, se aprende muy rapido con ella' img={testimonio2} />
                <Testimonio titulo='Sofi la mejor teacher!' subtitulo='Muy dedicada y apasionada, se aprende muy rapido con ella' img={testimonio3} />
                <Testimonio titulo='Sofi la mejor teacher!' subtitulo='Muy dedicada y apasionada, se aprende muy rapido con ella' img={testimonio1} />
                <Testimonio titulo='Sofi la mejor teacher!' subtitulo='Muy dedicada y apasionada, se aprende muy rapido con ella' img={testimonio2} />
                <Testimonio titulo='Sofi la mejor teacher!' subtitulo='Muy dedicada y apasionada, se aprende muy rapido con ella' img={testimonio3} />
            </div>
            <GrowersDesktop></GrowersDesktop>
        </section>
    )
}

export default Growers
