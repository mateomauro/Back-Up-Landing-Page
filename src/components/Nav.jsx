import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import logoAzul from "../assets/logoAzul.webp"
import "../styles/nav.css";
import MenuIcon from "../components/MenuIcon";
import CloseIcon from "../components/CloseIcon";
import SeparadorMobile from "./SeparadorMobile";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Efecto para cambiar la clase en <body> cuando el menú se abre/cierra
    useEffect(() => {
        const contenedor = document.querySelector(".contenedor-principal");
        if (menuOpen) {
            contenedor.classList.add("menu-active");
            contenedor.classList.add("menu-abierto");
        } else {
            contenedor.classList.remove("menu-active");
            contenedor.classList.remove("menu-abierto");
        }
    }, [menuOpen]);


    return (
        <nav className="nav">
            {/* Logo */}
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Growers Logo" />
                </a>
            </div>

            {/* Botón de menú hamburguesa */}
            <button
                className="menu-hamburguesa"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label="Abrir menú"
            >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
                <span className="sr-only">Menú</span>
            </button>

            {/* Menú de navegación */}
            <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <p className={`${menuOpen ? "" : "desaparecer"}`}>Menu</p>
                <SeparadorMobile className={`${menuOpen ? "" : "desaparecer"}`} />
                <li><a href="#growers" onClick={() => setMenuOpen(false)}>GROWERS</a></li>
                <li><a href="#servicios" onClick={() => setMenuOpen(false)}>SERVICIOS</a></li>
                <li><a href="#equipo" onClick={() => setMenuOpen(false)}>NUESTRO EQUIPO</a></li>
                <li><a href="#galeria" onClick={() => setMenuOpen(false)}>GALERIA</a></li>
                <li><a href="#faq" onClick={() => setMenuOpen(false)}>PREGUNTAS FRECUENTES</a></li>
                <li><a href="#contacto" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
                <button className={`${menuOpen ? "" : "desaparecer"}`}> <a href="https://api.whatsapp.com/send/?phone=2494630209&text&type=phone_number&app_absent=0" target='_blank'>Cupos limitados ¡Anotate hoy! </a></button>
                <SeparadorMobile className={`${menuOpen ? "" : "desaparecer"}`} />
                <img className={`${menuOpen ? "" : "desaparecer"}`} src={logoAzul} alt="Logo" />
                <button className="btn-close-icon" onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <CloseIcon
                        className={`${menuOpen ? "" : "desaparecer"}`}
                    />
                </button>

            </ul>
        </nav>
    );
};

export default Nav;
