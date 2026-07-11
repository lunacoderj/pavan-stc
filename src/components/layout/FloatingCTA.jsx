import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import styles from './FloatingCTA.module.css';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <a 
        href={buildWhatsAppLink('quickBook')}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.whatsapp}`}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className={styles.pulse}></span>
      </a>
      
      <a 
        href={`tel:${BUSINESS.phone}`}
        className={`${styles.btn} ${styles.phone}`}
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
