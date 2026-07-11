import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../../data/services';
import { CTAButton } from '../common/CTAButton';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import styles from './Services.module.css';

export function Services() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Our Core <span className={styles.highlight}>Services</span></h2>
            <p className={styles.subtitle}>Specialized solutions for every scale of operation.</p>
          </div>
          
          <div className={styles.navButtons}>
            <button 
              className={styles.navBtn} 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.navBtn} 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollWrapper}>
        <div 
          className={styles.cardsContainer} 
          ref={scrollRef} 
          onScroll={checkScroll}
        >
          {/* Spacer for container alignment */}
          <div className={styles.spacer}></div>
          
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className={styles.card}>
                <div className={styles.imageArea}>
                  <img src={service.image} alt={service.title} className={styles.serviceImage} />
                  <div className={styles.iconBadge}>
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className={styles.contentArea}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  
                  <div className={styles.actions}>
                    <CTAButton 
                      variant="outline" 
                      className={styles.bookBtn}
                      href={buildWhatsAppLink('service', { service: service.title })}
                      target="_blank"
                    >
                      Book Now
                    </CTAButton>
                    <a href={`/services/${service.id}`} className={styles.learnMore}>
                      Details <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Spacer for container alignment */}
          <div className={styles.spacer}></div>
        </div>
      </div>
    </section>
  );
}
