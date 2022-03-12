import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homescreen from '../src/component/Homescreen.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Homescreen />
    </div>
  )
}
