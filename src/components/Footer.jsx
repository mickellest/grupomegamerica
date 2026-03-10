import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="logo">
                        <Zap className="logo-icon" size={28} />
                        <span>MegaAmérica</span>
                    </Link>
                    <p className="footer-desc">
                        Organización con alcance global especializada en la gerencia, diseño, construcción y mantenimiento de infraestructuras eléctricas.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Nosotros</Link></li>
                        <li><Link to="/services">Servicios</Link></li>
                        <li><Link to="/projects">Proyectos</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <ul>
                        <li>
                            <MapPin size={18} />
                            <span>Calle Madariaga, Casa #35, Urb. Los Naranjillos, Guacara, Edo. Carabobo, Venezuela.</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>ventas@grupomegamerica.com</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+58 (412) 440-5951</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Grupo Mega América - Inversiones Megavoltios 2000, C.A. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
