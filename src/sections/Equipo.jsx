import React from 'react'
import "../styles/Equipo.css"
import GrowersDesktopAlrevez from '../components/GrowersDesktopAlrevez'
import profesora1 from '../assets/profesora1.webp'
import profesora2 from '../assets/profesora2.webp'
import { motion } from "framer-motion";



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
        <section className='equipo-container' id='equipo'>
            <GrowersDesktopAlrevez></GrowersDesktopAlrevez>
            <div className='equipo'>
                <h2>Conoce a nuestras <span> Techears </span></h2>
                <div className='profesoras'>
                    <div className='profesoras-titulo'>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInRight}
                        >Sofía Alewaerts</motion.h3>
                        <motion.svg
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInRight}
                            xmlns="http://www.w3.org/2000/svg"
                            width="761"
                            height="37"
                            viewBox="0 0 761 37"
                            fill="none"
                        >
                            <motion.path
                                d="M3 1C37 79.1739 725.267 -48.403 758 35.3264"
                                stroke="#FEBB2F"
                                strokeWidth="5"
                                initial={{ strokeDasharray: 761 }}  // El largo del trazo es el mismo que el de la longitud del path
                                animate={{ strokeDashoffset: 0 }}  // El offset es 0 cuando se completa la animación
                                transition={{ duration: 2 }}  // La duración de la animación (en segundos)
                            />
                        </motion.svg>
                    </div>
                    <motion.div
                        className="profesoras-imagen"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInLeft}
                    >
                        <img src={profesora1} />
                    </motion.div>
                    <motion.div
                        className="profesoras-informacion"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInRight}
                    >
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </motion.div>
                </div>
                <div className='profesoras invertida'>
                    <div className='profesoras-titulo'>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInLeft}
                        >Magali Mauro</motion.h3>
                        <motion.svg
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInLeft}
                            xmlns="http://www.w3.org/2000/svg"
                            width="761"
                            height="37"
                            viewBox="0 0 761 37"
                            fill="none"
                        >
                            <motion.path
                                d="M3 1C37 79.1739 725.267 -48.403 758 35.3264"
                                stroke="#FEBB2F"
                                strokeWidth="5"
                                initial={{ strokeDasharray: 761 }}  // El largo del trazo es el mismo que el de la longitud del path
                                animate={{ strokeDashoffset: 0 }}  // El offset es 0 cuando se completa la animación
                                transition={{ duration: 2 }}  // La duración de la animación (en segundos)
                            />
                        </motion.svg>
                    </div>
                    <motion.div
                        className="profesoras-imagen"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInRight}
                    >
                        <img src={profesora2} />
                    </motion.div>
                    <motion.div
                        className="profesoras-informacion"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInLeft}
                    >
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </motion.div>
                </div>
                <div className='profesoras'>
                    <div className='profesoras-titulo'>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInRight}
                        >Sofía Alewaerts</motion.h3>
                        <motion.svg
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInRight}
                            xmlns="http://www.w3.org/2000/svg"
                            width="761"
                            height="37"
                            viewBox="0 0 761 37"
                            fill="none"
                        >
                            <motion.path
                                d="M3 1C37 79.1739 725.267 -48.403 758 35.3264"
                                stroke="#FEBB2F"
                                strokeWidth="5"
                                initial={{ strokeDasharray: 761 }}  // El largo del trazo es el mismo que el de la longitud del path
                                animate={{ strokeDashoffset: 0 }}  // El offset es 0 cuando se completa la animación
                                transition={{ duration: 2 }}  // La duración de la animación (en segundos)
                            />
                        </motion.svg>
                    </div>
                    <motion.div
                        className="profesoras-imagen"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInLeft}
                    >
                        <img src={profesora1} />
                    </motion.div>
                    <motion.div
                        className="profesoras-informacion"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInRight}
                    >
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </motion.div>
                </div>
                <div className='profesoras invertida'>
                    <div className='profesoras-titulo'>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInLeft}
                        >Magali Mauro</motion.h3>
                        <motion.svg
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            variants={fadeInLeft}
                            xmlns="http://www.w3.org/2000/svg"
                            width="761"
                            height="37"
                            viewBox="0 0 761 37"
                            fill="none"
                        >
                            <motion.path
                                d="M3 1C37 79.1739 725.267 -48.403 758 35.3264"
                                stroke="#FEBB2F"
                                strokeWidth="5"
                                initial={{ strokeDasharray: 761 }}  // El largo del trazo es el mismo que el de la longitud del path
                                animate={{ strokeDashoffset: 0 }}  // El offset es 0 cuando se completa la animación
                                transition={{ duration: 2 }}  // La duración de la animación (en segundos)
                            />
                        </motion.svg>
                    </div>
                    <motion.div
                        className="profesoras-imagen"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInRight}
                    >
                        <img src={profesora2} />
                    </motion.div>
                    <motion.div
                        className="profesoras-informacion"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeInLeft}
                    >
                        <p>Es la fundadora y docente principal de Growers, con más de 5 años de experiencia en la enseñanza del inglés.</p>
                        <p>Apasionada por la educación, ha dedicado su carrera a crear un método de aprendizaje innovador, basado en la inmersión multisensorial y la interacción social.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Equipo
