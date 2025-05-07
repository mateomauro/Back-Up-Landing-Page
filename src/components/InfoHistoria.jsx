import React from 'react'
import "../styles/Punto.css"

const InfoHistoria = (titulo, info) => {
    return (
            <div className='anio2018 caja'>
                <h4>{titulo}</h4>
                <p>{info}</p>
            </div>
    );
}

export default InfoHistoria