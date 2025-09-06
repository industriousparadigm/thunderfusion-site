'use client'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Testimonials.module.css'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const testimonials = [
    {
        id: 1,
        quote: "Thunder Fusion transformed our humanitarian mission into a powerful visual narrative that resonated with donors and stakeholders worldwide. Their creativity and professionalism exceeded all expectations.",
        author: "Sarah Chen",
        role: "Communications Director",
        organization: "Global Health Initiative",
        rating: 5
    },
    {
        id: 2,
        quote: "Working with Mariana and the Thunder Fusion team was an absolute pleasure. They understood our vision immediately and delivered content that truly captured the essence of our work in the field.",
        author: "Dr. James Morrison",
        role: "Country Director",
        organization: "Medical Aid International",
        rating: 5
    },
    {
        id: 3,
        quote: "The video content Thunder Fusion created for our campaign helped us reach over 2 million people and increase donations by 150%. Their storytelling approach is both authentic and impactful.",
        author: "Maria Rodriguez",
        role: "Fundraising Manager",
        organization: "Children's Future Foundation",
        rating: 5
    }
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    // Handle swipe detection
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe && activeIndex < testimonials.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
        if (isRightSwipe && activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.section 
            className={styles.testimonialsSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                What Our Clients Say
            </motion.h2>

            <div 
                className={styles.testimonialsContainer}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.div 
                        className={styles.testimonialCard}
                        key={activeIndex}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            const swipeThreshold = 50
                            if (info.offset.x > swipeThreshold && activeIndex > 0) {
                                setActiveIndex(activeIndex - 1)
                            } else if (info.offset.x < -swipeThreshold && activeIndex < testimonials.length - 1) {
                                setActiveIndex(activeIndex + 1)
                            }
                        }}
                    >
                    <FaQuoteLeft className={styles.quoteIcon} />
                    
                    <p className={styles.quote}>{testimonials[activeIndex].quote}</p>
                    
                    <div className={styles.rating}>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={styles.star} />
                        ))}
                    </div>
                    
                    <div className={styles.author}>
                        <h4>{testimonials[activeIndex].author}</h4>
                        <p>{testimonials[activeIndex].role}</p>
                        <p className={styles.organization}>{testimonials[activeIndex].organization}</p>
                    </div>
                    </motion.div>
                </AnimatePresence>

                <div className={styles.navigation}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.navDot} ${index === activeIndex ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <motion.div 
                className={styles.stats}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className={styles.stat}>
                    <h3>50+</h3>
                    <p>Projects Completed</p>
                </div>
                <div className={styles.stat}>
                    <h3>30+</h3>
                    <p>Happy Clients</p>
                </div>
                <div className={styles.stat}>
                    <h3>10M+</h3>
                    <p>People Reached</p>
                </div>
                <div className={styles.stat}>
                    <h3>15+</h3>
                    <p>Countries</p>
                </div>
            </motion.div>
        </motion.section>
    )
}