import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Ethal Creations
                    </motion.h1>
                </div>
            </div>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyImage} data-aos="fade-right">
                            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tailoring Workshop" />
                        </div>
                        <div className={styles.storyContent} data-aos="fade-left">
                            <h2 className="section-title">Our Story</h2>
                            <p>
                                Founded with a passion for intricate craftsmanship, Ethal Creations has been serving fashion enthusiasts with bespoke designs and high-quality stitching. We believe that every piece of clothing tells a story, and we are here to help you write yours.
                            </p>
                            <p>
                                From humble beginnings to a boutique brand known for its Aari work and bridal blouses, our journey has been driven by customer satisfaction and artistic excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={styles.missionSection} data-aos="fade-up">
                <div className="container text-center">
                    <h2 className="section-title">Our Mission</h2>
                    <p className={styles.missionText}>
                        "To combine traditional craftsmanship with modern fashion trends, delivering
                        handcrafted elegance that makes every woman feel special and confident."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
