import { footer } from '../data/copy'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <span className={styles.footerMark}>{footer.mark}</span>
                <span>{footer.location}</span>
            </div>
            <div className={styles.footerRight}>© {new Date().getFullYear()}</div>
        </footer>
    )
}
