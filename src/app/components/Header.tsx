'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

interface HeaderProps {
    handleScroll: (id: string) => void
}

export default function Header({ handleScroll }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#', label: 'home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { href: '#services', label: 'services', onClick: () => handleScroll('services') },
        { href: '#about', label: 'about', onClick: () => handleScroll('about') },
        { href: '#work', label: 'work', onClick: () => handleScroll('work') },
        { href: '#contact', label: 'contact', onClick: () => handleScroll('contact') }
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, onClick: () => void) => {
        e.preventDefault()
        onClick()
        setMobileMenuOpen(false)
    }

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Image src="/tflogo-new-transparent.png" alt="thunder fusion logo" fill />
            </div>
            
            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        onClick={(e) => handleNavClick(e, item.onClick)}
                        className={styles.link}
                        href={item.href}
                    >
                        <h6>{item.label}</h6>
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        className={styles.mobileNav}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        {navItems.map((item) => (
                            <motion.a
                                key={item.label}
                                onClick={(e) => handleNavClick(e, item.onClick)}
                                className={styles.mobileLink}
                                href={item.href}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.indexOf(item) * 0.1 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}