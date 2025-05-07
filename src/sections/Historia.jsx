import React from 'react'
import "../styles/Historia.css"


const Historia = () => {
    return (
        <div id='nosotros'>
            <h2 className='titulo-historia'>Nuestra <span>Historia</span></h2>
            <div className='container-historia'>
                <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" className='arrow-svg' width="100" height = "auto" viewBox="0 0 104 1320" fill="none">
                        <path d="M47.0503 1317.95C49.7839 1320.68 54.2161 1320.68 56.9497 1317.95L101.497 1273.4C104.231 1270.67 104.231 1266.24 101.497 1263.5C98.7638 1260.77 94.3316 1260.77 91.598 1263.5L52 1303.1L12.402 1263.5C9.66835 1260.77 5.2362 1260.77 2.50253 1263.5C-0.231145 1266.24 -0.231145 1270.67 2.50253 1273.4L47.0503 1317.95ZM45 0L45 1313H59L59 0L45 0Z" fill="#764AF1"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Historia