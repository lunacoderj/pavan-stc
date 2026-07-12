import React from 'react';
import { PhoneCall, ArrowRight, Clock, Users, Settings, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Container */}
      <div className={styles.bgContainer}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/poster.png" />
          <img 
            src="/herobg.png" 
            alt="Pavan Septic Tank Cleaning" 
            className={styles.bgImage}
          />
        </picture>
        {/* Gradient Mask Overlay */}
        <div className={styles.gradientMask}></div>
      </div>
      
      {/* Content Grid */}
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.contentGrid}>
          
          {/* Left Column: Content */}
          <div className={styles.textContent}>
            
            {/* Tagline */}
            <div className={styles.taglineWrapper}>
              <p className={styles.tagline}>
                Clean Tank, Healthy Life!
              </p>
            </div>
            
            {/* Brand Name */}
            <h1 className={styles.brandTitle}>
              PAVAN
            </h1>
            
            {/* Service Descriptor */}
            <p className={styles.serviceSubtitle}>
              SEPTIC CLEANERS
            </p>
            
            {/* Trust Badge */}
            <div className={styles.trustBadgeWrapper}>
              <div className={styles.trustBadge}>
                <p>Professional. Reliable. Hygienic.</p>
              </div>
            </div>
            
            {/* Description */}
            <p className={styles.description}>
              Professional septic tank cleaning and drain care services in Visakhapatnam with modern equipment and experienced team.
            </p>
            
            {/* Feature Grid */}
            <div className={styles.featureGrid}>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Clock size={28} className={styles.icon} />
                </div>
                <div className={styles.featureText}>
                  <h3>24/7 Service</h3>
                  <p>We are always here for you</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Users size={28} className={styles.icon} />
                </div>
                <div className={styles.featureText}>
                  <h3>Expert Team</h3>
                  <p>Trained & Experienced Professionals</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <Settings size={28} className={styles.icon} />
                </div>
                <div className={styles.featureText}>
                  <h3>Advanced Equipment</h3>
                  <p>Powerful Machines for Deep Cleaning</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <ShieldCheck size={28} className={styles.icon} />
                </div>
                <div className={styles.featureText}>
                  <h3>Safe & Hygienic</h3>
                  <p>Your Safety, Our Priority</p>
                </div>
              </div>
              
            </div>
            
            {/* CTA Section */}
            <div className={styles.ctaGroup}>
              <a href={`tel:${BUSINESS.phone}`} className={styles.primaryBtn}>
                <PhoneCall size={24} />
                <span>CALL {BUSINESS.phone}</span>
              </a>
              
              <a href="#services" className={styles.secondaryBtn}>
                <span>Our Services</span>
                <ArrowRight size={20} />
              </a>
            </div>
            
          </div>
          
          {/* Right Column: Empty to show background */}
          <div className={styles.emptyColumn}></div>
          
        </div>
      </div>
    </section>
  );
}
