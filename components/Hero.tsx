"use client";

import { motion, Variants } from "framer-motion";
import { ChevronRight, Download, FileText } from "lucide-react";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const shapeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 } 
  },
};

export default function Hero() {
  const { t, language } = useLanguage();
  const pdfSrc = language === "es" ? "/Cv_es.pdf" : "/Cv_en.pdf";

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className={styles.greeting}>
            {t.hero.greeting}
          </motion.p>
          
          <motion.h1 variants={itemVariants} className={styles.title}>
            {t.hero.name}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className={styles.subtitle}>
            {t.hero.role}
          </motion.h2>
          
          <motion.p variants={itemVariants} className={styles.description}>
            {t.hero.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.actions}>
            <div className={styles.mainActions}>
              <a href="#projects" className="btn btn-primary">
                {t.hero.viewWork} <ChevronRight size={18} />
              </a>
              <a href="#resume" className="btn btn-outline">
                <FileText size={18} /> {t.hero.viewResume}
              </a>
            </div>
            <div className={styles.socialActions}>
              <a href={pdfSrc} target="_blank" download={`Hanier_Peguero_CV_${language.toUpperCase()}.pdf`} className={`btn btn-outline ${styles.iconBtn}`} title="Download CV">
                <Download size={18} />
              </a>
              <a href="https://github.com/hanierpeguero" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.iconBtn}`} title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/hanier-peguero-566b90306" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.iconBtn}`} title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.imageContainer}
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.glowEffect}></div>
          <div className={styles.minimalistShape}>
            <div className={styles.ring1}></div>
            <div className={styles.ring2}></div>
            <div className={styles.ring3}></div>
            <div className={styles.centerDot}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
