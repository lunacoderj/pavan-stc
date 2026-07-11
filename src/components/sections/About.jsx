import React from 'react';
import { Shield, Wrench, Leaf, Heart, ArrowRight } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Content Side */}
          <div className={styles.contentSide}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine}></span>
              <span>ABOUT US</span>
            </div>

            <h2 className={styles.title}>
              Your Hygiene Is <br />
              <span className={styles.highlight}>Our Responsibility</span>
            </h2>
            
            <p className={styles.description}>
              Pavan Septic Tank Cleaning is a trusted name in septic tank and sanitation services. We are committed to providing safe, fast, and efficient cleaning solutions with a focus on hygiene and customer satisfaction.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <Shield size={22} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Experienced Professionals</h4>
                  <p className={styles.featureDesc}>Our trained team handles every job with care and expertise.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <Wrench size={22} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Modern Equipment</h4>
                  <p className={styles.featureDesc}>We use advanced machines for deep and thorough cleaning.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <Leaf size={22} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Safe & Eco-Friendly</h4>
                  <p className={styles.featureDesc}>We follow environmentally safe practices to keep your surroundings clean.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <Heart size={22} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Customer Satisfaction</h4>
                  <p className={styles.featureDesc}>We value our customers and ensure the best quality service every time.</p>
                </div>
              </div>
            </div>

            <CTAButton variant="primary" href="/about" className={styles.ctaBtn}>
              Learn More About Us <ArrowRight size={18} />
            </CTAButton>
          </div>

          {/* Image Side */}
          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <div className={styles.glowBg}></div>
              <div className={styles.imagePlaceholder}>
                <img src="/poster.png" alt="Pavan Septic Tank Cleaning Professional Services" className={styles.posterImage} />
              </div>
              <div className={styles.experienceBadge}>
                <span className={styles.expNumber}>10+</span>
                <span className={styles.expText}>Years of<br/>Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5000+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Emergency Service</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
