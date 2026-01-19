import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ShoppingBag } from 'lucide-react';
import styles from './Works.module.css';
import Button from '../components/UI/Button';

// Import local images
import image1 from '../assets/images/001.jpg';
import image2 from '../assets/images/002.jpg';
import image3 from '../assets/images/003.jpg';

const categories = ["All", "Aari Work", "Bridal Works", "Brooch Work", "Blouse Designs", "Tailoring Designs"];

const worksData = [
    { id: 1, category: "Aari Work", image: image1, title: "Floral Aari Design" },
    { id: 2, category: "Bridal Works", image: image2, title: "Red Bridal Blouse" },
    { id: 3, category: "Brooch Work", image: image3, title: "Custom Gold Brooch" },
    { id: 4, category: "Tailoring Designs", image: image2, title: "Perfect Fit Salwar" },
    { id: 5, category: "Aari Work", image: image1, title: "Peacock Motif" },
    { id: 6, category: "Blouse Designs", image: image2, title: "Designer Back Neck" },
];

const Works = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredWorks = activeCategory === "All"
        ? worksData
        : worksData.filter(work => work.category === activeCategory);

    const whatsappLink = (title) => {
        const text = `Hello Fancy Creations, I am interested in this design: ${title}`;
        return `https://wa.me/917708552461?text=${encodeURIComponent(text)}`;
    };

    return (
        <div className={styles.worksPage}>
            <div className={styles.pageHeader}>
                <div className="container">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Masterpieces
                    </motion.h1>
                </div>
            </div>

            <div className="container section-padding">
                {/* Filter Buttons */}
                <div className={styles.filterContainer}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div className={styles.galleryGrid} layout>
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                className={styles.galleryItem}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.imageWrapper} onClick={() => setSelectedImage(work)}>
                                    <img src={work.image} alt={work.title} />
                                    <div className={styles.overlay}>
                                        <ZoomIn className={styles.icon} />
                                        <p>View Details</p>
                                    </div>
                                </div>
                                <div className={styles.workInfo}>
                                    <h3>{work.title}</h3>
                                    <Button
                                        variant="secondary"
                                        style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
                                        href={whatsappLink(work.title)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ShoppingBag size={14} style={{ marginRight: '5px' }} /> Order
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                                <X size={24} />
                            </button>
                            <img src={selectedImage.image} alt={selectedImage.title} />
                            <div className={styles.lightboxDetails}>
                                <h2>{selectedImage.title}</h2>
                                <a href={whatsappLink(selectedImage.title)} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">Order Now</Button>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Works;
