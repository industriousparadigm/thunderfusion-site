// Shared framer-motion presets. Keep all motion constants here so a future
// editor can retune feel in one place.
import type { Variants } from 'framer-motion'

/** Ease-out quart cubic-bezier. Tuple-typed for framer-motion's Easing API. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Used by the hero title; `custom` index drives a per-line stagger. */
export const heroLineVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.85, delay: 0.15 + i * 0.18, ease: EASE }
    })
}
