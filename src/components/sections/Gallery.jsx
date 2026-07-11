import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';
import styles from './Gallery.module.css';

const galleryItems = [
  // Block 1 (Rows 1 & 2)
  { id: 1, type: 'video', src: '/workig1.mp4', size: 'large', title: 'Deep Cleaning Operations' },
  { id: 2, type: 'image', src: '/service_septic_tank_1783733470515.png', size: 'tall', title: 'Septic Tank Pumping' },
  { id: 3, type: 'image', src: '/service_drain_line_1783733491651.png', size: 'small', title: 'Drain Line Cleaning' },
  { id: 4, type: 'video', src: '/working 2.mp4', size: 'small', title: 'High-Pressure Jetting' },
  
  // Block 2 (Row 3)
  { id: 5, type: 'image', src: '/service_grease_trap_1783733503528.png', size: 'wide', title: 'Grease Trap Maintenance' },
  { id: 6, type: 'image', src: '/service_manhole_cleaning_1783733481452.png', size: 'wide', title: 'Manhole Unblocking' },

  // Block 3 (Row 4)
  { id: 7, type: 'video', src: '/working3.mp4', size: 'wide', title: 'Safety Standards' },
  { id: 8, type: 'video', src: '/working4.mp4', size: 'small', title: 'Expert Team' },
  { id: 9, type: 'image', src: '/service_soak_pit_1783733517513.png', size: 'small', title: 'Soak Pit Digging' },
];

export function Gallery() {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            <span>OUR WORK IN ACTION</span>
          </div>
          <h2 className={styles.title}>
            See Our <span className={styles.highlight}>Professionals</span> At Work
          </h2>
          <p className={styles.description}>
            Explore our extensive gallery of septic tank cleaning, drain maintenance, and high-pressure jetting services across Visakhapatnam.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.mediaCard} ${styles[item.size]}`}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  className={styles.mediaContent}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.mediaContent}
                />
              )}
              <div className={styles.overlay}>
                {item.type === 'video' ? (
                  <div className={styles.playIcon}>
                    <Play fill="currentColor" size={24} />
                  </div>
                ) : (
                  <div className={styles.imageIcon}>
                    <ImageIcon size={24} />
                  </div>
                )}
                <h3 className={styles.mediaTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
