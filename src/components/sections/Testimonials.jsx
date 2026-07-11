import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

// Google brand colors
const avatarColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.googleBadge}>
            <div className={styles.googleIconWrapper}>
              <span className={styles.googleG}>G</span>
            </div>
            <div className={styles.googleRating}>
              <span className={styles.ratingNumber}>4.9</span>
              <div className={styles.headerStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={styles.star} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>
              <span className={styles.reviewCount}>15+ Reviews</span>
            </div>
          </div>
          <h2 className={styles.title}>What Our <span className={styles.highlight}>Customers Say</span></h2>
          <p className={styles.subtitle}>Trusted by residential and commercial properties across Visakhapatnam.</p>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const avatarColor = avatarColors[index % avatarColors.length];
              return (
                <div key={`${testimonial.id}-${index}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.author}>
                      <div 
                        className={styles.avatar} 
                        style={{ borderColor: avatarColor }}
                      >
                        <div 
                          className={styles.avatarInner}
                          style={{ backgroundColor: avatarColor }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className={styles.authorName}>{testimonial.name}</h4>
                        <div className={styles.stars}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className={styles.star} fill="#FBBC05" color="#FBBC05" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.googleGIcon}>G</div>
                  </div>
                  
                  <p className={styles.content}>{testimonial.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
