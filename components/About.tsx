"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Terminal, Briefcase, Layers, FileCode2, Puzzle, Award, Smartphone } from "lucide-react";
import styles from "./About.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  const skills = [
    { name: "C# & .NET Core", icon: <Terminal size={24} />, category: "Backend" },
    { name: "React & Next.js", icon: <Code2 size={24} />, category: "Frontend" },
    { name: "React Native & Expo", icon: <Smartphone size={24} />, category: "Mobile" },
    { name: "SQL Server & EF Core", icon: <Database size={24} />, category: "Database" },
    { name: "Onion & Monolithic", icon: <Layers size={24} />, category: "Architecture" },
    { name: "Core Principles", icon: <Puzzle size={24} />, category: "SOLID, DRY, KISS" },
    { name: "Swagger API Docs", icon: <FileCode2 size={24} />, category: "Documentation" },
  ];

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        
        {/* ABOUT ME SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeader}
        >
          <span className="section-subtitle">{t.about.discover}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className={styles.bioGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`glass ${styles.bioCard}`}
          >
            <div className={styles.iconWrapper}>
              <GraduationCap size={32} className={styles.accentIcon} />
            </div>
            <h3 className={styles.cardTitle}>{t.about.academicTitle}</h3>
            <h4 className={styles.schoolName}>{t.about.academicSchool}</h4>
            <p className={styles.degree}>{t.about.academicDegree}</p>
            <p className={styles.year}>{t.about.academicYear}</p>
            
            <p className={styles.bioText}>
              {t.about.academicDesc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`glass ${styles.bioCard}`}
          >
            <div className={styles.iconWrapper}>
              <Briefcase size={32} className={styles.accentIcon} />
            </div>
            <h3 className={styles.cardTitle}>{t.about.workTitle}</h3>
            <h4 className={styles.schoolName}>{t.about.workSchool}</h4>
            <p className={styles.degree}>{t.about.workDegree}</p>
            <p className={styles.year}>{t.about.workYear}</p>
            
            <p className={styles.bioText}>
              {t.about.workDesc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`glass ${styles.bioCard}`}
          >
            <div className={styles.iconWrapper}>
              <Award size={32} className={styles.accentIcon} />
            </div>
            <h3 className={styles.cardTitle}>{t.about.certTitle}</h3>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 className={styles.schoolName}>Cisco Networking Academy</h4>
              <p className={styles.degree}>CPA: Programming Essentials in C++</p>
            </div>

            <div>
              <h4 className={styles.schoolName}>Instituto Tecnológico de las Américas (ITLA)</h4>
              <p className={styles.degree}>Programación Junior en Python</p>
            </div>
          </motion.div>
        </div>

        {/* SKILLS SECTION */}
        <motion.div 
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeader}
          style={{ marginTop: "6rem", scrollMarginTop: "6rem" }}
        >
          <span className="section-subtitle">{t.about.technicalArsenal}</span>
          <h2 className="section-title">{t.about.mySkills}</h2>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass ${styles.skillCard}`}
            >
              <div className={styles.skillIcon}>
                {skill.icon}
              </div>
              <div>
                <h4 className={styles.skillName}>{skill.name}</h4>
                <span className={styles.skillCategory}>{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
