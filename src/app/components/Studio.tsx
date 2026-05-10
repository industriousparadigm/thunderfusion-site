'use client'

import { motion } from 'framer-motion'
import { sectionHeaders } from '../data/copy'
import { founders, type Founder } from '../data/studio'
import { EASE } from '../lib/animations'
import SectionHeader from './SectionHeader'
import styles from './Studio.module.css'

export default function Studio() {
    const header = sectionHeaders.studio

    return (
        <section id="studio" className={styles.studioSection}>
            <SectionHeader number={header.number} title={header.title} meta={header.meta} />

            <div className={styles.studioGrid}>
                {founders.map((founder, i) => (
                    <StudioCard key={founder.name} founder={founder} delay={i * 0.15} />
                ))}
            </div>
        </section>
    )
}

function StudioCard({ founder, delay }: { founder: Founder; delay: number }) {
    const accentClass = founder.accent === 'pink' ? styles.initialPink : styles.initialCyan
    return (
        <motion.div
            className={styles.studioCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            <span className={`${styles.studioInitial} ${accentClass}`} aria-hidden>
                {founder.initial}
            </span>
            <div className={styles.studioContent}>
                <p className={styles.studioRole}>{founder.role}</p>
                <h3>{founder.name}</h3>
                <p className={styles.studioBody}>{founder.body}</p>
                <div className={styles.studioLinks}>
                    <a href={founder.mailto}>Email</a>
                    {founder.linkedin && (
                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
