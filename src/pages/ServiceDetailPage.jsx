import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import { CTAButton } from '../components/common/CTAButton';
import { buildWhatsAppLink } from '../utils/whatsapp';
import styles from './ServiceDetailPage.module.css';

export function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const found = services.find(s => s.id === id);
    if (found) {
      setService(found);
    } else {
      // Handle not found
      navigate('/');
    }
  }, [id, navigate]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <button onClick={() => navigate('/')} className={styles.backBtn}>
            <ArrowLeft size={20} /> Back to Home
          </button>
          
          <div className={styles.heroContent}>
            <div className={styles.iconWrapper}>
              <Icon size={48} />
            </div>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.subtitle}>{service.description}</p>
          </div>
        </div>
        <div className={styles.glowBg}></div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <div className={styles.detailImageWrapper}>
              <img src={service.image} alt={service.title} className={styles.detailImage} />
            </div>
            <h2>Service Overview</h2>
            <p className={styles.longDescription}>
              At Pavan Septic Tank Cleaning, we provide specialized {service.title.toLowerCase()} tailored to meet the exact needs of our clients. Our approach combines state-of-the-art equipment with years of hands-on expertise, ensuring a thorough and hygienic resolution to your sanitation requirements. We understand the urgency often associated with these services and are committed to delivering swift, reliable, and discreet solutions.
            </p>
            
            <h3>What's Included?</h3>
            <ul className={styles.featuresList}>
              <li><CheckCircle className={styles.checkIcon} size={20} /> Comprehensive inspection and assessment</li>
              <li><CheckCircle className={styles.checkIcon} size={20} /> Deployment of high-capacity vacuum trucks</li>
              <li><CheckCircle className={styles.checkIcon} size={20} /> Complete extraction and unblocking</li>
              <li><CheckCircle className={styles.checkIcon} size={20} /> Environmentally compliant waste disposal</li>
              <li><CheckCircle className={styles.checkIcon} size={20} /> Post-service hygiene check and deodorization</li>
            </ul>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.bookingCard}>
              <h3>Book This Service</h3>
              <p>Available 24/7 for immediate dispatch across Visakhapatnam.</p>
              
              <CTAButton 
                variant="primary" 
                href={buildWhatsAppLink('service', { service: service.title })}
                className={styles.bookBtn}
                target="_blank"
              >
                Book via WhatsApp
              </CTAButton>
              
              <div className={styles.orDivider}><span>or</span></div>
              
              <CTAButton 
                variant="outline" 
                href="tel:9133555252"
                className={styles.callBtn}
              >
                Call 9133555252
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
