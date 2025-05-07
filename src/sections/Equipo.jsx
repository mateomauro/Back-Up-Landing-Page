import React from 'react'
import "../styles/Equipo.css"
import GrowersDesktopAlrevez from '../components/GrowersDesktopAlrevez'
import profe1 from '../assets/chico1.webp'
import profe2 from '../assets/chico2.webp'
import profe3 from '../assets/chica1.webp'
import profe4 from '../assets/chica2.webp'
import InfoProfes from '../components/InfoProfes';


const Equipo = () => {

    const fadeInLeft = {
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    };

    return (
        <section className='equipo-container' id='profesores'>
            <div className='container-general'>
            <GrowersDesktopAlrevez></GrowersDesktopAlrevez>
                    <h2>Nuestros <span className='span-titulo'>Teachers</span></h2>
                    <div className='equipo-tablet'>
                        <InfoProfes nombre ="Marisa Aguilar" img={profe3} info = "Fundadora y docente principal. Tras una amplia labor en el área administrativa y financiera, facilitó el marco para construir un sueño llamado BACK UP. Sin abandonar años de formación en la lengua inglesa y un largo recorrido en distintas orientaciones y pedagogías, surgió la idea de un espacio integrador. De la mano de la experiencia y observación fui desarrollando métodos personalizados acordes a las necesidades de cada alumno tanto para el acompañamiento escolar, necesidades especiales o formación académica."> </InfoProfes>
                        <InfoProfes nombre ="Magdalena" img={profe1} info = "Profesora de inglés con más de 15 años de experiencia. Se ha desarrollado en la educación pública y privada. Acompaña el crecimiento de BACK UP hace cuatro años, tanto en el seguimiento escolar como en la formación de adolescentes y adultos."> </InfoProfes>
                    </div>
                    <div className='equipo-tablet'>
                        <InfoProfes nombre ="Simón" img={profe4} info = "Estudiante avanzado de la carrera de Ingeniería en Sistemas. Certificación en First Certificate. Docente de BACK UP desde sus inicios, acompañando el cambio social en el ámbito de la educación, tanto en el área de la lengua inglesa como en el área de matemáticas."></InfoProfes>
                        <InfoProfes nombre ="Tomás" img={profe2} info = "Estudiante avanzado de la carrera del Profesorado en Ingles, con tres años de antigüedad de trabajo en BACK UP. Ha consolidado su experiencia formando alumnos  para exámenes internacionales y acompañamiento escolar. "> </InfoProfes>
                        <InfoProfes nombre ="Uriel" img={profe2} info = "Estudiante avanzado de la carrera del Profesorado en Ingles, con tres años de antigüedad de trabajo en BACK UP. Ha consolidado su experiencia formando alumnos  para exámenes internacionales y acompañamiento escolar. "> </InfoProfes>
                    </div>
                </div>
        </section>
    )
}

export default Equipo
