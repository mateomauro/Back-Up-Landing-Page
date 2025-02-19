import React from 'react'
import "../styles/equipo.css"
import GrowersDesktopAlrevez from '../assets/GrowersDesktopAlrevez'
import profesora1 from '../assets/profesora1.webp'
import profesora2 from '../assets/profesora2.webp'


const Equipo = () => {
    return (
        <section className='equipo-container'>
            <GrowersDesktopAlrevez></GrowersDesktopAlrevez>
            <div className='equipo'>
                <h2>Conoce a nuestras <span> Techears </span></h2>
                <div className='profesoras'>
                    <div className='profesoras-titulo'>
                        <h3>Sofía Alewaerts</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="761" height="37" viewBox="0 0 761 37" fill="none">
                            <path d="M3 1C37 79.1739 725.267 -48.403 758 35.3264" stroke="#FEBB2F" stroke-width="5" />
                        </svg>
                    </div>
                    <div className='profesoras-imagen'>
                        <img src={profesora1} />
                    </div>
                    <div className='profesoras-informacion'>
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </div>
                </div>
                <div className='profesoras invertida'>
                    <div className='profesoras-titulo'>
                        <h3>Magali Mauro</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="761" height="37" viewBox="0 0 761 37" fill="none">
                            <path d="M3 1C37 79.1739 725.267 -48.403 758 35.3264" stroke="#FEBB2F" stroke-width="5" />
                        </svg>
                    </div>
                    <div className='profesoras-imagen'>
                        <img src={profesora2} />
                    </div>
                    <div className='profesoras-informacion'>
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </div>
                </div>
                <div className='profesoras'>
                    <div className='profesoras-titulo'>
                        <h3>Sofía Alewaerts</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="761" height="37" viewBox="0 0 761 37" fill="none">
                            <path d="M3 1C37 79.1739 725.267 -48.403 758 35.3264" stroke="#FEBB2F" stroke-width="5" />
                        </svg>
                    </div>
                    <div className='profesoras-imagen'>
                        <img src={profesora1} />
                    </div>
                    <div className='profesoras-informacion'>
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </div>
                </div>
                <div className='profesoras invertida'>
                    <div className='profesoras-titulo'>
                        <h3>Magali Mauro</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="761" height="37" viewBox="0 0 761 37" fill="none">
                            <path d="M3 1C37 79.1739 725.267 -48.403 758 35.3264" stroke="#FEBB2F" stroke-width="5" />
                        </svg>
                    </div>
                    <div className='profesoras-imagen'>
                        <img src={profesora2} />
                    </div>
                    <div className='profesoras-informacion'>
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Equipo
