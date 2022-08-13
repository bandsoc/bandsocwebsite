import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ExecCard from '../components/ExecCard'

interface ExecCard {
  image: string,
  imageAlt: string,
  name: string,
  role: string,
  description: string,
}

const taylorDescription : string = "Name: Taylor Adam Discord: @Taylor (Presidente) Instagram: @ taylortka Bio: hiii I'm a fourth year systems engineer and my job is to run this whole thing smoothly and boss about my amazing exec team and do anything that needs doing ! I play bass in Rattlesnake, drum for The Kellys, and sing in Red Lamp. And also I really love music and live music and this society !! Top 3 Artists: Hippo Campus, King Gizzard and the Wizard Lizard, Peach Pit Favourite Album: iliwysfyasbysuoi by the 1975 Guilty Pleasure: Carly Rae Jepsen except I don't feel guilty at all bcos she's incredible"
const taylor: ExecCard = {
  image: '/images/tayloradam.png',
  imageAlt: 'taylor selfie',
  name: 'Taylor Adam',
  role: 'President',
  description: taylorDescription,
}

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Bandsoc Home Page" key="title" />
      </Head>
      
      <br />
      
      <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />

    </div>
  )
}

export default Home
