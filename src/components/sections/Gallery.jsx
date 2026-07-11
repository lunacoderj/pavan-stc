import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import styles from './Gallery.module.css';

const videos = [
  { id: 1, src: '/workig1.mp4', type: 'large', title: 'Deep Cleaning Operations' },
  { id: 2, src: '/working 2.mp4', type: 'wide', title: 'High-Pressure Jetting' },
  { id: 3, src: '/working3.mp4', type: 'small', title: 'Safety First' },
  { id: 4, src: '/working4.mp4', type: 'small', title: 'Expert Team' }
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
            Watch our expert team deliver high-quality cleaning and maintenance services across Visakhapatnam.
          </p>
        </div>

        <div className={styles.grid}>
          {videos.map((video) => (
            <div 
              key={video.id} 
              className={`${styles.videoCard} ${styles[video.type]}`}
            >
              <video 
                src={video.src} 
                className={styles.videoPlayer}
                autoPlay 
                muted 
                loop 
                playsInline
              />
              <div className={styles.overlay}>
                <div className={styles.playIcon}>
                  <Play fill="currentColor" size={24} />
                </div>
                <h3 className={styles.videoTitle}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
