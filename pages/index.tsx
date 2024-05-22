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

const jakeDescription: string =
  'Yo, I’m Jake, and I’m going to be the social sec (legend) this year for band soc. I’ll be organising and running the socials and be a friendly face around the other events.';
const jake: ExecCard = {
  image: '/images/jake.jpg',
  imageAlt: 'jake selfie',
  name: 'Jake',
  role: 'Social Secretary',
  description: jakeDescription,
};

const rhysDescription: string =
  'Hey there my names Rhys and I’m your vice president and Tech for this year, I study media and am obsessed with everything midwest emo and math rock.';
const rhys: ExecCard = {
  image: '/images/rhys.jpg',
  imageAlt: 'rhys selfie',
  name: 'Rhys',
  role: 'Vice President & Tech',
  description: rhysDescription,
};

const onurDescription: string =
  'Hi, I’m Onur, and I’m your Tour Sec this year! I’ll be organising BandSoc’s annual UK tour during the first week of the Easter Holiday :)';
const onur: ExecCard = {
  image: '/images/onur.png',
  imageAlt: 'onur selfie',
  name: 'Onur',
  role: 'Tour Secretary',
  description: onurDescription,
};

const emiliaDescription: string =
  "Hi, I'm your new Webmaster and I'm excited to be helping out with tasks like maintaining the BandSoc website and Discord server! :)";
const emilia: ExecCard = {
  image: '/images/emilia.jpg',
  imageAlt: 'emilia selfie',
  name: 'Emilia',
  role: 'Webmaster',
  description: emiliaDescription,
};

const jayDescription: string =
  'I’m Jay, your President for this year! I am so excited to take charge of running all our favourite events, plus some new ones, and I look forward to seeing you all play.';
const jay: ExecCard = {
  image: '/images/jay.jpg',
  imageAlt: 'jay selfie',
  name: 'Jay',
  role: 'President',
  description: jayDescription,
};

const tobyDescription: string =
  'Hi, I’m Toby, your new Secretary! If I’m not performing on stage, you can usually find me at the barrier at all the BandSoc gigs';
const toby: ExecCard = {
  image: '/images/toby.jpg',
  imageAlt: 'toby selfie',
  name: 'Toby',
  role: 'Secretary',
  description: tobyDescription,
};

const emmaDescription: string =
  'Hi, I’m one of the new techs! I love music gear and I am excited to become more involved with BandSoc.';
const emma: ExecCard = {
  image: '/images/emma.jpg',
  imageAlt: 'emma selfie',
  name: 'Emma',
  role: 'Tech',
  description: emmaDescription,
};

const noahDescription: string =
  'Looking forward to taking lots of society and gig photos both on film and digitally :)';
const noah: ExecCard = {
  image: '/images/noah.jpg',
  imageAlt: 'noah selfie',
  name: 'Noah',
  role: 'Photographer',
  description: noahDescription,
};

const lizaDescription: string =
  'Hey I’m Liza and I’m in charge of creating propaganda over the coming year. When I’m not making silly posts for you lot I’ll also be helping out with gigs and socials.';
const liza: ExecCard = {
  image: '/images/liza.jpg',
  imageAlt: 'liza selfie',
  name: 'Liza',
  role: "Marketing Officer",
  description: lizaDescription,
};

const aliceDescription: string =
  'As treasurer and women’s/non-binary officer, I’ll be making sure bandsoc avoids bankruptcy and stays an inclusive and welcoming society for all!';
const alice: ExecCard = {
  image: '/images/alice.jpg',
  imageAlt: 'alice selfie',
  name: 'Alice',
  role: 'Treasurer and Women’s Offficer',
  description: aliceDescription,
};

const thomDescription: string =
  'Hi, I’m Thom the new Welfare officer for Bandsoc, here to help with welfare concerns or thoughts throughout the year.';
const thom: ExecCard = {
  image: '/images/thom.png',
  imageAlt: 'thom selfie',
  name: 'Thom',
  role: 'Welfare Officer',
  description: thomDescription,
};

const mattDescription: string =
  'Hey all, I’m Matt and I’m one of the three techs for bandsoc. My job is to look after the gear and get things running for live shows.';
const matt: ExecCard = {
  image: '/images/matt.jpg',
  imageAlt: 'matt selfie',
  name: 'Matt',
  role: 'Tech',
  description: mattDescription,
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
                <ExecCard
                  image={matt.image}
                  imageAlt={matt.imageAlt}
                  name={matt.name}
                  role={matt.role}
                  description={matt.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                {/* CHECK NUMBER OF CHARACTERS IN INPUT STRINGS TO EXEC CARD AND MAKE FONT SMALLER TO MAKE IT FIT IF NECESSARY */}
                <ExecCard
                  image={emma.image}
                  imageAlt={emma.imageAlt}
                  name={emma.name}
                  role={emma.role}
                  description={emma.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={jake.image}
                  imageAlt={jake.imageAlt}
                  name={jake.name}
                  role={jake.role}
                  description={jake.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={thom.image}
                  imageAlt={thom.imageAlt}
                  name={thom.name}
                  role={thom.role}
                  description={thom.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={liza.image}
                  imageAlt={liza.imageAlt}
                  name={liza.name}
                  role={liza.role}
                  description={liza.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={alice.image}
                  imageAlt={alice.imageAlt}
                  name={alice.name}
                  role={alice.role}
                  description={alice.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={noah.image}
                  imageAlt={noah.imageAlt}
                  name={noah.name}
                  role={noah.role}
                  description={noah.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={toby.image}
                  imageAlt={toby.imageAlt}
                  name={toby.name}
                  role={toby.role}
                  description={toby.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={emilia.image}
                  imageAlt={emilia.imageAlt}
                  name={emilia.name}
                  role={emilia.role}
                  description={emilia.description}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box mt="5" mb="5" width="20em" p="5">
                <ExecCard
                  image={onur.image}
                  imageAlt={onur.imageAlt}
                  name={onur.name}
                  role={onur.role}
                  description={onur.description}
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
                    url="https://www.instagram.com/p/C69NzLYNO6Y/"
                    width={500}
                    height={550}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramEmbed
                    url="https://www.instagram.com/warwickbandsoc/p/C50ld9bNkXX/?img_index=2"
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
