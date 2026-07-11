import React from 'react';
import { PhoneCall, Truck, Wrench, CheckCircle } from 'lucide-react';
import styles from './Process.module.css';

const steps = [
  {
    icon: PhoneCall,
    title: '1. Fast Booking',
    description: 'Call or WhatsApp us. We provide an immediate estimate and dispatch our nearest vehicle.'
  },
  {
    icon: Truck,
    title: '2. Rapid Arrival',
    description: 'Our fully-equipped vacuum truck and trained crew arrive promptly at your location.'
  },
  {
    icon: Wrench,
    title: '3. Clean & Clear',
    description: 'We safely extract all waste, clear blockages, and ensure the area is hygienic.'
  },
  {
    icon: CheckCircle,
    title: '4. Safe Disposal',
    description: 'Waste is transported and disposed of strictly according to municipal environmental guidelines.'
  }
];

export function Process() {
  return (
    <section id="process" className={styles.processSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>How It <span className={styles.highlight}>Works</span></h2>
          <p className={styles.subtitle}>Our streamlined process ensures minimal disruption to your day.</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={styles.step}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  {index < steps.length - 1 && <div className={styles.line}></div>}
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
