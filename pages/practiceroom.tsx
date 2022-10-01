import type { NextPage } from 'next'
import Head from 'next/head'
import ExecCard from '../components/ExecCard'
import { Flex, Box, Text, Image, Center, Stack } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import Layout from '../components/Layout'
import React, { useRef } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Link, IconButton, Icon, Divider } from '@chakra-ui/react'
import { FaDiscord, FaInstagram, FaFacebook, FaTwitter, FaCopyright, FaYoutube } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const PracticeRoom: NextPage = () => {
    
    return (
        <Box>
            <Head>
                <title>Practice Room</title>
                <meta content="Practice Room Booking Details"/>
            </Head>

            <Box className='container'>
                <SwiperSlide>
                  <Image src='/images/tide.png' alt='Dan Abramov' />
                </SwiperSlide>
            </Box>
        </Box>
    )
}

export default PracticeRoom