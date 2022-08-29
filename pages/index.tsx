import type { NextPage } from 'next'
import Head from 'next/head'
import ExecCard from '../components/ExecCard'
import { Flex, Box, Text, Image, Center } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import Layout from '../components/Layout'
import React, { useRef } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Link, IconButton, Icon, Divider } from '@chakra-ui/react'
import { FaDiscord, FaInstagram, FaFacebook, FaTwitter, FaCopyright } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
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

const oliDescription: string = "I'm a 2nd year maths student and I help out Ethan with all things tech! I'm a drummer and was so bad at breaking things last year that I felt guilty and took on this role 🥺🥺 You'll also see me running the odd circle/social event. My main band is Feed the Mammoth 🦣🦣🦣 but if you ever need a drummer for your project, drop me a message and see if I'm available because I love new projects..."
const oli: ExecCard = {
  image: '/images/oli.png',
  imageAlt: 'Oli selfie',
  name: 'Oli Brown',
  role: 'Deputy Tech',
  description: oliDescription,
}

const jasperDescription: string = "I am a 2nd PPE student. As publicity officer my job is to market all BandSoc events. This involves creating posters, running the social media accounts and advertising all the events we run as a society. I also help out with the general running of the society. I play guitar for Sunny Side Down, (@sunnysidedownband on instagram and tiktok)! I also like to sing some of my own stuff like a soft indie boy (jasperlarsen on tiktok)"
const jasper: ExecCard = {
  image: '/images/jasper.png',
  imageAlt: 'Jasper selfie',
  name: 'Jasper Chance-Larsen',
  role: 'Publicity',
  description: jasperDescription,
}

const emreDescription: string = "I'm a 2nd year Maths & CS student, and as the webmaster, I'll be your contact for any spreadsheet related problems, and I also help maintain the website of BandSoc. I'm currently the songwriter and the guitarist of the lovely noisy post-punk band Roman Candles. Also, as a big blueshead I'm looking forward to doing some bluesy stuff this year, stay tuned for that 🙂"
const emre: ExecCard = {
  image: '/images/emre.png',
  imageAlt: 'Emre selfie',
  name: 'Emre Ulusoy',
  role: 'Webmaster',
  description: emreDescription,
}

const noahMeddDescription: string = "I'm a 3rd year Philosophy student. I'm the guy that runs around taking pics that you get 1-2 working months later :)) I currently play guitar and sing in The Kellys (indie rock). If you like Queen I will be your favourite exec member."
const noahMedd: ExecCard = {
  image: '/images/noahMedd.png',
  imageAlt: 'Noah selfie',
  name: 'Noah Medd',
  role: 'Photographer',
  description: noahMeddDescription,
}

const Home: NextPage = () => {
  const refOne = useRef<null | HTMLDivElement>(null);

  const handleClickOne = () => {
    refOne.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const refTwo = useRef<null | HTMLDivElement>(null);

  const handleClickTwo = () => {
    refTwo.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const refThree = useRef<null | HTMLDivElement>(null);

  const handleClickThree = () => {
    refThree.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box >
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Bandsoc Home Page" key="title" />
      </Head>
      
      <Box className='container'>
        <section className="one" ref={refThree}>
        <Layout />
          <Flex justifyContent='space-around' flexDirection={['column', 'column', 'row', 'row']} minH='76vh' maxH='100vh' margin='auto' >

            <Box ml='10%' mt='2%' width={['0', '0', '45%', '35%']} display={['none', 'none', 'flex', 'flex']} borderStyle='solid' p='0' marginBottom='0' >
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <Image src='/images/tide.png' alt='Dan Abramov' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src='/images/sunnysidedown.png' alt='Dan Abramov' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src='/images/owain.jpg' alt='Dan Abramov' />
                </SwiperSlide>

              </Swiper>
            </Box>

            <Box mr={['0%', '10%', '10%', '10%']} mt={['0', '0', '2%', '2%']} width={['100%', '100%', '45%', '35%']} textAlign={['center', 'center', 'left', 'left']} alignItems={['center', 'center', 'none', 'none']} borderStyle='solid' maxH='100%' p={[10, 5, 0,]} >
              <Text fontSize={{ base: '40px', md: '40px', lg: '40px' }}>
                Welcome to BandSoc
              </Text>
              <Text fontSize={{ base: '20px', md: '20px', lg: '25px' }} >
                BandSoc is a society for music lovers and bands - whatever your preferred genre we have the widest variety of bands and people as one of the university&apos;s largest and most active societies. <br /> Whether you&apos;re already making music or looking to get started, there will always be someone to jam with.
              </Text>
              <br />
              <Text fontSize={{ base: '20px', md: '20px', lg: '25px' }} minH="5vh">
                Buy a membership <Link color='teal.500' href='https://www.warwicksu.com/societies-sports/societies/band/' isExternal >here</Link>
              </Text>

              <Flex justifyContent='space-evenly' maxW={['85%','80%','60%','60%']} margin='auto' mt={[ '0','2','6', '6']}  >
                <a href="https://discord.gg/n6myHWDcUv" target="_blank" rel="noopener noreferrer">
                  <Icon aria-label='discord logo/link' w={10} h={10}
                    as={FaDiscord}
                  />
                </a>

                <a href="https://www.instagram.com/warwickbandsoc/" target="_blank" rel="noopener noreferrer">
                  <Icon aria-label='instagram logo/link' w={10} h={10}
                    as={FaInstagram}
                  />
                </a>
                <a href="https://www.facebook.com/warwickbandsoc" target="_blank" rel="noopener noreferrer">
                  <Icon aria-label='facebook logo/link' w={10} h={10}
                    as={FaFacebook}
                  />
                </a>
                <a href="https://twitter.com/warwickbandsoc?lang=en-GB" target="_blank" rel="noopener noreferrer">
                  <Icon aria-label='twitter logo/link' w={10} h={10}
                    as={FaTwitter}
                  />
                </a>
              </Flex>
            </Box>
          </Flex>

          <Center>
            <ArrowDownIcon w={50} h={50} mt='10' onClick={handleClickOne} cursor='pointer' alignItems='flex-end' display={['none', 'none', 'flex', 'flex']} />
          </Center>
          
        </section>
        <Divider orientation='horizontal' />
        <section className="two" ref={refOne}>
          <Center>
            <Text fontSize='4xl' mt='5'>Meet the <b>Exec</b></Text>
          </Center>

          <Swiper
            slidesPerView="auto"
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >

            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5' >
                <ExecCard image={taylor.image} imageAlt={taylor.imageAlt} name={taylor.name} role={taylor.role} description={taylor.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5'  >
                <ExecCard image={luke.image} imageAlt={luke.imageAlt} name={luke.name} role={luke.role} description={luke.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5'  >
                <ExecCard image={robbie.image} imageAlt={robbie.imageAlt} name={robbie.name} role={robbie.role} description={robbie.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5'  >
                {/* CHECK NUMBER OF CHARACTERS IN INPUT STRINGS TO EXEC CARD AND MAKE FONT SMALLER TO MAKE IT FIT IF NECESSARY */}
                <ExecCard image={noah.image} imageAlt={noah.imageAlt} name={noah.name} role={noah.role} description={noah.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5'  >
                <ExecCard image={ethan.image} imageAlt={ethan.imageAlt} name={ethan.name} role={ethan.role} description={ethan.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5'  >
                <ExecCard image={oli.image} imageAlt={oli.imageAlt} name={oli.name} role={oli.role} description={oli.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5' >
                <ExecCard image={jasper.image} imageAlt={jasper.imageAlt} name={jasper.name} role={jasper.role} description={jasper.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5'  >
                <ExecCard image={emre.image} imageAlt={emre.imageAlt} name={emre.name} role={emre.role} description={emre.description} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt='5' mb='5' width='20em' p='5' >
                <ExecCard image={noahMedd.image} imageAlt={noahMedd.imageAlt} name={noahMedd.name} role={noahMedd.role} description={noahMedd.description} />
              </Box>
            </SwiperSlide>

          </Swiper>
          <Center>
            <ArrowDownIcon w={10} h={10} mt='10' onClick={handleClickTwo} cursor='pointer' />
          </Center>

        </section>

        <section className="three" ref={refTwo}>
          <Center>
            <Text fontSize='4xl' mt='5'>Events</Text>
          </Center>

          <Tabs variant='soft-rounded' colorScheme='purple' align='center'>
            <TabList>
              <Tab>Featured</Tab>
              <Tab>Term Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box style={{ display: 'flex', justifyContent: 'center' }} >
                  <InstagramEmbed url="https://www.instagram.com/p/ChZnU1-KmQB/" width={500} height={550} />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box style={{ display: 'flex', justifyContent: 'center' }} >
                  <InstagramEmbed url="https://www.instagram.com/p/CclSNY5K5ph/" width={500} height={550} />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Center>
            <ArrowUpIcon w={10} h={10} onClick={handleClickThree} cursor='pointer' />
          </Center>
          <Flex alignItems='center' justifyContent='center'>
          <Text color='grey' fontSize='xs'>Copyright</Text>
            <Icon aria-label='copyright logo' w={5} h={5}
              as={FaCopyright} color='grey' p='1'
            />
            <Text color='grey' fontSize='xs'>https://boraakyuz.me/</Text>
          </Flex>

        </section>


      </Box>

    </Box>
  )
}

export default Home
