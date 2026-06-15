"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Layers } from "lucide-react";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "School Web System",
      tech: "Laravel + Filament",
      description: "Academic and financial management for a school. Role management, payments, PDF reports, and delinquency control based on a SaaS architecture.",
      tags: ["Laravel", "Filament", "SaaS", "Management"],
      repo: "#",
    },
    {
      title: "Artemis Banking",
      tech: ".NET 9",
      description: "Academic banking system designed for managing accounts, transactions, and business validations. Development focused on backend logic, layered architecture, and relational database persistence.",
      tags: [".NET 9", "Backend", "Layered Architecture", "SQL"],
      repo: "https://github.com/hanierpeguero/ArtemisBanking.git",
    },
    {
      title: "eVote360",
      tech: ".NET 9",
      description: "Electronic voting platform developed as a technology project. Implementation of authentication, user management, and voting process control with a focus on security, data integrity, and scalability.",
      tags: [".NET 9", "Security", "Authentication", "Scalability"],
      repo: "https://github.com/hanierpeguero/eVote360.git",
    }
  ];

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
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
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
                  {project.repo !== "#" && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Source Code">
                      <Code size={20} />
                    </a>
                  )}
                  <a href="#" className={styles.iconLink} aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>
                {project.repo !== "#" ? (
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
