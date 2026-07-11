import React from 'react';
import { Shield, Wrench, Leaf, Heart, ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { CTAButton } from '../components/common/CTAButton';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>About Pavan Septic Tank Cleaning</h1>
          <p className={styles.heroSubtitle}>
            Dedicated to maintaining hygiene, safety, and a cleaner environment in Visakhapatnam since our inception.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Our <span className={styles.highlight}>Story</span>
              </h2>
              <p className={styles.text}>
                Founded with a mission to bring professional and sanitary septic tank cleaning services to Visakhapatnam, Pavan Septic Tank Cleaning has grown to become the region's most trusted name in waste management and drain care. 
              </p>
              <p className={styles.text}>
                We understand that maintaining a clean and functional septic system is crucial for both residential and commercial properties. Our commitment to utilizing the latest technology, combined with our highly trained workforce, ensures that every job is completed with the highest standards of safety and efficiency.
              </p>

              <h3 className={styles.subtitle}>Why Choose Us?</h3>
              <ul className={styles.list}>
                <li><CheckCircle className={styles.listIcon} size={20} /> <strong>10+ Years of Experience:</strong> A decade of trusted service in Visakhapatnam.</li>
                <li><CheckCircle className={styles.listIcon} size={20} /> <strong>Modern Fleet:</strong> High-capacity vacuum tankers equipped for any job size.</li>
                <li><CheckCircle className={styles.listIcon} size={20} /> <strong>Eco-Friendly Disposal:</strong> Responsible waste management in compliance with all local regulations.</li>
                <li><CheckCircle className={styles.listIcon} size={20} /> <strong>Transparent Pricing:</strong> No hidden costs, just honest and competitive rates.</li>
              </ul>
            </div>

            <div className={styles.imageContent}>
              <img src="/poster.png" alt="Our team at work" className={styles.mainImage} />
              
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <Users className={styles.statIcon} size={32} />
                  <span className={styles.statNumber}>1,000+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statCard}>
                  <Award className={styles.statIcon} size={32} />
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
                <div className={styles.statCard}>
                  <Clock className={styles.statIcon} size={32} />
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Emergency Support</span>
                </div>
                <div className={styles.statCard}>
                  <Shield className={styles.statIcon} size={32} />
                  <span className={styles.statNumber}>Top</span>
                  <span className={styles.statLabel}>Safety Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={`container ${styles.container}`}>
          <h2 className={styles.titleCenter}>Our Core <span className={styles.highlight}>Values</span></h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Shield size={32} />
              </div>
              <h3 className={styles.valueTitle}>Integrity</h3>
              <p className={styles.valueDesc}>We believe in honest communication and transparent pricing with every client.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Wrench size={32} />
              </div>
              <h3 className={styles.valueTitle}>Excellence</h3>
              <p className={styles.valueDesc}>Delivering top-tier service through continuous training and upgrading our equipment.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Leaf size={32} />
              </div>
              <h3 className={styles.valueTitle}>Sustainability</h3>
              <p className={styles.valueDesc}>Committed to eco-friendly practices that protect Visakhapatnam's beautiful environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2 className={styles.ctaTitle}>Ready to Experience Professional Service?</h2>
          <p className={styles.ctaDesc}>Get in touch with us today for a free quote or emergency assistance.</p>
          <CTAButton variant="primary" href="/#contact" className={styles.ctaBtn}>
            Contact Us Now <ArrowRight size={18} />
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
