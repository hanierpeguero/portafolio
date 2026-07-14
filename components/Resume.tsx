"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import styles from "./Resume.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Resume() {
  const { t, language } = useLanguage();
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pdfSrc = language === "es" ? "/Cv_es.pdf" : "/Cv_en.pdf";

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
            src={pdfSrc} 
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
          <div 
            style={{ position: "relative", display: "inline-block" }}
            ref={dropdownRef}
          >
            <button 
              className="btn btn-primary"
              onClick={() => setShowOptions(!showOptions)}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Download size={18} /> {t.resume.download} <ChevronDown size={16} />
            </button>
            
            {showOptions && (
              <div 
                style={{ 
                  position: "absolute", 
                  top: "100%", 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  marginTop: "10px",
                  background: "rgba(30, 41, 59, 0.95)", 
                  padding: "8px", 
                  borderRadius: "8px", 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "5px", 
                  minWidth: "150px", 
                  border: "1px solid rgba(255,255,255,0.1)", 
                  zIndex: 10,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                }}
              >
                <a 
                  href="/Cv_es.pdf" 
                  download="Hanier_Peguero_CV_ES.pdf" 
                  onClick={() => setShowOptions(false)}
                  style={{ color: "white", textDecoration: "none", padding: "10px", borderRadius: "4px", textAlign: "center", background: "rgba(255,255,255,0.05)", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  Español
                </a>
                <a 
                  href="/Cv_en.pdf" 
                  download="Hanier_Peguero_CV_EN.pdf" 
                  onClick={() => setShowOptions(false)}
                  style={{ color: "white", textDecoration: "none", padding: "10px", borderRadius: "4px", textAlign: "center", background: "rgba(255,255,255,0.05)", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  English
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
