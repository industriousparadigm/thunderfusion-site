'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { sectionHeaders } from '../data/copy'
import {
    softwareFeatures,
    softwareItems,
    type SoftwareFeature,
    type SoftwareItem as SoftwareItemData
} from '../data/software'
import { EASE } from '../lib/animations'
import SectionHeader from './SectionHeader'
import styles from './Software.module.css'

export default function Software() {
    const header = sectionHeaders.software

    return (
        <section id="software" className={styles.softwareSection}>
            <SectionHeader number={header.number} title={header.title} meta={header.meta} onLight />

            {softwareFeatures.map((feature, i) => (
                <SoftwareFeatureBlock key={feature.name} feature={feature} reverse={i === 1} delay={i * 0.1} />
            ))}

            <div className={styles.softwareList}>
                {softwareItems.map((item, i) => (
                    <SoftwareItem key={item.title} item={item} delay={i * 0.1} />
                ))}
            </div>
        </section>
    )
}

function SoftwareFeatureBlock({
    feature,
    reverse,
    delay
}: {
    feature: SoftwareFeature
    reverse: boolean
    delay: number
}) {
    return (
        <motion.div
            className={`${styles.softwareFeature} ${reverse ? styles.softwareFeatureReverse : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay, ease: EASE }}
        >
            <div className={styles.softwareFeatureText}>
                <span className={styles.softwareFeatureLabel}>{feature.label}</span>
                <h3>
                    {feature.name} <span className={styles.softwareOrg}>{feature.org}</span>
                </h3>
                <p>{feature.body}</p>
                {feature.href && (
                    <a
                        href={feature.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.softwareFeatureLink}
                    >
                        {feature.linkLabel} ↗
                    </a>
                )}
            </div>
            <div className={styles.softwareFeatureImage}>
                <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.width}
                    height={feature.image.height}
                    sizes="(max-width: 768px) 100vw, 60vw"
                />
            </div>
        </motion.div>
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
