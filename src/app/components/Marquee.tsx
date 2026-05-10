import { marqueeClients } from '../data/clients'
import styles from './Marquee.module.css'

export default function Marquee() {
    // Triple the list so the track has visible content while the seamless loop
    // resets transform from -33.333% back to 0.
    const items = [...marqueeClients, ...marqueeClients, ...marqueeClients]

    return (
        <section className={styles.marquee} aria-label="Selected clients">
            <div className={styles.marqueeRow}>
                <div className={styles.marqueeTrack}>
                    {items.map((client, i) => (
                        <span key={`${client}-${i}`} className={styles.marqueeItem}>
                            {client}
                            <span className={styles.marqueeDot} aria-hidden>
                                ◆
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
