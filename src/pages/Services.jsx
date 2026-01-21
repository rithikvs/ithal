import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './Services.module.css';

import imageAari from '../assets/images/aari.jpg';
import imageBrooch from '../assets/images/brooch.jpg';
import imageFabric from '../assets/images/fabric/1.jpg';
import Button from '../components/UI/Button';
// Helper to generate WhatsApp chat link (mobile-friendly)
const whatsappLink = (title) => {
    const text = `Hello Ethal Creations, I am interested in this service: ${title}`;
    return `https://wa.me/917708552461?text=${encodeURIComponent(text)}`;
};

const servicesList = [
    {
        title: "Aari Work",
        description: "Intricate hand embroidery using beads, stones, and threads to create stunning designs.",
        image: imageAari
    },
    {
        title: "Brooch Work",
        description: "Handmade customized brooches to add an elegant touch to your sarees and outfits.",
        image: imageBrooch
    },
    {
        title: "Fabric Paint",
        description: "Beautiful fabric painting to enhance your garments with unique art.",
        image: imageFabric
    }
];

const Services = () => {
    return (
        <div className={styles.servicesPage}>
            <div className={styles.pageHeader}>
                <div className="container">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Exclusive Services
                    </motion.h1>
                </div>
            </div>

            <div className="container section-padding">
                <div className={styles.servicesGrid}>
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className={styles.serviceCard}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={styles.imageContainer}>
                                <img src={service.image} alt={service.title} />
                            </div>
                            <Button
                                variant="primary"
                                href={whatsappLink(service.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginTop: 12 }}
                            >
                                Order via WhatsApp
                            </Button>
                            <div className={styles.content}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className={styles.features}>
                                    <li><CheckCircle size={14} /> Custom Designs</li>
                                    <li><CheckCircle size={14} /> Premium Material</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
