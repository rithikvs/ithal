import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>

                {/* Brand Section */}
                <div className={styles.brandSection}>
                    <h2 className={styles.logo}>Ethal Creations</h2>
                    <p className={styles.tagline}>Handcrafted Elegance in Every Stitch.<br />
                    <span style={{fontWeight: 500}}>Courier service available to and from your location.</span></p>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/ethalya_rubini/" className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Links Section */}
                <div className={styles.linksSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/works">Our Works</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className={styles.contactSection}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <Phone size={16} /> <span>+91 77085 52461</span>
                        </li>
                        <li>
                            <Mail size={16} /> <span>indhugopi2007@gmail.com</span>
                        </li>
                        <li>
                            <MapPin size={16} /> <span>123, Boutique Street, Fashion City.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Ethal Creations.Explore more and order more ❤️.</p>
            </div>
        </footer>
    );
};

export default Footer;
