import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
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
                                    <p>+91 77085 52461</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>contact@Ethalcreations.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div>
                                    <h3>Visit Boutique</h3>
                                    <p>123, Fashion Avenue, Boutique City, State - 600000</p>
                                </div>
                            </div>

                            <div className={styles.socialLinks}>
                                <h3>Follow Us</h3>
                                <div className={styles.socialIcons}>
                                    <a href="#" className={styles.socialBtn}><Instagram size={24} /></a>
                                    <a href="#" className={styles.socialBtn}><Facebook size={24} /></a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column (Optional) */}
                        <motion.div
                            className={styles.formColumn}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                                <h3>Send Measurements / Query</h3>
                                <div className={styles.formGroup}>
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="Your Mobile Number" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Message</label>
                                    <textarea rows="4" placeholder="Type your message..."></textarea>
                                </div>
                                <Button variant="primary" type="submit">Send Message</Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className={styles.mapSection}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f84!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614217313887!5m2!1sen!2sau"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
