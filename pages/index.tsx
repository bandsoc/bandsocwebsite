import type { NextPage } from 'next';
import Head from 'next/head';
import ExecCard from '../components/ExecCard';
import { Flex, Box, Text, Image, Center } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import Layout from '../components/Layout';
import React, { useRef } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Icon,
  Divider,
} from '@chakra-ui/react';
import {
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaCopyright,
  FaYoutube,
} from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
interface ExecCard {
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  description: string;
}

const theoDescription: string =
  'Hi, I’m Theo, a second year computer science student and bassist of Type One. It’s my job along with the other techs to set up and maintain all the gear in the practise room and at our gigs.';
const theo: ExecCard = {
  image: '/images/Theo good.jpg',
  imageAlt: 'theo selfie',
  name: 'Theo',
  role: 'Deputy Tech',
  description: theoDescription,
};

const rhysDescription: string =
  'Hi I’m Rhys, a second year media student and your head tech for this year. My job is to maintain equipment and lead all of the load-ins for any gig we have. I play drums in Type One and Average Speed Check.';
const rhys: ExecCard = {
  image: '/images/Rhys good.jpg',
  imageAlt: 'rhys selfie',
  name: 'Rhys',
  role: 'Head Tech',
  description: rhysDescription,
};

const emreDescription: string =
  'Hey all, I’m a third year discrete maths student and your vice president, and I will be assisting the President in running the society and organising events for you to enjoy!';
const emre: ExecCard = {
  image: '/images/dr emre good 1.jpg',
  imageAlt: 'emre selfie',
  name: 'Emre',
  role: 'Vice President',
  description: emreDescription,
};

const cosmosDescription: string =
  "Hi, I’m Cosmos Zero and I’m a third year physics student. I’m your Photographer for this year. I'll always find the time to help out with any creative projects! ";
const cosmos: ExecCard = {
  image: '/images/Cosmos good.png',
  imageAlt: 'cosmos selfie',
  name: 'Cosmos',
  role: 'Photographer',
  description: cosmosDescription,
};

const kiranDescription: string =
  'Hey guys :) I am a vaginal year linguistics student and I am your deputy tech; I will be working with the other tech exec to help set up for gigs and events.';
const kiran: ExecCard = {
  image: '/images/Kiran good.jpg',
  imageAlt: 'kiran selfie',
  name: 'Kiran',
  role: 'Deputy Tech',
  description: kiranDescription,
};

const oliDescription: string =
  'Hey! I’m Oli (third year Maths) and I’m your BandSoc President. It’s my job to run the society day to day. I’ll be delegating tasks amongst the exec, running the weekly exec meetings, and generally keeping the BandSoc ship sailing. I can’t wait to keep building the awesome live music community we have at Warwick - this year will be mega!!!';
const oli: ExecCard = {
  image: '/images/OLI.png',
  imageAlt: 'Oli selfie',
  name: 'Oli Brown',
  role: 'President',
  description: oliDescription,
};

const samDescription: string =
  "Hey, I’m Sam, a third year computer scientist. I'm a big fan of all things indie and alternative and I’ll be your Webmaster for next year - I’ll be sure to get those booking sheets out on time!";
const sam: ExecCard = {
  image: '/images/Sam good.JPG',
  imageAlt: 'Sam selfie',
  name: 'Sam',
  role: 'Webmaster',
  description: samDescription,
};

const jayDescription: string =
  'Hi, I’m Jay, and I’m in my final year of a languages degree. I’m your Treasurer for this year, so it’s my job to take care of BandSoc’s money. I’m also your Publicity officer, so I’ll be promoting all the exciting events we have to offer!';
const jay: ExecCard = {
  image: '/images/Jay good.png',
  imageAlt: 'Jay selfie',
  name: 'Jay',
  role: 'Treasurer and Publicity',
  description: jayDescription,
};

const joeDescription: string =
  ' Hi, I’m Joe! I’m a third year PPL student and am BandSoc’s welfare officer. It’s my job to make sure BandSoc continues to be a welcoming and safe environment for all members so if you have any issues don’t hesitate to get in touch!';
const joe: ExecCard = {
  image: '/images/Joe good.jpg',
  imageAlt: 'Joe selfie',
  name: 'Joe',
  role: 'Welfare',
  description: joeDescription,
};

const aleezaDescription: string =
  'Hi x I’m Aleeza, a second-year Management Student. I am your Secretary and Women’s Officer this year. It’s my job to make sure BandSoc is as inclusive as possible, and the exec meetings are organised, along with handling the weekly email x';
const aleeza: ExecCard = {
  image: '/images/Aleeza good.jpg',
  imageAlt: 'Aleeza selfie',
  name: 'Aleeza',
  role: "Secretary and Womens'",
  description: aleezaDescription,
};

const maxDescription: string =
  'Ayup, I’m Max, a second year Engineering student, lead guitarist for Nos Da and your Marketing exec! It’s my job to make sure that you lot are informed of our upcoming gigs and socials.';
const max: ExecCard = {
  image: '/images/Me good.jpg',
  imageAlt: 'Max selfie',
  name: 'Max',
  role: 'Marketing',
  description: maxDescription,
};

const jacobDescription: string =
  'Hey, I’m Jacob and I’m a third year economics student, and the guitarist in Type One. I’m the Social Sec for BandSoc - I’ll be putting on our social events across the year!';
const jacob: ExecCard = {
  image: '/images/Jacob good.jpg',
  imageAlt: 'Jacob selfie',
  name: 'Jacob',
  role: 'Social',
  description: jacobDescription,
};

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
    <Box>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Bandsoc Home Page" key="title" />
      </Head>

      <Box className="container">
        <section className="one" ref={refThree}>
          <Layout />
          <Flex
            justifyContent="space-around"
            flexDirection={['column', 'column', 'row', 'row']}
            minH="76vh"
            maxH="82vh"
            margin="auto"
          >
            <Box
              ml="10%"
              mt="2%"
              width={['0', '0', '45%', '35%']}
              display={['none', 'none', 'flex', 'flex']}
              borderStyle="solid"
              p="0"
              marginBottom="0"
              height="92vh"
            >
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
                  <Image src="/images/tide.png" alt="Dan Abramov" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/sunnysidedown.png" alt="Dan Abramov" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/images/owain.jpg" alt="Dan Abramov" />
                </SwiperSlide>
              </Swiper>
            </Box>

            <Box
              mr={['0%', '10%', '10%', '10%']}
              mt={['0', '0', '2%', '2%']}
              width={['100%', '100%', '45%', '35%']}
              textAlign={['center', 'center', 'left', 'left']}
              alignItems={['center', 'center', 'none', 'none']}
              borderStyle="solid"
              maxH="100%"
              p={[10, 5, 0]}
            >
              <Text fontSize={{ base: '40px', md: '40px', lg: '40px' }}>
                Welcome to BandSoc
              </Text>
              <Text fontSize={{ base: '20px', md: '20px', lg: '25px' }}>
                BandSoc is a society for music lovers and bands - whatever your
                preferred genre we have the widest variety of bands and people
                as one of the university&apos;s largest and most active
                societies. <br /> Whether you&apos;re already making music or
                looking to get started, there will always be someone to jam
                with.
              </Text>
              <br />
              <Text
                fontSize={{ base: '20px', md: '20px', lg: '25px' }}
                minH="5vh"
              >
                Buy a membership{' '}
                <Link
                  color="teal.500"
                  href="https://www.warwicksu.com/societies-sports/societies/band/"
                  isExternal
                >
                  here
                </Link>
              </Text>

              <Flex
                justifyContent="space-evenly"
                maxW={['85%', '80%', '60%', '60%']}
                margin="auto"
                mt={['0', '2', '6', '6']}
              >
                <a
                  href="https://discord.gg/n6myHWDcUv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    aria-label="discord logo/link"
                    w={[10, 10, 8, 10]}
                    h={[10, 10, 8, 10]}
                    as={FaDiscord}
                  />
                </a>

                <a
                  href="https://www.instagram.com/warwickbandsoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    aria-label="instagram logo/link"
                    w={[10, 10, 8, 10]}
                    h={[10, 10, 8, 10]}
                    as={FaInstagram}
                  />
                </a>
                <a
                  href="https://www.facebook.com/warwickbandsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    aria-label="facebook logo/link"
                    w={[10, 10, 8, 10]}
                    h={[10, 10, 8, 10]}
                    as={FaFacebook}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCqGvmDGNnNI2_6f_rTwaDlw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    aria-label="twitter logo/link"
                    w={[10, 10, 8, 10]}
                    h={[10, 10, 8, 10]}
                    as={FaYoutube}
                  />
                </a>
              </Flex>
            </Box>
          </Flex>
          <Center>
            <ArrowDownIcon
              w={10}
              h={10}
              onClick={handleClickOne}
              cursor="pointer"
              display={['none', 'none', 'flex', 'flex']}
            />
          </Center>
        </section>

        <Divider orientation="horizontal" />
        <section className="two" ref={refOne}>
          <Center>
            <Text fontSize="4xl" mt="5">
              Meet the Exec
            </Text>
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
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={oli.image}
                  imageAlt={oli.imageAlt}
                  name={oli.name}
                  role={oli.role}
                  description={oli.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={emre.image}
                  imageAlt={emre.imageAlt}
                  name={emre.name}
                  role={emre.role}
                  description={emre.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={rhys.image}
                  imageAlt={rhys.imageAlt}
                  name={rhys.name}
                  role={rhys.role}
                  description={rhys.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                {/* CHECK NUMBER OF CHARACTERS IN INPUT STRINGS TO EXEC CARD AND MAKE FONT SMALLER TO MAKE IT FIT IF NECESSARY */}
                <ExecCard
                  image={kiran.image}
                  imageAlt={kiran.imageAlt}
                  name={kiran.name}
                  role={kiran.role}
                  description={kiran.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={theo.image}
                  imageAlt={theo.imageAlt}
                  name={theo.name}
                  role={theo.role}
                  description={theo.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={jay.image}
                  imageAlt={jay.imageAlt}
                  name={jay.name}
                  role={jay.role}
                  description={jay.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={max.image}
                  imageAlt={max.imageAlt}
                  name={max.name}
                  role={max.role}
                  description={max.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={sam.image}
                  imageAlt={sam.imageAlt}
                  name={sam.name}
                  role={sam.role}
                  description={sam.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={jacob.image}
                  imageAlt={jacob.imageAlt}
                  name={jacob.name}
                  role={jacob.role}
                  description={jacob.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={aleeza.image}
                  imageAlt={aleeza.imageAlt}
                  name={aleeza.name}
                  role={aleeza.role}
                  description={aleeza.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={joe.image}
                  imageAlt={joe.imageAlt}
                  name={joe.name}
                  role={joe.role}
                  description={joe.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={cosmos.image}
                  imageAlt={cosmos.imageAlt}
                  name={cosmos.name}
                  role={cosmos.role}
                  description={cosmos.description}
                />
              </Box>
            </SwiperSlide>
          </Swiper>
          <Center>
            <ArrowDownIcon
              w={10}
              h={10}
              mt="10"
              onClick={handleClickTwo}
              cursor="pointer"
            />
          </Center>
        </section>
        <Divider orientation="horizontal" />
        <section className="three" ref={refTwo}>
          <Center>
            <Text fontSize="4xl" mt="5">
              Events
            </Text>
          </Center>

          <Tabs variant="soft-rounded" colorScheme="purple" align="center">
            <TabList>
              <Tab>Featured</Tab>
              <Tab>Term Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CygJLV5so_h/"
                    width={500}
                    height={550}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramEmbed
                    url="https://www.instagram.com/p/Cx2xmiessUX/"
                    width={500}
                    height={550}
                  />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Center>
            <ArrowUpIcon
              w={10}
              h={10}
              onClick={handleClickThree}
              cursor="pointer"
            />
          </Center>
          <Flex alignItems="center" justifyContent="center">
            <Text color="grey" fontSize="xs">
              Copyright
            </Text>
            <Icon
              aria-label="copyright logo"
              w={5}
              h={5}
              as={FaCopyright}
              color="grey"
              p="1"
            />
            <Text color="grey" fontSize="xs">
              https://github.com/bandsoc/bandsocwebsite
            </Text>
          </Flex>
        </section>
      </Box>
    </Box>
  );
};

export default Home;
