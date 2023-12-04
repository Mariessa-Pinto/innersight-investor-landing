import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import SignUp from '@/components/SignUp'
import KeyFeatures from '@/components/KeyFeatures'
import PressReleases from '@/components/PressReleases'

export default function Home() {
  return (
    <>
      <Head>
        <title>Invest in Innersight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.topSection}>
          <div className={styles.image}>
            <Image
              src='/logo/logo.png'
              alt='innersight logo'
              width={391}
              height={90}
            />
            <Image
              src='/images/mascot-graphic.svg'
              alt='mascots with phone screen example'
              width={677}
              height={681}
            />
          </div>
          <div>
            <SignUp />
          </div>
          <div className={styles.box}></div>
        </div>
        <div className={styles.keyFeatures}>
          <div className={styles.headerContainer}>
            <h2 className={styles.featuresTitle}>Innersight Key Features</h2>
          </div>
          <KeyFeatures />
        </div>
        <div className={styles.press}>
          <div className={styles.headerWithButtonContainer}>
            <h2 className={styles.featuresTitle}>Press Releases</h2>
            <button className={styles.button}>View all</button>
          </div>
          <div>
            <PressReleases />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
