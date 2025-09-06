'use client'
import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import { FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface FormData {
    name: string
    email: string
    organization: string
    message: string
}

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setSubmitStatus('success')
                reset()
            } else {
                setSubmitStatus('error')
            }
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={styles.contactContainer}>
            <motion.div 
                className={styles.contactGrid}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <motion.div 
                    className={styles.contactInfo}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Let&apos;s Create Impact Together</h2>
                    <p className={styles.description}>
                        Ready to amplify your mission through compelling storytelling? 
                        We&apos;d love to hear about your project and explore how we can help.
                    </p>
                    
                    <div className={styles.contactDetails}>
                        <h3>Mariana Miragaia</h3>
                        <p className={styles.title}>Project Lead</p>
                        
                        <div className={styles.contactLinks}>
                            <a href="tel:+351927365155" className={styles.contactLink}>
                                <FaPhone /> +351 927 365 155
                            </a>
                            <a href="mailto:miragaia.mariana@gmail.com" className={styles.contactLink}>
                                <FaEnvelope /> miragaia.mariana@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mariana-miragaia-5244965b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                <FaLinkedin /> Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.formContainer}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                placeholder="Your Name"
                                className={styles.input}
                            />
                            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                type="email"
                                placeholder="Your Email"
                                className={styles.input}
                            />
                            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                {...register('organization')}
                                type="text"
                                placeholder="Organization (Optional)"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                {...register('message', { required: 'Message is required' })}
                                placeholder="Tell us about your project..."
                                rows={5}
                                className={styles.textarea}
                            />
                            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <FaPaperPlane /> Send Message
                                </>
                            )}
                        </motion.button>

                        {submitStatus === 'success' && (
                            <motion.p 
                                className={styles.successMessage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Thank you! We&apos;ll get back to you soon.
                            </motion.p>
                        )}

                        {submitStatus === 'error' && (
                            <motion.p 
                                className={styles.errorMessage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Something went wrong. Please try again or email us directly.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ContactForm