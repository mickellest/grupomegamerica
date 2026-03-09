import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            Ingeniería Eléctrica <br />
                            <span className="text-gradient">Sin Fronteras</span>
                        </h1>
                        <p className="hero-subtitle">
                            Soluciones integrales de energía y proyectos globales con más de 30 años de experiencia. Especialistas en infraestructuras críticas.
                        </p>
                        <div className="hero-actions">
                            <Link to="/services" className="button-primary">
                                Nuestros Servicios <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="button-outline">
                                Contactar
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust Bar */}
            <section className="stats-section section">
                <div className="container">
                    <div className="stats-grid">
                        <motion.div className="stat-card glass-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="stat-icon"><Globe size={32} /></div>
                            <h3>Presencia Global</h3>
                            <p>Venezuela, España y Guinea Ecuatorial.</p>
                        </motion.div>

                        <motion.div className="stat-card glass-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="stat-icon"><Zap size={32} /></div>
                            <h3>30+ Años</h3>
                            <p>De experiencia en el sector eléctrico y de potencia.</p>
                        </motion.div>

                        <motion.div className="stat-card glass-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <div className="stat-icon"><ShieldCheck size={32} /></div>
                            <h3>Calidad Mundial</h3>
                            <p>Aliados estratégicos de ABB, OLVAL y más.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
