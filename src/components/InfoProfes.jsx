
const InfoProfes = ({nombre, img, info}) => {
    return (
        <div className='profes'>
            <div className='container'>
                <div>
                    <img src={img} alt="marisa" className='foto-profe'/>
                </div>
                <div className='info-profe'> 
                    <div className="titulo">
                        <h3>{nombre}</h3>
                    </div>   
                    <p className='texto-profe'>{info}</p>
                </div>
            </div>
        </div> 
    );
}



//si declaro aca otra const la puedo importar, preciso hacerlo de otro formato para computadora, entonces me va cambiar los div

export default InfoProfes;

