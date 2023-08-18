import Image from 'next/image'
import styles from './page.module.css'
import pathImages from '@/cons/pathImages'

export default function Home () {
  return (
    <section className={styles.contentMain}>
      <section className={styles.contentImage}>
        <Image src={pathImages.bgImage1} alt='' className={styles.image} width={1920} height={1080} />
        <div className={styles.filterBlack} />
        <Image src={pathImages.logoFcv} alt='' className={styles.logo} width={300} height={300} />
      </section>
      <main className={styles.main}>
        <h1 className={styles.title}>HELPDESK</h1>
      </main>
    </section>
  )
}
