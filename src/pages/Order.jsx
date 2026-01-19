import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, Ruler, Send } from 'lucide-react';
import styles from './Order.module.css';
import Button from '../components/UI/Button';

const Order = () => {
    const steps = [
        {
            icon: <Camera size={32} />,
            title: "1. Choose a Design",
            description: "Browse our gallery or find a design you love from the internet."
        },
        {
            icon: <Ruler size={32} />,
            title: "2. Prepare Details",
            description: "Note down your requirements or customization needs."
        },
        {
            icon: <Send size={32} />,
            title: "3. Connect on WhatsApp",
            description: "Click the button below to start a chat with us."
        },
        {
            icon: <MessageCircle size={32} />,
            title: "4. Confirm Order",
            description: "Discus price, measurements, and delivery date to confirm."
        }
    ];

    return (
        <div className={styles.orderPage}>
            <div className={styles.pageHeader}>
                <div className="container">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        How to Order
                    </motion.h1>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.stepsContainer}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={styles.stepCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.ctaBox} data-aos="zoom-in">
                        <h2>Ready to place an order?</h2>
                        <p>Click below to chat with us directly on WhatsApp.</p>
                        <Button
                            variant="primary"
                            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                            href="https://wa.me/917708552461?text=Hello%20Fancy%20Creations,%20I%20would%20like%20to%20place%20an%20order."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle size={20} /> Order on WhatsApp
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Order;
