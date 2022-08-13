import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ExecCard from '../components/ExecCard'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Bandsoc Home Page" key="title" />
      </Head>
      
      <br />
      
      <ExecCard image='taylor' name='taylor' role='president' description='RATTLESNAKE bass' />

    </div>
  )
}

export default Home
