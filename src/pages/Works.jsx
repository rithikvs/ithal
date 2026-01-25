import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ShoppingBag } from 'lucide-react';
import styles from './Works.module.css';
import Button from '../components/UI/Button';


// Import all aari images
import aari1 from '../assets/images/aari/aari1.jpg';
import aari2 from '../assets/images/aari/aari2.jpg';
import aari3 from '../assets/images/aari/aari3.jpg';
import aari4 from '../assets/images/aari/aari4.jpg';
import aari5 from '../assets/images/aari/aari5.jpg';
import aari6 from '../assets/images/aari/aari6.jpg';
import aari7 from '../assets/images/aari/aari7.jpg';
import aari8 from '../assets/images/aari/aari8.jpg';
import aari9 from '../assets/images/aari/aari9.jpg';
import aari10 from '../assets/images/aari/aari10.jpg';
import aari11 from '../assets/images/aari/aari11.jpg';
import aari12 from '../assets/images/aari/aari12.jpg';
import aari13 from '../assets/images/aari/aari13.jpg';
import aari14 from '../assets/images/aari/aari14.jpg';
import aari15 from '../assets/images/aari/aari15.jpg';
import brooch1 from '../assets/images/brooch/1.jpeg';
import brooch2 from '../assets/images/brooch/2.jpeg';
import brooch3 from '../assets/images/brooch/3.jpeg';
import brooch4 from '../assets/images/brooch/4.jpeg';
import brooch5 from '../assets/images/brooch/5.jpeg';
import brooch6 from '../assets/images/brooch/6.jpeg';
import brooch7 from '../assets/images/brooch/7.jpeg';
import brooch8 from '../assets/images/brooch/8.jpeg';
import brooch9 from '../assets/images/brooch/9.jpeg';
import brooch10 from '../assets/images/brooch/10.jpeg';
import brooch11 from '../assets/images/brooch/11.jpeg';
import fabric1 from '../assets/images/fabric/1.jpg';
import fabric2 from '../assets/images/fabric/2.jpg';
import fabric3 from '../assets/images/fabric/3.jpg';
import fabric4 from '../assets/images/fabric/4.jpg';
import fabric5 from '../assets/images/fabric/5.jpg';
import fabric6 from '../assets/images/fabric/6.jpg';

const categories = ["Aari Work", "Brooch Work", "Fabric Paint"];

const worksData = [
    // Aari Work images
    { id: 1, category: "Aari Work", image: aari1, title: "Aari Work 1" },
    { id: 2, category: "Aari Work", image: aari2, title: "Aari Work 2" },
    { id: 3, category: "Aari Work", image: aari3, title: "Aari Work 3" },
    { id: 4, category: "Aari Work", image: aari4, title: "Aari Work 4" },
    { id: 5, category: "Aari Work", image: aari5, title: "Aari Work 5" },
    { id: 6, category: "Aari Work", image: aari6, title: "Aari Work 6" },
    { id: 7, category: "Aari Work", image: aari7, title: "Aari Work 7" },
    { id: 8, category: "Aari Work", image: aari8, title: "Aari Work 8" },
    { id: 9, category: "Aari Work", image: aari9, title: "Aari Work 9" },
    { id: 10, category: "Aari Work", image: aari10, title: "Aari Work 10" },
    { id: 11, category: "Aari Work", image: aari11, title: "Aari Work 11" },
    { id: 12, category: "Aari Work", image: aari12, title: "Aari Work 12" },
    { id: 13, category: "Aari Work", image: aari13, title: "Aari Work 13" },
    { id: 14, category: "Aari Work", image: aari14, title: "Aari Work 14" },
    { id: 15, category: "Aari Work", image: aari15, title: "Aari Work 15" },
    // Brooch Work
    { id: 16, category: "Brooch Work", image: brooch1, title: "Brooch Work 1" },
    { id: 17, category: "Brooch Work", image: brooch2, title: "Brooch Work 2" },
    { id: 18, category: "Brooch Work", image: brooch3, title: "Brooch Work 3" },
    { id: 19, category: "Brooch Work", image: brooch4, title: "Brooch Work 4" },
    { id: 20, category: "Brooch Work", image: brooch5, title: "Brooch Work 5" },
    { id: 21, category: "Brooch Work", image: brooch6, title: "Brooch Work 6" },
    { id: 22, category: "Brooch Work", image: brooch7, title: "Brooch Work 7" },
    { id: 23, category: "Brooch Work", image: brooch8, title: "Brooch Work 8" },
    { id: 24, category: "Brooch Work", image: brooch9, title: "Brooch Work 9" },
    { id: 25, category: "Brooch Work", image: brooch10, title: "Brooch Work 10" },
    { id: 26, category: "Brooch Work", image: brooch11, title: "Brooch Work 11" },
    // Fabric Paint
    { id: 27, category: "Fabric Paint", image: fabric1, title: "Fabric Paint 1" },
    { id: 28, category: "Fabric Paint", image: fabric2, title: "Fabric Paint 2" },
    { id: 29, category: "Fabric Paint", image: fabric3, title: "Fabric Paint 3" },
    { id: 30, category: "Fabric Paint", image: fabric4, title: "Fabric Paint 4" },
    { id: 31, category: "Fabric Paint", image: fabric5, title: "Fabric Paint 5" },
    { id: 32, category: "Fabric Paint", image: fabric6, title: "Fabric Paint 6" },

];

const Works = () => {
    const [activeCategory, setActiveCategory] = useState("Aari Work");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredWorks = worksData.filter(work => work.category === activeCategory);

    const whatsappLink = (title) => {
        const text = `Hello Ethal Creations, I am interested in this design: ${title}`;
        return `https://wa.me/919629741825?text=${encodeURIComponent(text)}`;
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
                                        <ShoppingBag size={14} style={{ marginRight: '5px' }} /> Order {work.title}
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
                                <Button
                                    variant="primary"
                                    href={whatsappLink(selectedImage.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Order {selectedImage.title}
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Works;
