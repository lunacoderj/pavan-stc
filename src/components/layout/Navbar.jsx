import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS } from '../../config/business';
import { CTAButton } from '../common/CTAButton';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={handleNavClick}>
          <img src="/logo.png" alt="Pavan Septic Tank Cleaning" className={styles.logoImg} />
          <div className={styles.logoTextGroup}>
            <span className={styles.logoText}>PAVAN</span>
            <span className={styles.logoSubtext}>SEPTIC TANK CLEANING</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <a href="/#about" className={styles.navLink}>About</a>
          <a href="/#services" className={styles.navLink}>Services</a>
          <a href="/#testimonials" className={styles.navLink}>Reviews</a>
          <a href="/#contact" className={styles.navLink}>Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          <CTAButton 
            variant="primary" 
            href={`tel:${BUSINESS.phone}`}
            className={styles.callBtn}
          >
            <Phone size={18} />
            {BUSINESS.phone}
          </CTAButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Slide from Right */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <Link to="/" className={styles.mobileNavLink} onClick={handleNavClick}>Home</Link>
          <a href="/#about" className={styles.mobileNavLink} onClick={handleNavClick}>About</a>
          <a href="/#services" className={styles.mobileNavLink} onClick={handleNavClick}>Services</a>
          <a href="/#testimonials" className={styles.mobileNavLink} onClick={handleNavClick}>Reviews</a>
          <a href="/#contact" className={styles.mobileNavLink} onClick={handleNavClick}>Contact</a>
          
          <div className={styles.mobileActionContainer}>
            <CTAButton 
              variant="primary" 
              href={`tel:${BUSINESS.phone}`}
              className={styles.mobileCallBtn}
            >
              <Phone size={20} />
              Call Now
            </CTAButton>
          </div>
        </nav>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={handleNavClick}></div>
      )}
    </header>
  );
}
