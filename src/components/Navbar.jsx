import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <Zap className="logo-icon" size={28} />
                    <span>MegaAmérica</span>
                </Link>

                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>Nosotros</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)}>Servicios</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Proyectos</Link>
                    <Link to="/contact" className="button-primary nav-contact-btn" onClick={() => setIsOpen(false)}>Contacto</Link>
                </nav>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
