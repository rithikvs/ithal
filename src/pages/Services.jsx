import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './Services.module.css';

import image1 from '../assets/images/001.jpg';
import image2 from '../assets/images/002.jpg';
import image3 from '../assets/images/003.jpg';
import Button from '../components/UI/Button';
    // Helper to generate WhatsApp Web link
    const whatsappLink = (title) => {
        const text = `Hello Fancy Creations, I am interested in this service: ${title}`;
        return `https://web.whatsapp.com/send?phone=7708552461&text=${encodeURIComponent(text)}`;
    };

const servicesList = [
    {
        title: "Aari Embroidery",
        description: "Intricate hand embroidery using beads, stones, and threads to create stunning bridal designs.",
        image: image1
    },
    {
        title: "Bridal Tailoring",
        description: "Perfectly fitted bridal blouses and lehengas customized to your measurements and style.",
        image: image2
    },
    {
        title: "Brooch Designing",
        description: "Handmade customized brooches to add an elegant touch to your sarees and outfits.",
        image: image3
    },
    {
        title: "Pattern Making",
        description: "Expert pattern drafting for contemporary and traditional cuts.",
        image: image1 // Reuse image1 as a placeholder
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
