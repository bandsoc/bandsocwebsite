import React from 'react'
import NextLink from "next/link"
import { HStack, Box, Spacer, Flex, Text, Link, Image } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Flex gap='5' direction="row" height="100%" mt='1rem' alignItems='center'>
            <Box boxSize='4rem' ml='1rem'   borderRadius='full'>
                <Image src='/images/logo.png' alt='Bandsoc Logo' />
            </Box>

            <NextLink href='/' passHref>
                <Link  fontSize='2xl'>
                    Home
                </Link>
            </NextLink> 

            <NextLink href='/practiceroom' passHref>
                <Link fontSize='2xl'>
                    Practice Room
                </Link>
            </NextLink>

            <NextLink href='/botb' passHref>
                <Link fontSize='2xl'>
                    BotB
                </Link>
            </NextLink>

            <Spacer />

            <NextLink href='/login' passHref> 
                <Link fontSize='2xl'>
                    Log in
                </Link>
            </NextLink>

            <NextLink href='/signup' passHref> 
                <Link mr='3rem' fontSize='2xl'>
                    Sign Up
                </Link>  
            </NextLink>      
        </Flex>
    )
}

export default Navbar