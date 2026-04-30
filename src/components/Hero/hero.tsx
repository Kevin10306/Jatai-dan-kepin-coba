import {useRouter} from "next/router"
import styles from "./hero.module.css"

const Hero = () => {
    const router = useRouter()
    
    return (
        <section className={styles.hero}>
          <p className={styles.heroDescription}>Daftar antrean barbershop favoritmu, tanpa perlu nunggu di tempat.</p>
          <button className={styles.btnPrimary} onClick={() => router.push('/auth/login')}>Booking Sekarang</button>
          <div className={styles.bgContent}>Untuk Barber & Barbershop</div>
        </section>
    )
}

export default Hero;