'use client'
import { motion } from 'framer-motion'
import styles from './ServicesSection.module.css'
import { FaVideo, FaPaintBrush, FaChartLine, FaUsers } from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react'

const services = [
    {
        icon: <FaVideo />,
        title: 'Video Production',
        description: 'From concept to delivery, we create compelling visual narratives that resonate with your audience.',
        features: [
            'Documentary filmmaking',
            'Corporate videos',
            'Social media content',
            'Animation & motion graphics'
        ],
        price: 'From €2,500'
    },
    {
        icon: <FaPaintBrush />,
        title: 'Creative Design',
        description: 'Eye-catching designs that communicate your message with clarity and impact.',
        features: [
            'Brand identity design',
            'Reports & publications',
            'Infographics',
            'Social media assets'
        ],
        price: 'From €800'
    },
    {
        icon: <FaChartLine />,
        title: 'Digital Marketing',
        description: 'Strategic campaigns that amplify your reach and drive meaningful engagement.',
        features: [
            'Content strategy',
            'SEO optimization',
            'Social media management',
            'Analytics & reporting'
        ],
        price: 'From €1,500/month'
    },
    {
        icon: <FaUsers />,
        title: 'Communication Strategy',
        description: 'Comprehensive communication plans that align with your mission and values.',
        features: [
            'Stakeholder mapping',
            'Message development',
            'Crisis communication',
            'Media relations'
        ],
        price: 'From €3,000'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
}

export default function ServicesSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="services" className={styles.servicesSection}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={styles.sectionHeader}
            >
                <h2>Our Services</h2>
                <p>Empowering humanitarian organizations with creative excellence</p>
            </motion.div>

            <div className={styles.servicesWrapper}>
                {isMobile && showLeftArrow && (
                    <button 
                        className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        ‹
                    </button>
                )}
                
                <motion.div 
                    ref={scrollRef}
                    className={`${styles.servicesGrid} ${isMobile ? styles.mobileGrid : ''}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    onScroll={handleScroll}
                >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={styles.serviceCard}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.03,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className={styles.iconWrapper}>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul className={styles.features}>
                            {service.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <div className={styles.price}>{service.price}</div>
                    </motion.div>
                ))}
                </motion.div>
                
                {isMobile && showRightArrow && (
                    <button 
                        className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        ›
                    </button>
                )}
            </div>
        </section>
    )
}