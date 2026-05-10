'use client'

import { motion } from 'framer-motion'
import { hero } from '../data/copy'
import { heroLineVariants } from '../lib/animations'
import { useVideoModal } from './VideoModal'
import styles from './Hero.module.css'

export default function Hero() {
    const { open } = useVideoModal()

    return (
        <section className={styles.hero}>
            <div className={styles.heroGlowPink} aria-hidden />
            <div className={styles.heroGlowCyan} aria-hidden />

            <div className={styles.heroContent}>
                <motion.p
                    className={styles.eyebrow}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.eyebrowDot} aria-hidden />
                    {hero.eyebrow}
                </motion.p>

                <h1 className={styles.heroTitle}>
                    {hero.titleLines.map((line, i) => (
                        <motion.span
                            key={line.accent}
                            className={styles.heroTitleLine}
                            variants={heroLineVariants}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                        >
                            {line.lead}
                            <span className={line.tone === 'pink' ? styles.titlePink : styles.titleCyan}>
                                {line.accent}
                            </span>
                        </motion.span>
                    ))}
                    <motion.span
                        className={`${styles.heroTitleLine} ${styles.heroLineSmall}`}
                        variants={heroLineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={hero.titleLines.length}
                    >
                        {hero.closer.lead}
                        <em>{hero.closer.italic}</em>
                    </motion.span>
                </h1>

                <motion.p
                    className={styles.heroSub}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.05 }}
                >
                    {hero.sub}
                </motion.p>

                <motion.button
                    type="button"
                    onClick={() => open(hero.showreelVideoId)}
                    className={styles.heroCta}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.25 }}
                >
                    <span className={styles.heroCtaCircle} aria-hidden>
                        ▶
                    </span>
                    <span className={styles.heroCtaLabel}>{hero.ctaLabel}</span>
                </motion.button>
            </div>

            <div className={styles.heroSideLabel} aria-hidden>
                {hero.sideLabel}
            </div>
            <div className={styles.heroScrollHint} aria-hidden>
                {hero.scrollHint}
            </div>
        </section>
    )
}
