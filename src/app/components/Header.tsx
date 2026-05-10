'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const NAV_ITEMS = [
    { href: '#top', label: 'home' },
    { href: '#films', label: 'films' },
    { href: '#software', label: 'software' },
    { href: '#studio', label: 'studio' },
    { href: '#contact', label: 'contact' }
] as const

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onWindowScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onWindowScroll, { passive: true })
        return () => window.removeEventListener('scroll', onWindowScroll)
    }, [])

    // Close the mobile menu after a nav click — works with native anchor scrolling.
    const closeMenu = () => setMobileMenuOpen(false)

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <a href="#top" className={styles.logo} aria-label="Thunder Fusion home" onClick={closeMenu}>
                <Image src="/tflogo-new-transparent.png" alt="" fill />
            </a>

            <nav className={styles.desktopNav} aria-label="Primary">
                {NAV_ITEMS.map((item) => (
                    <a key={item.label} href={item.href} className={styles.link}>
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>

            <button
                type="button"
                className={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            className={styles.mobileBackdrop}
                            onClick={closeMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden
                        />
                        <motion.nav
                            id="mobile-nav"
                            className={styles.mobileNav}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            aria-label="Primary"
                        >
                            {NAV_ITEMS.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className={styles.mobileLink}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
