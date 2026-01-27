import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Scissors, Heart } from 'lucide-react';
import styles from './Home.module.css';
import Button from '../components/UI/Button';
import logoImg from '../assets/images/logo.jpg';
import imageAari from '../assets/images/aari.jpg';
import imageBrooch from '../assets/images/brooch.jpg';
import imageAari1 from '../assets/images/fabric/4.jpg';
import heroVideo from '../assets/videos/hero.mp4';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <video
                    className={styles.heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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
                        Exclusive Aari Work, Brooch work & Fabric Painting
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
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1.15, opacity: 1 }}
                            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
                            className={styles.logoBox}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}
                        >
                            <img src={logoImg} alt="Logo" className={styles.logoImg} />
                        </motion.div>
                        <h2 className="section-title text-center">Welcome to Ethal Creations</h2>
                        <p className="section-subtitle text-center">Where tradition meets modern fashion</p>
                        <p className={styles.introText}>
                            At Ethal Creations, we specialize in bringing your dream outfits to life.
                            From intricate Aari embroidery to perfect-fit bridal blouses, our passion
                            is to make you look your best on your special days.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <div className={styles.categoryGrid}>
                        <div className={styles.categoryCard} data-aos="zoom-in">
                            <img src={imageAari} alt="Aari Work" />
                            <div className={styles.categoryOverlay}>
                                <h3>Aari Work</h3>
                                <Link to="/works?category=Aari Work">Explore</Link>
                            </div>
                        </div>
                        <div className={styles.categoryCard} data-aos="zoom-in" data-aos-delay="100">
                            <img src={imageBrooch} alt="Brooch works" />
                            <div className={styles.categoryOverlay}>
                                <h3>Brooch works</h3>
                                <Link to="/works?category=Brooch Work">Explore</Link>
                            </div>
                        </div>
                        <div className={styles.categoryCard} data-aos="zoom-in" data-aos-delay="200">
                            <img src={imageAari1} alt="Fabric Painting" />
                            <div className={styles.categoryOverlay}>
                                <h3>Fabric painting</h3>
                                <Link to="/works?category=Fabric Paint">Explore</Link>
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
                        variant="dark"
                        href="https://wa.me/919629741825"
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
