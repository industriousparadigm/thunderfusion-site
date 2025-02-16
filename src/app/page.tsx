'use client'
import { useCallback, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import WorkGrid from './components/WorkGrid'
import ContactSection from './components/ContactSection'

export default function Home() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

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

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src="/tflogo-new-transparent.png" alt="thunder fusion logo" fill />
                </div>
                <nav className={styles.nav}>
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            handleScroll('work')
                        }}
                        className={styles.link}
                        href="#work"
                    >
                        <h6>work</h6>
                    </a>
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            handleScroll('contact')
                        }}
                        className={styles.link}
                        href="#contact"
                    >
                        <h6>contact</h6>
                    </a>
                </nav>
            </header>

            <main>
                <section className={styles.heroSection}>
                    <div className={styles.heroText}>
                        <h1>Thunder Fusion</h1>
                        <p>Bold filmmaking with a human purpose</p>
                    </div>
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

                <section className={styles.aboutSection}>
                    <h2>We capture the stories to turn missions into impact</h2>
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
                </section>

                <section id="work" className={styles.workSection}>
                    <WorkGrid setSelectedVideo={setSelectedVideo} />
                </section>

                <section id="contact" className={styles.contactSection}>
                    <ContactSection />
                </section>
            </main>

            {selectedVideo && (
                <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
                    <button className={styles.closeButton} onClick={() => setSelectedVideo(null)}>
                        &times;
                    </button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
