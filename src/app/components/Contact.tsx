'use client'

import { motion } from 'framer-motion'
import { contactCtas, sectionHeaders } from '../data/copy'
import SectionHeader from './SectionHeader'
import styles from './Contact.module.css'

export default function Contact() {
    const header = sectionHeaders.contact

    return (
        <section id="contact" className={styles.contactSection}>
            <SectionHeader number={header.number} title={header.title} meta={header.meta} />

            <div className={styles.contactSplit}>
                {contactCtas.map((card, i) => {
                    const accentClass = card.accent === 'pink' ? styles.contactPink : styles.contactCyan
                    return (
                        <motion.a
                            key={card.label}
                            href={card.mailto}
                            className={`${styles.contactCard} ${accentClass}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <span className={styles.contactLabel}>{card.label}</span>
                            <span className={styles.contactCta}>{card.cta}</span>
                            <span className={styles.contactArrow} aria-hidden>
                                ↗
                            </span>
                        </motion.a>
                    )
                })}
            </div>
        </section>
    )
}
