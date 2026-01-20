import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Works', path: '/works' },
        { name: 'Services', path: '/services' },
        { name: 'Order Guide', path: '/order' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo}>
                    Ithal Creations
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                </ul>

                {/* Mobile Toggle */}
                <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={styles.mobileMenu}
                        >
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) => isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="https://wa.me/917708552461"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mobileBtn}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Order on WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
