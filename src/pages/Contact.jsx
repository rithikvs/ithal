import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram } from 'lucide-react';
import styles from './Contact.module.css';
import Button from '../components/UI/Button';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.pageHeader}>
                <div className="container">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Info Column */}
                        <motion.div
                            className={styles.infoColumn}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Get in Touch</h2>
                            <p className={styles.introText}>
                                Have a question or want to book an appointment? Reach out to us!
                            </p>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div>
                                    <h3>Phone / WhatsApp</h3>
                                    <p>+91 9629741825</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div>

                                    <p>Aathur pirivu, Amman Nagar, maruthi rice mill opposite, Karur.</p>
                                </div>
                            </div>

                            <div className={styles.socialLinks}>
                                <h3>Follow Us</h3>
                                <div className={styles.socialIcons}>
                                    <a href="https://www.instagram.com/ethalya_rubini/" className={styles.socialBtn} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
