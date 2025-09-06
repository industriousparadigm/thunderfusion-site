'use client'
import { motion } from 'framer-motion'
import styles from './AboutSection.module.css'
import { FaLinkedin, FaEnvelope, FaHeart, FaGlobe, FaHandshake } from 'react-icons/fa'

const values = [
    {
        icon: <FaHeart />,
        title: 'Human-Centered',
        description: 'Every story we tell puts people first, ensuring dignity and respect in all our narratives.'
    },
    {
        icon: <FaGlobe />,
        title: 'Global Impact',
        description: 'We work with organizations worldwide to amplify their missions and create positive change.'
    },
    {
        icon: <FaHandshake />,
        title: 'Collaborative Spirit',
        description: 'We believe in partnership, working closely with our clients to achieve their vision.'
    }
]

export default function AboutSection() {
    return (
        <section id="about" className={styles.aboutSection}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={styles.sectionHeader}
            >
                <h2>Our Story</h2>
                <p>Where creativity meets compassion</p>
            </motion.div>

            <div className={styles.storyContent}>
                <motion.div 
                    className={styles.textBlock}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3>Born from Purpose</h3>
                    <p>
                        Thunder Fusion emerged from a simple yet powerful belief: that every humanitarian 
                        organization deserves world-class creative support to amplify their impact.
                    </p>
                    <p>
                        Founded by Mariana Miragaia, a seasoned communications professional with over a decade 
                        of experience in the humanitarian sector, Thunder Fusion bridges the gap between 
                        compelling storytelling and social impact.
                    </p>
                </motion.div>
                
                <motion.div 
                    className={styles.founderCard}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3>Mariana Miragaia</h3>
                    <p className={styles.role}>Founder & Creative Director</p>
                    <p className={styles.bio}>
                        With a passion for visual storytelling and a commitment to social justice, 
                        Mariana brings creativity and strategic insight to every project.
                    </p>
                    <div className={styles.contactInfo}>
                        <a href="mailto:miragaia.mariana@gmail.com" className={styles.contactLink}>
                            <FaEnvelope /> Email
                        </a>
                        <a href="https://www.linkedin.com/in/mariana-miragaia-5244965b/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                className={styles.valuesSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h3>Our Values</h3>
                <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className={styles.valueCard}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.valueIcon}>
                                {value.icon}
                            </div>
                            <h4>{value.title}</h4>
                            <p>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}