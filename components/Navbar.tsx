import React from 'react'
import NextLink from "next/link"
import { HStack, Box, Spacer, Flex, Text, Link } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Flex gap='5' direction="row" height="100%" mt='1rem'>

            <NextLink href='/' passHref>
                <Link ml='3rem' fontSize='2xl'>
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