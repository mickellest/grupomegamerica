import { motion } from 'framer-motion';
import { BatteryCharging, Cpu, Factory, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="services-page">
            {/* Header */}
            <section className="services-header section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="services-header-content"
                    >
                        <h1 className="text-gradient">Nuestras Divisiones<br />y Áreas de Servicio</h1>
                        <p>Nuestra capacidad operativa abarca desde el diseño inicial de ingeniería hasta la puesta en marcha de infraestructuras críticas, garantizando excelencia en cada etapa del proyecto.</p>
                    </motion.div>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="services-list section">
                <div className="container">
                    <motion.div
                        className="services-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* Service 1 */}
                        <motion.div className="service-card glass-card" variants={itemVariants}>
                            <div className="service-icon-wrapper">
                                <BatteryCharging size={40} className="service-icon" />
                            </div>
                            <h2>Generación y Energía</h2>
                            <p>Especialistas en la conceptualización y ejecución de soluciones de potencia. Diseñamos sistemas robustos para garantizar un suministro ininterrumpido.</p>
                            <ul className="service-features">
                                <li><ChevronRight size={16} /> Diseño por bloques de generación</li>
                                <li><ChevronRight size={16} /> Sincronización de grupos electrógenos</li>
                                <li><ChevronRight size={16} /> Unidades modulares en contenedores</li>
                                <li><ChevronRight size={16} /> Soporte para equipos MTU, Caterpillar y John Deere</li>
                            </ul>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div className="service-card glass-card" variants={itemVariants}>
                            <div className="service-icon-wrapper">
                                <Factory size={40} className="service-icon" />
                            </div>
                            <h2>Proyectos IPC</h2>
                            <p>Desarrollo integral de proyectos bajo la modalidad de Ingeniería, Procura y Construcción, gestionando cada fase con altos estándares de calidad internacional.</p>
                            <ul className="service-features">
                                <li><ChevronRight size={16} /> Redes aéreas y subterráneas</li>
                                <li><ChevronRight size={16} /> Sistemas de Media y Alta Tensión</li>
                                <li><ChevronRight size={16} /> Construcción de subestaciones</li>
                                <li><ChevronRight size={16} /> Electrificación industrial completa</li>
                            </ul>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div className="service-card glass-card" variants={itemVariants}>
                            <div className="service-icon-wrapper">
                                <Cpu size={40} className="service-icon" />
                            </div>
                            <h2>Fabricación e Integración</h2>
                            <p>Capacidad instalada para la manufactura e integración de componentes de control y protección, adaptados a las necesidades específicas de la industria.</p>
                            <ul className="service-features">
                                <li><ChevronRight size={16} /> Ensamblaje de tableros de control</li>
                                <li><ChevronRight size={16} /> Fabricación de celdas de distribución</li>
                                <li><ChevronRight size={16} /> Sistemas de protección avanzados</li>
                                <li><ChevronRight size={16} /> Tableros de medición de precisión</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta section">
                <div className="container">
                    <motion.div
                        className="cta-box glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Tiene un proyecto en mente?</h2>
                        <p>Nuestro equipo de ingeniería está listo para evaluar sus requerimientos y proponer la solución más eficiente.</p>
                        <Link to="/contact" className="button-primary">Solicitar Asesoría</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
