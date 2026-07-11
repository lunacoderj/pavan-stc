import React from 'react';
import { PhoneCall, ArrowRight, Clock, Settings, ShieldCheck, Leaf, Home, Building2, Factory } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { CTAButton } from '../common/CTAButton';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Real Background Image */}
      <div className={styles.background}>
        <img 
          src="/herobg.png" 
          alt="Pavan Septic Tank Cleaning in action" 
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <ShieldCheck size={16} className={styles.badgeIcon} />
            <span>PROFESSIONAL. RELIABLE. HYGIENIC.</span>
          </div>

          <h1 className={styles.title}>
            CLEAN TANK.<br/>
            <span className={styles.highlight}>CLEAN LIFE.</span><br/>
            COMPLETE PEACE<br/>
            OF MIND.
          </h1>

          <p className={styles.subtitle}>
            Professional septic tank cleaning and drain care services in Visakhapatnam with modern equipment and experienced team.
          </p>

          <div className={styles.actions}>
            <CTAButton 
              variant="primary" 
              href={`tel:${BUSINESS.phone}`}
              className={styles.mainBtn}
            >
              <PhoneCall size={20} />
              CALL {BUSINESS.phone}
            </CTAButton>
            
            <CTAButton 
              variant="outlineGold" 
              href="#services"
              className={styles.secondaryBtn}
            >
              OUR SERVICES <ArrowRight size={18} />
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Floating Info Boxes */}
      <div className={`container ${styles.floatingBoxesContainer}`}>
        <div className={styles.floatingBoxLeft}>
          <div className={styles.featureItem}>
            <Clock size={32} className={styles.featureIcon} />
            <span className={styles.featureTitle}>24/7<br/>SERVICE</span>
          </div>
          <div className={styles.featureItem}>
            <Settings size={32} className={styles.featureIcon} />
            <span className={styles.featureTitle}>MODERN<br/>EQUIPMENT</span>
          </div>
          <div className={styles.featureItem}>
            <ShieldCheck size={32} className={styles.featureIcon} />
            <span className={styles.featureTitle}>TRAINED<br/>EXPERTS</span>
          </div>
          <div className={styles.featureItem}>
            <Leaf size={32} className={styles.featureIcon} />
            <span className={styles.featureTitle}>ECO<br/>FRIENDLY</span>
          </div>
        </div>

        <div className={styles.floatingBoxRight}>
          <div className={styles.trustedTop}>
            <ShieldCheck size={48} className={styles.trustedIcon} />
            <div>
              <div className={styles.trustedTitle}>VISAKHAPATNAM'S<br/>MOST TRUSTED</div>
              <div className={styles.trustedHighlight}>SEPTIC TANK CLEANING SERVICE</div>
            </div>
          </div>
          <div className={styles.trustedBottom}>
            <div className={styles.trustedSector}>
              <Home size={16} /> RESIDENTIAL
            </div>
            <div className={styles.trustedSector}>
              <Building2 size={16} /> COMMERCIAL
            </div>
            <div className={styles.trustedSector}>
              <Factory size={16} /> INDUSTRIAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
