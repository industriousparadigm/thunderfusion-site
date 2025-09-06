'use client'
import { useCallback, useState, useEffect } from 'react'
import styles from './page.module.css'
import WorkGrid from './components/WorkGrid'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import Header from './components/Header'
import { motion } from 'framer-motion'

export default function Home() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
    const [particles, setParticles] = useState<Array<{ id: number; size: number; left: number; delay: number }>>([])

    const handleScroll = useCallback((id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    // Opens the modal with the showreel video.
    const openShowreel = () => {
        setSelectedVideo('pRLBLh7OBpA')
    }

    // Generate random particles
    useEffect(() => {
        const newParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            size: Math.random() * 60 + 20,
            left: Math.random() * 100,
            delay: Math.random() * 20
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className={styles.container}>
            <Header handleScroll={handleScroll} />

            <main>
                <section className={styles.heroSection}>
                    <div className={styles.particles}>
                        {particles.map((particle) => (
                            <div
                                key={particle.id}
                                className={styles.particle}
                                style={{
                                    width: `${particle.size}px`,
                                    height: `${particle.size}px`,
                                    left: `${particle.left}%`,
                                    animationDelay: `${particle.delay}s`
                                }}
                            />
                        ))}
                    </div>
                    <motion.div 
                        className={styles.heroText}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 data-text="Thunder Fusion">Thunder Fusion</h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Bold filmmaking with a human purpose
                        </motion.p>
                    </motion.div>
                    <div className={styles.showreelContainer}>
                        <a
                            className={`${styles.link} ${styles.showreelLink}`}
                            onClick={(e) => {
                                e.preventDefault()
                                openShowreel()
                            }}
                            href="#"
                        >
                            Latest showreel
                        </a>
                    </div>
                </section>

                <motion.section 
                    className={styles.aboutSection}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        We capture the stories to turn missions into impact
                    </motion.h2>
                    <p>
                        Cheers! We are THUNDER FUSION, a Creative Consultancy agency specializing in{' '}
                        <strong>humanitarian storytelling</strong> and impactful media solutions.
                    </p>
                    <p>
                        We craft humane, dignified, and unique content for international organizations and local
                        enterprises alike, ensuring your message resonates with clarity and purpose.
                    </p>
                    <p>
                        From <strong>graphic design</strong>, <strong>reports</strong>, and <strong>copywriting</strong>{' '}
                        to <strong>digital marketing consulting</strong>, <strong>communication strategy</strong>, and{' '}
                        <strong>project management</strong>, we connect people, ideas, and creativity to amplify your
                        mission.
                    </p>
                    <p>
                        Your mission is the spark that drives our creation. By linking people, purpose, and creativity,
                        your content will inspire action and amplify impact.
                    </p>
                </motion.section>

                <ServicesSection />
                
                <AboutSection />

                <section id="work" className={styles.workSection}>
                    <WorkGrid setSelectedVideo={setSelectedVideo} />
                </section>

                <Testimonials />

                <section id="contact" className={styles.contactSection}>
                    <ContactForm />
                </section>
            </main>

            {selectedVideo && (
                <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
                    <button className={styles.closeButton} onClick={() => setSelectedVideo(null)}>
                        &times;
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
