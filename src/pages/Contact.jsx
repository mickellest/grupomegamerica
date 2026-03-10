import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-header section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-gradient">Hablemos de Energía</h1>
                        <p className="contact-subtitle">
                            Ya sea para una cotización de insumos de potencia o el diseño de un proyecto llave en mano, estamos aquí para atenderle a nivel global.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-content-section section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2>Información de Contacto</h2>
                            <p className="contact-info-desc">Comuníquese directamente con nuestras oficinas principales. Responderemos a su solicitud en un lapso máximo de 24 horas laborables.</p>

                            <div className="info-cards">
                                <div className="info-card glass-card">
                                    <div className="info-icon"><MapPin size={24} /></div>
                                    <div>
                                        <h4>Sede Principal (Venezuela)</h4>
                                        <p>Calle Madariaga, Casa #35, Urb. Los Naranjillos, Guacara, Edo. Carabobo.</p>
                                    </div>
                                </div>

                                <div className="info-card glass-card">
                                    <div className="info-icon"><Mail size={24} /></div>
                                    <div>
                                        <h4>Correo Electrónico</h4>
                                        <p>ventas@grupomegamerica.com</p>
                                    </div>
                                </div>

                                <div className="info-card glass-card">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div>
                                        <h4>Líneas Telefónicas</h4>
                                        <p>+58 (412) 440-5951</p>
                                    </div>
                                </div>
                            </div>

                            <div className="global-presence-tags">
                                <span className="global-tag">🇻🇪 Venezuela</span>
                                <span className="global-tag">🇬🇶 Guinea Ecuatorial</span>
                                <span className="global-tag">🇪🇸 España</span>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper glass-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2>Envíenos un Mensaje</h2>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre o Razón Social *</label>
                                    <input type="text" id="name" required placeholder="Ej. Constructora ABC" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico *</label>
                                    <input type="email" id="email" required placeholder="correo@empresa.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Asunto</label>
                                    <select id="subject">
                                        <option value="">Seleccione un asunto...</option>
                                        <option value="cotizacion">Cotización de Materiales</option>
                                        <option value="proyecto_ipc">Proyectos IPC / Construcción</option>
                                        <option value="mantenimiento">Mantenimiento de Subestaciones</option>
                                        <option value="otro">Otro Requerimiento</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mensaje *</label>
                                    <textarea id="message" rows="5" required placeholder="Describa su requerimiento o proyecto con la mayor cantidad de detalles posible..."></textarea>
                                </div>

                                <button type="submit" className="button-primary submit-btn">
                                    Enviar Solicitud <Send size={18} />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
