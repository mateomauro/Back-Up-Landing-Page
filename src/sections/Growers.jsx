import React from 'react'
import "../styles/growers.css"
import GrowersDesktop from '../components/GrowersDesktop'
import niñoMobile from '../assets/niñoMobile.webp'
import Testimonio from '../components/Testimonio';
import testimonio1 from '../assets/testimonio1.webp'
import testimonio2 from '../assets/testimonio2.webp'
import testimonio3 from '../assets/testimonio3.webp'
import testimonio4 from '../assets/testimonio4.webp'
import testimonio5 from '../assets/testimonio5.webp'
import testimonio6 from '../assets/testimonio6.webp'
import { motion } from "framer-motion";



const Growers = () => {


    const zoomInFadeInRight = {
        hidden: { opacity: 0, x: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.2 }
        },
    };

    const zoomInFadeInLeft = {
        hidden: { opacity: 0, x: -50, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.2 }
        },
    };

    return (
        <section id='growers' className='growers-section'>
            <div className='growers-section-home-container'>
                <div className='growers-section-home'>
                    <motion.div
                        className="growers-informacion"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={zoomInFadeInLeft}
                    >
                        <h1 className='titulo-growers'>Aprendé Inglés con un Método <span> Multi- Sensorial </span> y <span> Social </span> </h1>
                        <button> <a href="https://api.whatsapp.com/send/?phone=2494630209&text&type=phone_number&app_absent=0" target='_blank'>Cupos limitados ¡Anotate hoy! </a> </button>
                    </motion.div>
                    <motion.div
                        className="growers-imagen"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={zoomInFadeInRight}
                    >
                        <img src={niñoMobile} alt="" />
                    </motion.div>
                </div>
            </div>
            <div className='growers-testimonios'>
                <Testimonio titulo='Sofi la mejor profesora!' subtitulo='Muy clara en sus clases, aprende fácil con ella' img={testimonio1} />
                <Testimonio titulo='Sofi es genial!' subtitulo='Siempre tiene nuevas ideas para que aprendamos mejor' img={testimonio2} />
                <Testimonio titulo='Excelente ambiente de aprendizaje' subtitulo='eGrowers es más que un instituto, es una familia' img={testimonio3} />
                <Testimonio titulo='eGrowers me cambió la vida!' subtitulo='Un lugar de aprendizaje único, recomiendo totalmente' img={testimonio4} />
                <Testimonio titulo='María es increíble!' subtitulo='Su energía en clase me motiva a seguir aprendiendo' img={testimonio5} />
                <Testimonio titulo='Ana es excelente!' subtitulo='Es muy paciente y explica todo con calma' img={testimonio6} />

                <Testimonio titulo='Sofi la mejor profesora!' subtitulo='Muy clara en sus clases, aprende fácil con ella' img={testimonio1} />
                <Testimonio titulo='Sofi es genial!' subtitulo='Siempre tiene nuevas ideas para que aprendamos mejor' img={testimonio2} />
                <Testimonio titulo='Excelente ambiente de aprendizaje' subtitulo='eGrowers es más que un instituto, es una familia' img={testimonio3} />
                <Testimonio titulo='eGrowers me cambió la vida!' subtitulo='Un lugar de aprendizaje único, recomiendo totalmente' img={testimonio4} />
                <Testimonio titulo='María es increíble!' subtitulo='Su energía en clase me motiva a seguir aprendiendo' img={testimonio5} />
                <Testimonio titulo='Ana es excelente!' subtitulo='Es muy paciente y explica todo con calma' img={testimonio6} />


            </div>
            <GrowersDesktop></GrowersDesktop>
        </section>
    )
}

export default Growers
