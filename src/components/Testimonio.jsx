import React from 'react'
import "../styles/testimonio.css"
import Estrella from '../assets/Estrella'

const Testimonio = ({titulo, subtitulo, img}) => {
    return (
        <div className='testimonio'>
            <div className='testimonio-img-container'>
                <img src={img} alt="ana" />
            </div>
            <div className='testimonio-informacion-container'>
                <div className='estrellas-testimonio'>
                    <Estrella></Estrella>
                    <Estrella></Estrella>
                    <Estrella></Estrella>
                    <Estrella></Estrella>
                    <Estrella></Estrella>
                </div>
                <h4>{titulo}</h4>
                <h5>{subtitulo}</h5>
            </div>
        </div>
    )
}

export default Testimonio
