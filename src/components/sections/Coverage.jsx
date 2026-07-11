import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { areas as serviceAreas } from '../../data/areas';
import styles from './Coverage.module.css';

export function Coverage() {
  const [openRegion, setOpenRegion] = useState(serviceAreas[0]?.name);

  const toggleRegion = (region) => {
    setOpenRegion(openRegion === region ? null : region);
  };

  return (
    <section id="coverage" className={styles.coverageSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <MapPin size={32} />
          </div>
          <h2 className={styles.title}>Service <span className={styles.highlight}>Coverage</span></h2>
          <p className={styles.subtitle}>
            Operating across Visakhapatnam with rapid response teams stationed in key zones. We guarantee prompt arrivals for both scheduled maintenance and emergency interventions.
          </p>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Major Zones Covered</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>&lt; 60 Min</span>
              <span className={styles.statLabel}>Avg Response Time</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Emergency Support</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Map Side (Visual representation) */}
          <div className={styles.mapSide}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243209.68652494514!2d83.13123848149811!3d17.738686616422325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389b69735%3A0xe314842521c7b500!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701198544062!5m2!1sen!2sin"
                className={styles.googleMap}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pavan Septic Service Area Map"
              ></iframe>
              <div className={styles.mapPlaceholder}>
                <div className={styles.radar}></div>
                <div className={styles.centerPinWrapper}>
                  <MapPin size={40} className={styles.centerPin} />
                  <div className={styles.centerPulse}></div>
                </div>
                <div className={styles.ping1}></div>
                <div className={styles.ping2}></div>
                <div className={styles.ping3}></div>
                <div className={styles.mapOverlay}>
                  <p>Visakhapatnam</p>
                  <span>Active Zones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Side */}
          <div className={styles.accordionSide}>
            <div className={styles.accordion}>
              {serviceAreas.map((area) => (
                <div 
                  key={area.name} 
                  className={`${styles.accordionItem} ${openRegion === area.name ? styles.open : ''}`}
                >
                  <button 
                    className={styles.accordionHeader}
                    onClick={() => toggleRegion(area.name)}
                    aria-expanded={openRegion === area.name}
                  >
                    <span className={styles.regionName}>{area.name}</span>
                    {openRegion === area.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  <div className={styles.accordionContent}>
                    <div className={styles.accordionContentInner}>
                      <ul className={styles.locationList}>
                        {area.localities.map((location, i) => (
                          <li key={i} className={styles.locationItem}>
                            <div className={styles.dot}></div>
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
