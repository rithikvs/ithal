import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <motion.div 
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.logoText}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '2rem', color: '#B76E79' }}>
          Fancy Creations
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
