'use client'

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode
} from 'react'
import { MotionConfig } from 'framer-motion'
import styles from './VideoModal.module.css'

/** YouTube video IDs are exactly 11 chars of [A-Za-z0-9_-]. Validate at the boundary. */
const YOUTUBE_ID_REGEX = /^[A-Za-z0-9_-]{11}$/

interface VideoModalContextValue {
    open: (videoId: string) => void
    close: () => void
    videoId: string | null
}

const VideoModalContext = createContext<VideoModalContextValue | null>(null)

/**
 * Wrap any subtree that needs `useVideoModal`. Renders the modal itself, so a
 * single instance lives at the tree root regardless of how many openers exist.
 */
export function VideoModalProvider({ children }: { children: ReactNode }) {
    const [videoId, setVideoId] = useState<string | null>(null)

    const open = useCallback((id: string) => {
        if (!YOUTUBE_ID_REGEX.test(id)) {
            // Defensive: only happens if upstream data is corrupt.
            console.error(`VideoModal: rejected invalid YouTube ID "${id}"`)
            return
        }
        setVideoId(id)
    }, [])

    const close = useCallback(() => setVideoId(null), [])

    return (
        <VideoModalContext.Provider value={{ open, close, videoId }}>
            <MotionConfig reducedMotion="user">
                {children}
                <VideoModal />
            </MotionConfig>
        </VideoModalContext.Provider>
    )
}

export function useVideoModal() {
    const ctx = useContext(VideoModalContext)
    if (!ctx) throw new Error('useVideoModal must be used inside <VideoModalProvider>')
    return ctx
}

function VideoModal() {
    const { videoId, close } = useVideoModal()
    const closeBtnRef = useRef<HTMLButtonElement | null>(null)
    const triggerRef = useRef<HTMLElement | null>(null)

    // Capture the focused element before opening; restore on close.
    useEffect(() => {
        if (!videoId) return
        triggerRef.current = document.activeElement as HTMLElement | null
        closeBtnRef.current?.focus()
        return () => {
            triggerRef.current?.focus?.()
            triggerRef.current = null
        }
    }, [videoId])

    // Lock body scroll while open.
    useEffect(() => {
        if (!videoId) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [videoId])

    // Esc to close + Tab cycle between close button and iframe.
    useEffect(() => {
        if (!videoId) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                close()
                return
            }
            if (e.key !== 'Tab') return
            const closeBtn = closeBtnRef.current
            const iframe = closeBtn?.parentElement?.querySelector('iframe')
            if (!closeBtn || !iframe) return
            const active = document.activeElement
            if (e.shiftKey && active === closeBtn) {
                e.preventDefault()
                ;(iframe as HTMLIFrameElement).focus()
            } else if (!e.shiftKey && active === iframe) {
                e.preventDefault()
                closeBtn.focus()
            }
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [videoId, close])

    if (!videoId) return null

    return (
        <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            onClick={close}
        >
            <h2 id="video-modal-title" className={styles.srOnly}>
                Video player
            </h2>
            <button
                ref={closeBtnRef}
                type="button"
                className={styles.closeButton}
                onClick={close}
                aria-label="Close video"
            >
                ×
            </button>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    )
}
