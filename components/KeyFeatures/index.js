import styles from './KeyFeatures.module.css'
import Image from 'next/image'

export default function KeyFeatures() {
    return (
        <div className={styles.featuresContainer}>
            <div className={styles.feature}>
                <div className={styles.whiteBox}>
                    <Image
                        src={'../../images/pers-recs.svg'}
                        alt='recommended button on phone'
                        width={136}
                        height={130}
                    />
                </div>
                <h3>Personalized Recommendations</h3>
                <p>View recommendations  based on your entries that can empower and guide your journey.</p>
            </div>
            <div className={styles.feature}>
                <div className={styles.whiteBox}>
                    <Image
                        src={'../../images/insights.svg'}
                        alt='generated insights icon'
                        width={88}
                        height={129}
                    />
                </div>
                <h3>AI Generated Insights</h3>
                <p>Our AI can provide a unique lens about your thoughts and feelings.</p>
            </div>
            <div className={styles.feature}>
                <div className={styles.whiteBox}>
                    <Image
                        src={'../../images/trends.svg'}
                        alt='growth insight icon'
                        width={104}
                        height={123}
                    />
                </div>
                <h3>Emotional Insights Report</h3>
                <p>Understand the ebb and flow of your emotional trends over time.</p>
            </div>
        </div>
    )
}