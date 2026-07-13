"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Layers } from "lucide-react";
import styles from "./Projects.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = t.projects.list;

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeader}
        >
          <span className="section-subtitle">{t.projects.subtitle}</span>
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass ${styles.projectCard}`}
            >
              <div className={styles.cardHeader}>
                <Layers size={32} className={styles.projectIcon} />
                <div className={styles.projectLinks}>
                  {project.repo && project.repo !== "" && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Source Code">
                      <Code size={20} />
                    </a>
                  )}
                  {project.demo && project.demo !== "" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>
                {project.demo && project.demo !== "" ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {project.title}
                  </a>
                ) : project.repo && project.repo !== "" ? (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className={styles.projectTech}>{project.tech}</p>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.projectTags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
