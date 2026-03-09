import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "Firestone (Alice Neumáticos)",
            category: "Industria y Manufactura",
            desc: "Mantenimiento mayor de ducto-barras, subestaciones principales y optimización de sistemas de iluminación industrial.",
            image: "url('/assets/megaamerica_missing_2.png') center/cover"
        },
        {
            id: 2,
            title: "Laboratorios Elmor (Planta Guacara)",
            category: "Industria Farmacéutica",
            desc: "Diseño y ejecución integral del sistema eléctrico, incluyendo planta de emergencia de 750 KVA y tableros de transferencia automática.",
            image: "url('/assets/megaamerica_project_img_8.jpeg') center/cover"
        },
        {
            id: 3,
            title: "Vicson Bekaert",
            category: "Industria y Manufactura",
            desc: "Modernización y actualización de sistemas de protección en media tensión (13.8 KV).",
            image: "url('/assets/megaamerica_project_img_21.png') center/cover"
        },
        {
            id: 4,
            title: "Supermercados Unicasa",
            category: "Comercial y Retail",
            desc: "Remodelación eléctrica completa en sucursales estratégicas (La Candelaria, Maturín, Cumaná, El Tigre).",
            image: "url('/assets/megaamerica_missing_3.png') center/cover"
        },
        {
            id: 5,
            title: "Red Vital / Makro",
            category: "Comercial y Retail",
            desc: "Reparación y mantenimiento especializado de bancos de transformadores trifásicos.",
            image: "url('/assets/megaamerica_project_img_20.png') center/cover"
        },
        {
            id: 6,
            title: "Centro Comercial Unimall (El Tigre)",
            category: "Comercial y Retail",
            desc: "Ejecución total del sistema eléctrico y sistema de protección contra incendios (20.651 m²).",
            image: "url('/assets/megaamerica_project_img_19.png') center/cover"
        },
        {
            id: 7,
            title: "Ferretería EPA y MIGO",
            category: "Comercial y Retail",
            desc: "Adecuación de infraestructura eléctrica y suministro de materiales de potencia.",
            image: "url('/assets/megaamerica_missing_20.jpeg') center/cover"
        },
        {
            id: 8,
            title: "Hotel Anaco Suites",
            category: "Turismo y Hotelería",
            desc: "Instalación de sistemas de voz y data, además de la infraestructura eléctrica principal.",
            image: "url('/assets/megaamerica_project_img_18.png') center/cover"
        },
        {
            id: 9,
            title: "Hotel Teramun",
            category: "Turismo y Hotelería",
            desc: "Proyectos de ingeniería eléctrica para el sector turismo con enfoques de alta fiabilidad.",
            image: "url('/assets/megaamerica_missing_12.jpeg') center/cover"
        }
    ];

    return (
        <div className="projects-page">
            <section className="projects-header section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-gradient">Nuestra Huella en la Industria</h1>
                        <p className="projects-subtitle">
                            En Grupo Mega América, la excelencia se mide por la envergadura y complejidad de los proyectos que hemos ejecutado con éxito. Nuestra trayectoria abarca obras eléctricas críticas para los sectores industrial, comercial, farmacéutico y de servicios.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="projects-grid-section">
                <div className="container">
                    <div className="projects-grid">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card glass-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            >
                                <div
                                    className="project-image"
                                    style={{ background: project.image, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="project-overlay">
                                        <ExternalLink size={32} className="project-link-icon" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
