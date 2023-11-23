import styles from './PressReleases.module.css'

export default function PressReleases() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.title}>Innersight third quarter results of 2023</p>
                <p className={styles.date}>Nov 6, 2023</p>
            </div>
            <div className={styles.box}>
                <p className={styles.title}>Innersight second quarter results of 2023</p>
                <p className={styles.date}>Jul 6, 2023</p>
            </div>
            <div className={styles.box}>
                <p className={styles.title}>Innersight first quarter results of 2023</p>
                <p className={styles.date}>Apr 6, 2023</p>
            </div>
            <div className={styles.box}>
                <p className={styles.title}>Innersight fourth quarter results of 2022</p>
                <p className={styles.date}>Jan 6, 2023</p>
            </div>
        </div>
    )
}