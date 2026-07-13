"use client";

import { motion, Variants } from "framer-motion";
import { ChevronRight, Download, FileText, Github, Linkedin } from "lucide-react";
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
  const { t } = useLanguage();

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
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewWork} <ChevronRight size={18} />
            </a>
            <a href="#resume" className="btn btn-outline">
              <FileText size={18} /> {t.hero.viewResume}
            </a>
            <a href="/Cv.pdf" target="_blank" download="Hanier_Peguero_CV.pdf" className={`btn btn-outline ${styles.downloadBtn}`} title="Download CV">
              <Download size={18} />
            </a>
            <a href="https://github.com/hanierpeguero" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.downloadBtn}`} title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/hanier-peguero-566b90306" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.downloadBtn}`} title="LinkedIn">
              <Linkedin size={18} />
            </a>
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
