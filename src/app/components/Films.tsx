'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { featuredFilms } from '../data/films'
import { sectionHeaders } from '../data/copy'
import { EASE } from '../lib/animations'
import SectionHeader from './SectionHeader'
import { useVideoModal } from './VideoModal'
import styles from './Films.module.css'

export default function Films() {
    const { open } = useVideoModal()
    const header = sectionHeaders.films

    return (
        <section id="films" className={styles.filmsSection}>
            <SectionHeader number={header.number} title={header.title} meta={header.meta} />

            <div className={styles.filmsList}>
                {featuredFilms.map((film, i) => (
                    <motion.button
                        key={film.videoId}
                        type="button"
                        className={styles.filmRow}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
                        onClick={() => open(film.videoId)}
                        aria-label={`Play ${film.title}`}
                    >
                        <span className={styles.filmIndex}>{String(i + 1).padStart(2, '0')}</span>
                        <div className={styles.filmInfo}>
                            <h3>{film.title}</h3>
                            <p>{film.client}</p>
                        </div>
                        <div className={styles.filmThumb}>
                            <Image
                                src={film.src}
                                alt={film.alt}
                                fill
                                sizes="(max-width: 768px) 90vw, 320px"
                                priority={i === 0}
                            />
                            <div className={styles.filmThumbOverlay} aria-hidden>
                                ▶
                            </div>
                        </div>
                        <span className={styles.filmArrow} aria-hidden>
                            ↗
                        </span>
                    </motion.button>
                ))}
            </div>
        </section>
    )
}
