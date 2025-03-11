import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import logoAzul from "../assets/logoAzul.webp"
import "../styles/nav.css";
import MenuIcon from "../components/MenuIcon";
import CloseIcon from "../components/CloseIcon";
import SeparadorMobile from "./SeparadorMobile";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


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
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
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
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
