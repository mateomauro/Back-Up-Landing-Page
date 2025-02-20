import React from 'react'

const InformacionContacto = ({svg, informacion}) => {
    return (
        <div className='informacion'>
            {svg}
            <p>{informacion}</p>
        </div>
    )
}

export default InformacionContacto
