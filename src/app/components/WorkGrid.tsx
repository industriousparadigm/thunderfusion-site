'use client'
import Image from 'next/image'
import styles from './WorkGrid.module.css'
import { thumbnails } from '../data/thumbnails'

interface WorkGridProps {
    setSelectedVideo: (id: string | null) => void
}

export default function WorkGrid({ setSelectedVideo }: WorkGridProps) {
    return (
        <div className={styles.grid}>
            {thumbnails.map((thumbnail) => (
                <div
                    key={thumbnail.videoId}
                    className={styles.gridItem}
                    onClick={() => setSelectedVideo(thumbnail.videoId)}
                >
                    <Image src={thumbnail.src} alt={thumbnail.alt} fill className={styles.thumbnail} />
                    <div className={styles.overlay}>
                        <div className={styles.overlayText}>
                            <h3>{thumbnail.title}</h3>
                            <p>{thumbnail.client}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
