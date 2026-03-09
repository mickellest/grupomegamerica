import { motion } from 'framer-motion';
import { Target, Users, Map, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero section">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-gradient">Sobre Nosotros</h1>
                            <p className="lead-text">
                                En Grupo Mega América, integramos la experiencia y la innovación para impulsar el desarrollo energético global.
                            </p>
                            <p>
                                Somos una organización con alcance en América del Sur, el Caribe, África Central y Europa, dedicada a garantizar la mejor relación costo-calidad en el diseño, construcción y mantenimiento de infraestructuras eléctricas críticas. Trabajamos desde la gerencia de obras, pasando por la construcción de subestaciones, hasta el mantenimiento industrial continuo.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="abstract-graphic">
                                <div className="glow-orb"></div>
                                <div className="grid-lines"></div>
                                <h2>Energía sin <br /> Fronteras</h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values / Details */}
            <section className="core-values section">
                <div className="container">
                    <div className="values-grid">
                        <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="value-icon"><Users size={32} /></div>
                            <h3>Gerencia Experta</h3>
                            <p>Gestión de negocios y planificación corporativa integral del grupo, optimizando los recursos de cada proyecto.</p>
                        </motion.div>

                        <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="value-icon"><Map size={32} /></div>
                            <h3>Alcance Global</h3>
                            <p>Operaciones consolidadas en Guinea Ecuatorial, América Latina y Europa, adaptándonos a diferentes regulaciones y mercados.</p>
                        </motion.div>

                        <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="value-icon"><Award size={32} /></div>
                            <h3>Aliados de Calidad</h3>
                            <p>Trabajamos bajo los estándares de calidad de líderes mundiales (ABB, OLVAL, LIFASA, LAYBOX) garantizando máxima confiabilidad.</p>
                        </motion.div>

                        <motion.div className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <div className="value-icon"><Target size={32} /></div>
                            <h3>Infraestructura</h3>
                            <p>Centro de venta especializado de transformadores, pararrayos, aisladores y componentes de potencia de alta gama.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
