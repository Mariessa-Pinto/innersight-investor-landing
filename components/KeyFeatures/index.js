import styles from './KeyFeatures.module.css'
import Link from 'next/link'
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
                <p>Lorem ipsum dolor sit amet consectetur. Fusce adipiscing ornare tincidunt</p>
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
                <p>Lorem ipsum dolor sit amet consectetur. Fusce adipiscing ornare tincidunt viverra ornare urna ut ut ut.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur. Fusce adipiscing ornare tincidunt viverra ornare urna ut ut ut.</p>
            </div>
        </div>
    )
}