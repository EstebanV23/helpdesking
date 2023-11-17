import Image from 'next/image'
import styles from './page.module.css'
import pathImages from '@/app/cons/pathImages'
import { Prompt } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import Form from '@/components/form/form'

const prompt:NextFont = Prompt({ weight: ['200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function Home () {
  return (
    <main className={styles.fullContent}>
      <section className={styles.contentMain}>
        <section className={styles.contentImage}>
          <Image src={pathImages.bgImage1} alt='Logo of fcv' className={styles.image} width={1920} height={1080} />
          <div className={styles.filterBlack} />
          <Image src={pathImages.logoFcv} alt='' className={styles.logo} width={300} height={300} />
        </section>
        <main className={styles.main}>
          <h1 className={prompt.className}>HELPDESK</h1>
          <Form />
        </main>
      </section>
    </main>
  )
}
