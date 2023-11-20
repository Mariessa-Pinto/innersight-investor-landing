import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.colOne}>
                    <ul>
                        <Link href=''><li>About</li></Link>
                        <Link href=''><li>Our Story</li></Link>
                        <Link href=''><li>Meet the Team</li></Link>
                        <Link href=''><li>Blog</li></Link>
                    </ul>
                </div>
                <div className={styles.colTwo}>
                    <ul>
                        <Link href=''><li>Support</li></Link>
                        <Link href=''><li>Crisis Spport Resources</li></Link>
                        <Link href=''><li>Terms of Service</li></Link>
                        <Link href=''><li>Privacy Policy</li></Link>
                    </ul>
                </div>
                <div className={styles.colThree}>
                    <ul>
                        <Link href=''><li>Contact Us</li></Link>
                        <Link href=''><li>contact@innersight.com</li></Link>
                        <Link href=''><li>3700 Willington Ave,<br />Burnaby BC<br />V5G 3H2</li></Link>
                    </ul>
                </div>
                <div className={styles.social}>
                    <Image
                        src={''}
                        alt='instagram icon'
                        width={20}
                        height={20}
                    />
                    <Image
                        src={''}
                        alt='instagram icon'
                        width={20}
                        height={20}
                    />
                    <Image
                        src={''}
                        alt='instagram icon'
                        width={20}
                        height={20}
                    />
                    <Image
                        src={''}
                        alt='instagram icon'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    )
}