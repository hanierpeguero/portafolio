"use client";

import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.greeting}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.title}
          >
            Hanier Peguero
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.subtitle}
          >
            Software Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.description}
          >
            Software Developer focused on building scalable systems (Web, Mobile, and Backend). With solid engineering foundations and experience working with modern architectures. Looking to join a dynamic team where I can provide immediate value, audit and optimize solutions, and continue my professional growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.actions}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={18} />
            </a>
            <a href="/Cv.pdf" target="_blank" download="Hanier_Peguero_CV.pdf" className="btn btn-outline">
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={styles.imageContainer}
        >
          <div className={styles.glowEffect}></div>
          <div className={styles.abstractShape}>
            <div className={styles.shapeInner}>&lt;hp/&gt;</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
