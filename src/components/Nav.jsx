import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/nav.css";
import MenuIcon from "../assets/MenuIcon";
import CloseIcon from "../assets/CloseIcon";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <li><a href="#growers">GROWERS</a></li>
                <li><a href="#servicios">SERVICIOS</a></li>
                <li><a href="#equipo">NUESTRO EQUIPO</a></li>
                <li><a href="#galeria">GALERIA</a></li>
                <li><a href="#faq">PREGUNTAS FRECUENTES</a></li>
                <li><a href="#contacto">CONTACTO</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
