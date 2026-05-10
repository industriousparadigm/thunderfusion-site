'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { sectionHeaders } from '../data/copy'
import { softwareFeature, softwareItems, type SoftwareItem as SoftwareItemData } from '../data/software'
import { EASE } from '../lib/animations'
import SectionHeader from './SectionHeader'
import styles from './Software.module.css'

export default function Software() {
    const header = sectionHeaders.software

    return (
        <section id="software" className={styles.softwareSection}>
            <SectionHeader number={header.number} title={header.title} meta={header.meta} onLight />

            <motion.div
                className={styles.softwareFeature}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: EASE }}
            >
                <div className={styles.softwareFeatureText}>
                    <span className={styles.softwareFeatureLabel}>Featured product</span>
                    <h3>
                        {softwareFeature.name}{' '}
                        <span className={styles.softwareOrg}>{softwareFeature.org}</span>
                    </h3>
                    <p>{softwareFeature.body}</p>
                </div>
                <div className={styles.softwareFeatureImage}>
                    <Image
                        src={softwareFeature.image.src}
                        alt={softwareFeature.image.alt}
                        width={softwareFeature.image.width}
                        height={softwareFeature.image.height}
                        sizes="(max-width: 768px) 100vw, 60vw"
                    />
                </div>
            </motion.div>

            <div className={styles.softwareList}>
                {softwareItems.map((item, i) => (
                    <SoftwareItem key={item.title} item={item} delay={i * 0.1} />
                ))}
            </div>
        </section>
    )
}

function SoftwareItem({ item, delay }: { item: SoftwareItemData; delay: number }) {
    return (
        <motion.div
            className={styles.softwareItem}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            <h3>
                {item.title} <span className={styles.softwareOrg}>{item.org}</span>
            </h3>
            <p>{item.body}</p>
        </motion.div>
    )
}
