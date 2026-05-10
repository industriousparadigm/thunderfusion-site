import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Films from './components/Films'
import Software from './components/Software'
import Studio from './components/Studio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { VideoModalProvider } from './components/VideoModal'
import styles from './page.module.css'

export default function HomePage() {
    return (
        <VideoModalProvider>
            <div className={styles.container}>
                <Header />
                <main>
                    <Hero />
                    <Marquee />
                    <Films />
                    <Software />
                    <Studio />
                    <Contact />
                </main>
                <Footer />
            </div>
        </VideoModalProvider>
    )
}
