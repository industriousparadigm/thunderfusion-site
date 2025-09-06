'use client'
import Image from 'next/image'
import styles from './WorkGrid.module.css'
import { thumbnails } from '../data/thumbnails'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { VideoPreviewThumbnail } from '../types'

interface WorkGridProps {
    setSelectedVideo: (id: string | null) => void
}

interface GridItemProps {
    thumbnail: VideoPreviewThumbnail
    setSelectedVideo: (id: string | null) => void
    itemVariants: {
        hidden: { opacity: number; y: number; scale: number }
        visible: { opacity: number; y: number; scale: number; transition: { duration: number; ease: string } }
    }
    loadedImages: Set<string>
    setLoadedImages: React.Dispatch<React.SetStateAction<Set<string>>>
}

function GridItem({ thumbnail, setSelectedVideo, itemVariants, loadedImages, setLoadedImages }: GridItemProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <motion.div
            ref={ref}
            className={styles.gridItem}
            onClick={() => setSelectedVideo(thumbnail.videoId)}
            variants={itemVariants}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {!loadedImages.has(thumbnail.videoId) && (
                <div className={styles.skeleton} />
            )}
            {inView && (
                <Image 
                    src={thumbnail.src} 
                    alt={thumbnail.alt} 
                    fill 
                    className={styles.thumbnail}
                    loading="lazy"
                    onLoad={() => {
                        setLoadedImages(prev => new Set(prev).add(thumbnail.videoId))
                    }}
                    style={{
                        opacity: loadedImages.has(thumbnail.videoId) ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />
            )}
            <motion.div 
                className={styles.overlay}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div 
                    className={styles.overlayText}
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3>{thumbnail.title}</h3>
                    <p>{thumbnail.client}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default function WorkGrid({ setSelectedVideo }: WorkGridProps) {
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    }

    return (
        <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {thumbnails.map((thumbnail) => (
                <GridItem
                    key={thumbnail.videoId}
                    thumbnail={thumbnail}
                    setSelectedVideo={setSelectedVideo}
                    itemVariants={itemVariants}
                    loadedImages={loadedImages}
                    setLoadedImages={setLoadedImages}
                />
            ))}
        </motion.div>
    )
}
