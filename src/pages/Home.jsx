import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Scissors, Heart } from 'lucide-react';
import styles from './Home.module.css';
import Button from '../components/UI/Button';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Handcrafted Elegance in Every Stitch
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Exclusive Aari Work, Designer Blouses & Bridal Wear
                    </motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/works">
                            <Button variant="primary">
                                View Our Collections <ChevronRight size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding">
                <div className="container">
                    <div className={styles.intro} data-aos="fade-up">
                        <h2 className="section-title text-center">Welcome to Fancy Creations</h2>
                        <p className="section-subtitle text-center">Where tradition meets modern fashion</p>
                        <p className={styles.introText}>
                            At Fancy Creations, we specialize in bringing your dream outfits to life.
                            From intricate Aari embroidery to perfect-fit bridal blouses, our passion
                            is to make you look your best on your special days.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="0">
                            <div className={styles.iconBox}><Star size={32} /></div>
                            <h3>Premium Quality</h3>
                            <p>Finest materials and threads ensuring durability and elegance.</p>
                        </div>
                        <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles.iconBox}><Scissors size={32} /></div>
                            <h3>Perfect Fit</h3>
                            <p>Custom tailoring that accentuates your style and comfort.</p>
                        </div>
                        <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="200">
                            <div className={styles.iconBox}><Heart size={32} /></div>
                            <h3>Handcrafted with Love</h3>
                            <p>Every stitch is placed with care and passion for details.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Preview */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">Our Expertise</h2>
                    <div className={styles.categoryGrid}>
                        <div className={styles.categoryCard} data-aos="zoom-in">
                            <img src="https://images.unsplash.com/photo-1610173827002-62c0f6f00d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Aari Work" />
                            <div className={styles.categoryOverlay}>
                                <h3>Aari Work</h3>
                                <Link to="/works">Explore</Link>
                            </div>
                        </div>
                        <div className={styles.categoryCard} data-aos="zoom-in" data-aos-delay="100">
                            <img src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Bridal Blouses" />
                            <div className={styles.categoryOverlay}>
                                <h3>Bridal Blouses</h3>
                                <Link to="/works">Explore</Link>
                            </div>
                        </div>
                        <div className={styles.categoryCard} data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://images.unsplash.com/photo-1550614000-4b9519e07502?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Brooch Work" />
                            <div className={styles.categoryOverlay}>
                                <h3>Brooch Work</h3>
                                <Link to="/works">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection} data-aos="fade-up">
                <div className="container text-center">
                    <h2>Ready to design your dream outfit?</h2>
                    <p>Contact us via WhatsApp to share your ideas and get a quote.</p>
                    <Button
                        variant="primary"
                        href="https://wa.me/917708552461"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Start Chatting
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
