// ContactSection.tsx
import React from 'react'
import styles from './ContactSection.module.css'
import { FaLinkedin } from 'react-icons/fa'

const ContactSection = () => {
    // HTML entity encoded strings for extra protection.
    const phoneEncoded = '&#43;351&#32;927&#32;365&#32;155' // +351 927 365 155
    const emailEncoded =
        '&#109;&#105;&#114;&#97;&#103;&#97;&#105;&#97;&#46;&#109;&#97;&#114;&#105;&#97;&#110;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;' // miragaia.mariana@gmail.com

    return (
        <div className={styles.contactInfo}>
            <p className={styles.name}>Mariana Miragaia</p>
            <p className={styles.title}>Project Lead</p>
            <p className={styles.contactDetail}>
                <a
                    className={styles.contactLink}
                    href="tel:+351927365155"
                    dangerouslySetInnerHTML={{ __html: phoneEncoded }}
                ></a>
            </p>
            <p className={styles.contactDetail}>
                <a
                    className={styles.contactLink}
                    href="mailto:miragaia.mariana@gmail.com"
                    dangerouslySetInnerHTML={{ __html: emailEncoded }}
                ></a>
            </p>
            <a
                className={styles.linkedin}
                href="https://www.linkedin.com/in/mariana-miragaia-5244965b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
            >
                <FaLinkedin size={32} />
            </a>
        </div>
    )
}

export default ContactSection
