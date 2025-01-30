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
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              fill
              className={styles.thumbnail}
            />
            <div className={styles.overlay}>
              <h3>{thumbnail.title}</h3>
              <p>{thumbnail.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
