'use client'
import { useCallback } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import WorkGrid from './components/WorkGrid'
import ContactSection from './components/ContactSection'

export default function Home() {
    const handleScroll = useCallback((id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src="/tflogo.png" alt="thunder fusion logo" fill objectFit="contain" />
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
                </section>

                <section className={styles.aboutSection}>
                    <h2>We capture the stories to turn missions into impact</h2>
                    <p>
                        Cheers! We are THUNDER FUSION, a Creative Consultancy agency specialized in{' '}
                        <strong>humanitarian storytelling</strong>, crafting humane, dignified, and unique content for
                        international organizations and local enterprises alike.
                    </p>

                    <p>
                        Your mission is the spark that drives our creation. By linking people, purpose, and creativity,
                        your content will inspire action and amplify impact.
                    </p>
                </section>

                <section id="work" className={styles.workSection}>
                    <WorkGrid />
                </section>

                <section id="contact" className={styles.contactSection}>
                    <ContactSection />
                </section>
            </main>
        </div>
    )
}
