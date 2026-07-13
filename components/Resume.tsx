"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import styles from "./Resume.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Resume() {
  const { t } = useLanguage();

  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={`container ${styles.resumeContainer}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <span className="section-subtitle">{t.resume.subtitle}</span>
          <h2 className="section-title">{t.resume.title}</h2>
        </motion.div>

        <motion.div 
          className={styles.pdfWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            src="/Cv.pdf" 
            title="Hanier Peguero Resume"
            loading="lazy"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="/Cv.pdf" target="_blank" download="Hanier_Peguero_CV.pdf" className="btn btn-primary">
            <Download size={18} /> {t.resume.download}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
