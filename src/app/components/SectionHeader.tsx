'use client'

import { motion } from 'framer-motion'
import { EASE } from '../lib/animations'
import styles from './SectionHeader.module.css'

interface Props {
    number: string
    title: string
    meta?: string
    /** Switch numeric / text colors to a dark palette for use on light backgrounds. */
    onLight?: boolean
}

export default function SectionHeader({ number, title, meta, onLight = false }: Props) {
    return (
        <div className={`${styles.sectionHeader} ${onLight ? styles.sectionHeaderLight : ''}`}>
            <motion.span
                className={styles.sectionNumber}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
            >
                {number}
            </motion.span>
            <div className={styles.sectionHeaderText}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {title}
                </motion.h2>
                {meta && (
                    <motion.p
                        className={styles.sectionMeta}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        {meta}
                    </motion.p>
                )}
            </div>
        </div>
    )
}
