import { footer } from '../data/copy'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <span className={styles.footerMark}>{footer.mark}</span>
                <span>{footer.location}</span>
            </div>
            <div className={styles.footerRight}>
                {footer.links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                    >
                        {link.label}
                    </a>
                ))}
                <span>© {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}
