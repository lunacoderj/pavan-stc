import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topGradient}></div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <img src="/logo.png" alt="Pavan Septic Tank Cleaning" className={styles.logoImg} />
              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>PAVAN</span>
                <span className={styles.logoSubtext}>SEPTIC TANK CLEANING</span>
              </div>
            </div>
            <p className={styles.description}>
              {BUSINESS.tagline}. Rapid response and high-capacity drainage services across Visakhapatnam.
            </p>
          </div>

          {/* Links Col */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li><a href="/" className={styles.link}>Home</a></li>
              <li><a href="/#about" className={styles.link}>About Us</a></li>
              <li><a href="/#services" className={styles.link}>Our Services</a></li>
              <li><a href="/#coverage" className={styles.link}>Service Areas</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><a href="/#services" className={styles.link}>Residential <ArrowUpRight size={14}/></a></li>
              <li><a href="/#services" className={styles.link}>Apartments <ArrowUpRight size={14}/></a></li>
              <li><a href="/#services" className={styles.link}>Commercial <ArrowUpRight size={14}/></a></li>
              <li><a href="/#services" className={styles.link}>Municipal <ArrowUpRight size={14}/></a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact</h3>
            
            <a href={`tel:${BUSINESS.phone}`} className={styles.contactItem}>
              <Phone size={18} className={styles.icon} />
              <span>{BUSINESS.phone}</span>
            </a>
            
            <div className={styles.contactItem}>
              <MapPin size={18} className={styles.icon} />
              <span>{BUSINESS.city}, {BUSINESS.region}</span>
            </div>
            
            <div className={styles.contactItem}>
              <Clock size={18} className={styles.icon} />
              <span>24/7 Emergency Service</span>
            </div>
          </div>

        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {currentYear} {BUSINESS.name}. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
