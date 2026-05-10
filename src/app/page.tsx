'use client'

import { useCallback, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Header from './components/Header'
import { thumbnails } from './data/thumbnails'
import styles from './page.module.css'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const FILMS = thumbnails.slice(0, 6)

const MARQUEE_CLIENTS = [
    'IFRC',
    'British Red Cross',
    'UN Women',
    'FIND',
    'IFPMA',
    'World Humanitarian Forum',
    'ICRC',
    'Global Youth Mobilization',
    'European Union',
    'Football for Development'
]

const MARQUEE_SOFTWARE = [
    'Okra Solar',
    'Brainwave',
    'Route Reports',
    'Trinny London',
    'Stylist Magazine',
    'AI-native engineering',
    'Senior IC',
    'Things that ship'
]

const heroLineVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.85, delay: 0.15 + i * 0.18, ease: EASE }
    })
}

export default function HomeV2() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    const handleScroll = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div className={styles.container}>
            <Header handleScroll={handleScroll} />

            {/* HERO */}
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
                        Thunder Fusion · Films + Software
                    </motion.p>

                    <h1 className={styles.heroTitle}>
                        <motion.span variants={heroLineVariants} initial="hidden" animate="visible" custom={0}>
                            We tell <span className={styles.titlePink}>stories.</span>
                        </motion.span>
                        <motion.span variants={heroLineVariants} initial="hidden" animate="visible" custom={1}>
                            We build <span className={styles.titleCyan}>tools.</span>
                        </motion.span>
                        <motion.span
                            variants={heroLineVariants}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className={styles.heroLineSmall}
                        >
                            For missions <em>that matter.</em>
                        </motion.span>
                    </h1>

                    <motion.p
                        className={styles.heroSub}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.05 }}
                    >
                        A creative and engineering studio. Films for IFRC, British Red Cross, UN Women, FIND. Software
                        shipped at Okra Solar, Route Reports, Trinny London, Stylist Magazine.
                    </motion.p>

                    <motion.button
                        type="button"
                        onClick={() => setSelectedVideo('pRLBLh7OBpA')}
                        className={styles.heroCta}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.25 }}
                    >
                        <span className={styles.heroCtaCircle} aria-hidden>
                            ▶
                        </span>
                        <span className={styles.heroCtaLabel}>Watch the showreel</span>
                    </motion.button>
                </div>

                <div className={styles.heroSideLabel} aria-hidden>
                    EST · MATOSINHOS · PORTUGAL
                </div>
                <div className={styles.heroScrollHint} aria-hidden>
                    SCROLL ↓
                </div>
            </section>

            {/* MARQUEE */}
            <section className={styles.marquee} aria-label="Selected work">
                <div className={`${styles.marqueeRow} ${styles.marqueeRowPink}`}>
                    <div className={`${styles.marqueeTrack} ${styles.marqueeTrackForward}`}>
                        {[...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS].map((c, i) => (
                            <span key={i} className={styles.marqueeItem}>
                                {c}
                                <span className={styles.marqueeDot} aria-hidden>
                                    ◆
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className={`${styles.marqueeRow} ${styles.marqueeRowDark}`}>
                    <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
                        {[...MARQUEE_SOFTWARE, ...MARQUEE_SOFTWARE, ...MARQUEE_SOFTWARE].map((c, i) => (
                            <span key={i} className={styles.marqueeItem}>
                                {c}
                                <span className={styles.marqueeDot} aria-hidden>
                                    ◆
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FILMS */}
            <section id="work" className={styles.filmsSection}>
                <SectionHeader
                    number="01"
                    title="Films"
                    meta="Documentaries, campaigns, and field stories — produced for the world's largest humanitarian organizations."
                />

                <div className={styles.filmsList}>
                    {FILMS.map((f, i) => (
                        <motion.button
                            key={f.videoId}
                            type="button"
                            className={styles.filmRow}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
                            onClick={() => setSelectedVideo(f.videoId)}
                            aria-label={`Play ${f.title}`}
                        >
                            <span className={styles.filmIndex}>{String(i + 1).padStart(2, '0')}</span>
                            <div className={styles.filmInfo}>
                                <h3>{f.title}</h3>
                                <p>{f.client}</p>
                            </div>
                            <div className={styles.filmThumb}>
                                <Image src={f.src} alt={f.alt} fill sizes="(max-width: 768px) 90vw, 320px" />
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

            {/* SOFTWARE — bold pink slab */}
            <section id="services" className={styles.softwareSection}>
                <SectionHeader
                    number="02"
                    title="Software"
                    meta="Senior product engineering. AI-native. Built to ship."
                    onLight
                />

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
                            Brainwave <span className={styles.softwareOrg}>at Okra Solar</span>
                        </h3>
                        <p>
                            A natural-language interface to a complex enterprise data warehouse. Ask in plain English,
                            get queries, charts, and answers. Used daily by leadership and analysts.
                        </p>
                    </div>
                    <div className={styles.softwareFeatureImage}>
                        <Image
                            src="/products/brainwave.jpg"
                            alt="Brainwave — Okra Solar's natural-language analytics product"
                            width={1600}
                            height={1000}
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                </motion.div>

                <div className={styles.softwareList}>
                    <SoftwareItem
                        title="Product engineering"
                        org="at Route Reports, Trinny London, Stylist Magazine"
                        body="Years across editorial, e-commerce, and B2B startups. Senior IC, full-stack, things-that-actually-shipped."
                        delay={0}
                    />
                    <SoftwareItem
                        title="AI-assisted development"
                        org="shipped fast"
                        body="Among the earliest practitioners of AI-native engineering inside production teams. We use AI to outpace bigger shops and ship better software, faster."
                        delay={0.1}
                    />
                </div>
            </section>

            {/* STUDIO */}
            <section id="about" className={styles.studioSection}>
                <SectionHeader number="03" title="The studio" meta="Two founders. One studio." />

                <div className={styles.studioGrid}>
                    <StudioCard
                        initial="M"
                        accent="pink"
                        role="Creative Director"
                        name="Mariana Miragaia"
                        body="Fifteen years producing humanitarian films and communication campaigns for the world's largest aid organizations. Leads field production and editorial direction."
                        email="mariana@thunderfusion.pt"
                        linkedin="https://www.linkedin.com/in/mariana-miragaia-5244965b/"
                        delay={0}
                    />
                    <StudioCard
                        initial="D"
                        accent="cyan"
                        role="Engineering Lead"
                        name="Diogo Costa"
                        body="Senior product engineer. Currently at Okra Solar. Previously Route Reports, Trinny London, Stylist Magazine. Among the earliest practitioners of AI-native engineering."
                        email="diogo@thunderfusion.pt"
                        linkedin={null}
                        delay={0.15}
                    />
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.contactSection}>
                <SectionHeader number="04" title="Get in touch" meta="Tell us what you're working on." />

                <div className={styles.contactSplit}>
                    <motion.a
                        href="mailto:mariana@thunderfusion.pt"
                        className={`${styles.contactCard} ${styles.contactPink}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.contactLabel}>Films · Campaigns · Comms</span>
                        <span className={styles.contactEmail}>mariana@thunderfusion.pt</span>
                        <span className={styles.contactArrow} aria-hidden>
                            ↗
                        </span>
                    </motion.a>
                    <motion.a
                        href="mailto:diogo@thunderfusion.pt"
                        className={`${styles.contactCard} ${styles.contactCyan}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className={styles.contactLabel}>Software · AI · Prototypes</span>
                        <span className={styles.contactEmail}>diogo@thunderfusion.pt</span>
                        <span className={styles.contactArrow} aria-hidden>
                            ↗
                        </span>
                    </motion.a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerLeft}>
                    <span className={styles.footerMark}>TF</span>
                    <span>Thunder Fusion · Matosinhos, Portugal</span>
                </div>
                <div className={styles.footerRight}>© {new Date().getFullYear()}</div>
            </footer>

            {/* MODAL */}
            {selectedVideo && (
                <div className={styles.modal} onClick={() => setSelectedVideo(null)} role="dialog" aria-modal>
                    <button
                        className={styles.closeButton}
                        onClick={() => setSelectedVideo(null)}
                        aria-label="Close video"
                    >
                        ×
                    </button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1&rel=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

function SectionHeader({
    number,
    title,
    meta,
    onLight = false
}: {
    number: string
    title: string
    meta?: string
    onLight?: boolean
}) {
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

function SoftwareItem({ title, org, body, delay }: { title: string; org: string; body: string; delay: number }) {
    return (
        <motion.div
            className={styles.softwareItem}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            <h3>
                {title} <span className={styles.softwareOrg}>{org}</span>
            </h3>
            <p>{body}</p>
        </motion.div>
    )
}

function StudioCard({
    initial,
    accent,
    role,
    name,
    body,
    email,
    linkedin,
    delay
}: {
    initial: string
    accent: 'pink' | 'cyan'
    role: string
    name: string
    body: string
    email: string
    linkedin: string | null
    delay: number
}) {
    return (
        <motion.div
            className={styles.studioCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            <span
                className={`${styles.studioInitial} ${accent === 'pink' ? styles.initialPink : styles.initialCyan}`}
                aria-hidden
            >
                {initial}
            </span>
            <div className={styles.studioContent}>
                <p className={styles.studioRole}>{role}</p>
                <h3>{name}</h3>
                <p className={styles.studioBody}>{body}</p>
                <div className={styles.studioLinks}>
                    <a href={`mailto:${email}`}>Email</a>
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
