import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.colOne}>
                    <ul className={styles.list}>
                        <li className={styles.listTitle}>About</li>
                        <Link href='https://innersight-blog.vercel.app/about' className={styles.link}><li className={styles.listItem}>Our Story</li></Link>
                        <Link href='https://innersight-blog.vercel.app/team' className={styles.link}><li className={styles.listItem}>Meet the Team</li></Link>
                        <Link href='https://innersight-blog.vercel.app/' className={styles.link}><li className={styles.listItem}>Blog</li></Link>
                    </ul>
                </div>
                <div className={styles.colTwo}>
                    <ul className={styles.list}>
                        <li className={styles.listTitle}>Support</li>
                        <li className={styles.listItem}>Crisis Spport Resources</li>
                        <li className={styles.listItem}>Terms of Service</li>
                        <li className={styles.listItem}>Privacy Policy</li>
                    </ul>
                </div>
                <div className={styles.colThree}>
                    <ul className={styles.list}>
                        <li className={styles.listTitle}>Contact Us</li>
                        <li className={styles.listItem}>contact@innersight.com</li>
                        <li className={styles.listItem}>3700 Willington Ave,<br />Burnaby BC<br />V5G 3H2</li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <Image
                        src={'../../assets/icons/instagram.svg'}
                        alt='instagram icon'
                        width={20}
                        height={20}
                    />
                    <Image
                        src={'../../assets/icons/linkedin.svg'}
                        alt='linkedin icon'
                        width={18}
                        height={19}
                    />
                    <Image
                        src={'../../assets/icons/facebook.svg'}
                        alt='facebook icon'
                        width={11.3}
                        height={20}
                    />
                    <Image
                        src={'../../assets/icons/twitter.svg'}
                        alt='twitter icon'
                        width={21}
                        height={16}
                    />
                </div>
            </div>
        </div>
    )
}