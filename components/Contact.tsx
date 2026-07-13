"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import styles from "./Contact.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const subject = encodeURIComponent(`Contact from ${formData.name} (Portfolio)`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:hanierp80@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeader}
        >
          <span className="section-subtitle">{t.contact.subtitle}</span>
          <h2 className="section-title">{t.contact.title}</h2>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`glass ${styles.contactInfo}`}
          >
            <h3 className={styles.infoTitle}>{t.contact.infoTitle}</h3>
            <p className={styles.infoDesc}>
              {t.contact.infoDesc}
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={styles.itemLabel}>{t.contact.email}</p>
                  <a href="mailto:hanierp80@gmail.com" className={styles.itemValue}>hanierp80@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className={styles.itemLabel}>Phone</p>
                  <a href="tel:8296457322" className={styles.itemValue}>829-645-7322</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={styles.itemLabel}>{t.contact.location}</p>
                  <p className={styles.itemValue}>{t.contact.country}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`glass ${styles.contactFormContainer}`}
          >
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>{t.contact.name}</label>
                <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={styles.input} placeholder={t.contact.name} />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>{t.contact.email}</label>
                <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={styles.input} placeholder={t.contact.email} />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>{t.contact.message}</label>
                <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={styles.textarea} placeholder={t.contact.message}></textarea>
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                {t.contact.send} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
