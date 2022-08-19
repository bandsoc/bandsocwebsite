import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ExecCard from '../components/ExecCard'
import { Flex, Box, Text, Image, Center } from '@chakra-ui/react'
import CustomCarousel from '../components/CustomCarousel'
import { ArrowDownIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../components/Layout'
import React, { useRef } from 'react'
interface ExecCard {
  image: string,
  imageAlt: string,
  name: string,
  role: string,
  description: string,
}

const taylorDescription: string = "hiii I'm a fourth year systems engineer and my job is to run this whole thing smoothly and boss about my amazing exec team and do anything that needs doing ! I play bass in Rattlesnake, drum for The Kellys, and sing in Red Lamp. And also I really love music and live music and this society !! Top 3 Artists: Hippo Campus, King Gizzard and the Wizard Lizard, Peach Pit Favourite Album: iliwysfyasbysuoi by the 1975 Guilty Pleasure: Carly Rae Jepsen except I don't feel guilty at all bcos she's incredible"
const taylor: ExecCard = {
  image: '/images/tayloradam.png',
  imageAlt: 'taylor selfie',
  name: 'Taylor Adam',
  role: 'President',
  description: taylorDescription,
}

const lukeDescription: string = "I am a 3rd year Physics student and Vice-President of Warwick BandSoc! As Vice-President I act as the President's right hand man helping run and organise the society by planning events, organising collaborations with other societies and making sure that everyone in the society is having a great time! I play bass in two bands, a hard rock metal band called Brazen Bull (Self titled album out on all streaming platforms 😉 ) and the balls to the walls high energy rock band MORTIS! I may also have a few more projects in the works so keep an eye out for those 👀"
const luke: ExecCard = {
  image: '/images/luke.png',
  imageAlt: 'luke selfie',
  name: 'Luke Green',
  role: 'Vice President',
  description: lukeDescription,
}

const robbieDescription: string = "I'm mainly a singer but can also play guitar and piano. I'm your secretary which means I organise the exec meetings and manage the weekly email. I'm also the welfare officer so please feel free to come to me with any welfare related issues. My main project is Mortis which I hope you guys will hear! but I'm also working on a few other things👀 "
const robbie: ExecCard = {
  image: '/images/robbie.png',
  imageAlt: 'robbie selfie',
  name: 'Robbie Marlow',
  role: 'Secretary + Welfare Officer',
  description: robbieDescription,
}

const noahDescription: string = "I am in 2nd year studying Economics, Philosophy, and Psychology. As Treasurer, I run the finances and accounts of BandSoc. This involves managing the practice room bookings, and paying for a new drum kit every week one of you lot break something! As well as this, I also help the other exec organise and run cool events for the society. I play bass for sunny side down, a band for the softboy indie heads out there, (@sunnysidedownband on instagram and tiktok). I am also frontman and songwriter for HomeBread, aspiring midwest emo if you’re into that (@homebreadband on instagram)."
const noah: ExecCard = {
  image: '/images/noah.png',
  imageAlt: 'noah selfie',
  name: 'Noah Bezuidenhoudt',
  role: 'Treasurer',
  description: noahDescription,
}

const ethanDescription: string = "I am a second year systems engineering student and the Head Tech of Warwick BandSoc. It's my job (along with the deputy tech) to make sure the equipment used at events and in the practice room is working as well as it can be. I currently play guitar and sing backing vox in Mortis."
const ethan: ExecCard = {
  image: '/images/ethan.png',
  imageAlt: 'ethan selfie',
  name: 'Ethan Stubley',
  role: 'Head Tech',
  description: ethanDescription,
}


const Home: NextPage = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <Box >
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Bandsoc Home Page" key="title" />
      </Head>



      <Box className='container'>
        <section className="one">
          <Layout />
          <Flex justifyContent='space-around' >
            <Box ml='10%' mt='2%' width='35%' borderStyle='solid' >
              <Image src='https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6' alt='Dan Abramov' />
            </Box>

            <Box mr='10%' mt='2%' width='35%' borderStyle='solid' >
              <Text fontSize='4xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </Text>
            </Box>
          </Flex>
          <Center>

            <ArrowDownIcon w={10} h={10} mt='10' onClick={handleClick} cursor='pointer'/>
          </Center>
        </section>

        <section className="two" ref={ref}>
          <Center>
            <Text fontSize='4xl' mt='5'>Meet the <b>execs</b></Text>
          </Center>
          <Center>
            <Flex justifyContent='space-between' flexWrap='wrap' m='5' width='80%'>  
              <Box mt='5' mb='5' width='20em'  >
                <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />
              </Box>
              <Box mt='5' mb='5' width='20em'   >
                <ExecCard image={luke.image} imageAlt={luke.imageAlt} name={luke.name} role={luke.role} description={luke.description} />
              </Box>
              <Box mt='5' mb='5' width='20em'  >
                <ExecCard image={robbie.image} imageAlt={robbie.imageAlt} name={robbie.name} role={robbie.role} description={robbie.description} />
              </Box>
              <Box mt='5' mb='5' width='20em'  >
                {/* CHECK NUMBER OF CHARACTERS IN INPUT STRINGS TO EXEC CARD AND MAKE FONT SMALLER TO MAKE IT FIT IF NECESSARY */}
                <ExecCard image={noah.image} imageAlt={noah.imageAlt} name='Noah Bezuix'role={noah.role} description={noah.description} />
              </Box>
              <Box mt='5' mb='5' width='20em'  >
                <ExecCard image={ethan.image} imageAlt={ethan.imageAlt} name={ethan.name} role={ethan.role} description={ethan.description} />
              </Box>
              <Box mt='5' mb='5' width='20em'  >
                <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />
              </Box>
              <Box mt='5' mb='5' width='20em' >
                <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />
              </Box>
              <Box mt='5' mb='5' width='20em'  >
                <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />
              </Box>
              <Box mt='5' mb='5' width='20em' >
                <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />
              </Box>

            </Flex>
          </Center>

        </section>

        <section className="three">
          <Center>
            <Text fontSize='4xl' mt='5'>Events</Text>
          </Center>
        </section>
      </Box>

    </Box>
  )
}

export default Home
