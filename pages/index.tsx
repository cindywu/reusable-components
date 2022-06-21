import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reusable Components</title>
        <meta name="description" content="Reusable components by Cindy Wu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Reusable Components
        </h1>

        <p className={styles.description}>
          Useful components for React.
        </p>

        <div className={styles.grid}>
          <Link href="/workspace-grid">
            <a className={styles.card}>
              <h2>Workspace Grid &rarr;</h2>
              <p>Workspace grid layout for Trunk</p>
            </a>
          </Link>
          <Link href="/named-colors" >
            <a className={styles.card}>
              <h2>Named Colors &rarr;</h2>
              <p>Available named colors</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
