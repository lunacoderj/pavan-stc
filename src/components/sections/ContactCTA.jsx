import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { areas } from '../../data/areas';
import { services } from '../../data/services';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Pavan Septic Cleaning,\nI need assistance.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService Required: ${formData.service}\nLocation: ${formData.location}\n\nPlease let me know when you can arrive.`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/91${BUSINESS.phone}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className={styles.contactCTA}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.splitGrid}>
          {/* Left Side: Info */}
          <div className={styles.infoContent}>
            <div className={styles.badge}>Fast Response</div>
            <h2 className={styles.title}>
              Need Emergency <span className={styles.highlight}>Service?</span>
            </h2>
            <p className={styles.subtitle}>
              We're available 24/7 across Visakhapatnam. Fill out the form to instantly reach our team on WhatsApp, or call us directly.
            </p>
            
            <div className={styles.contactCards}>
              <a href={`tel:${BUSINESS.phone}`} className={styles.contactCard}>
                <div className={styles.iconBox}><Phone size={24} /></div>
                <div>
                  <span className={styles.cardLabel}>Call Us 24/7</span>
                  <span className={styles.cardValue}>{BUSINESS.phone}</span>
                </div>
              </a>
              <div className={styles.contactCard}>
                <div className={styles.iconBox}><Clock size={24} /></div>
                <div>
                  <span className={styles.cardLabel}>Operating Hours</span>
                  <span className={styles.cardValue}>24 Hours / 7 Days</span>
                </div>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div>
                  <span className={styles.cardLabel}>Main Location</span>
                  <span className={styles.cardValue}>{BUSINESS.city}, {BUSINESS.region}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleWhatsAppSubmit} className={styles.contactForm}>
              <h3 className={styles.formTitle}>Request a Callback</h3>
              
              <div className={styles.inputGroup}>
                <label>Your Name</label>
                <input type="text" name="name" required placeholder="e.g. Raju" onChange={handleChange} />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" required placeholder="e.g. 9876543210" onChange={handleChange} />
              </div>

              <div className={styles.inputGroup}>
                <label>Service Required</label>
                <select name="service" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select a service...</option>
                  {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Your Location (Visakhapatnam)</label>
                <select name="location" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select your area...</option>
                  {areas.map(a => (
                    <optgroup key={a.name} label={a.name}>
                      {a.localities.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </optgroup>
                  ))}
                  <option value="Outside Vizag">Outside Vizag</option>
                </select>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send size={18} /> Send via WhatsApp
              </button>
              <p className={styles.secureText}><CheckCircle2 size={14} /> We respect your privacy.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
