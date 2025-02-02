'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './WorkGrid.module.css'
import { thumbnails } from '../data/thumbnails'

export default function WorkGrid() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    return (
        <>
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

            {selectedVideo && (
                <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
                    <button className={styles.closeButton} onClick={() => setSelectedVideo(null)}>
                        &times;
                    </button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    )
}
