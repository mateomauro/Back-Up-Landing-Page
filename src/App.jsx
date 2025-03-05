import { useRef } from 'react';
import Nav from './components/Nav';
import './styles/app.css';
import Growers from './sections/Growers';
import Servicios from './sections/Servicios';
import Equipo from './sections/Equipo';
import Galeria from './sections/Galeria';
import Preguntas from './sections/Preguntas';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';

function App() {
  // Crear referencias para cada sección
  const growerRef = useRef(null);
  const serviciosRef = useRef(null);
  const equipoRef = useRef(null);
  const galeriaRef = useRef(null);
  const preguntasRef = useRef(null);
  const contactoRef = useRef(null);

  // Función para hacer scroll hacia la sección correspondiente
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='contenedor-principal'>
      <Nav
        scrollToSection={scrollToSection}
        growerRef={growerRef}
        serviciosRef={serviciosRef}
        equipoRef={equipoRef}
        galeriaRef={galeriaRef}
        preguntasRef={preguntasRef}
        contactoRef={contactoRef}
      />
      <div ref={growerRef}>
        <Growers />
      </div>
      <div ref={serviciosRef}>
        <Servicios />
      </div>
      <div ref={equipoRef}>
        <Equipo />
      </div>
      <div ref={galeriaRef}>
        <Galeria />
      </div>
      <div ref={preguntasRef}>
        <Preguntas />
      </div>
      <div ref={contactoRef}>
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}

export default App;
