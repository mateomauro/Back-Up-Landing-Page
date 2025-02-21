import flechaArriba from '../assets/flechaArriba.webp';
import flechaAbajo from '../assets/flechaAbajo.webp';

const Pregunta = ({ pregunta, respuesta, activa, onClick }) => {
    return (
        <div className='pregunta-caja'>
            <div className='pregunta' onClick={onClick}>
                <p>{pregunta}</p>
                <img src={activa ? flechaArriba : flechaAbajo} alt="Flecha" />
            </div>
            {activa && (
                <div className='respuesta'>
                    <p>{respuesta}</p>
                </div>
            )}
        </div>
    );
};

export default Pregunta;
