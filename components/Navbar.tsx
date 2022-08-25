import React from 'react'
import NextLink from "next/link"
import { HStack, Box, Spacer, Flex, Text, Link, Image, Button, useColorMode } from '@chakra-ui/react'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex gap='5' direction="row" height="100%" mt='1rem' alignItems='center'>
            <Box boxSize='4rem' ml='1rem' borderRadius='full'>
                <Image src='/images/logo.png' alt='Bandsoc Logo' />
            </Box>

            <NextLink href='/' passHref>
                <Link fontSize='2xl'>
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
                <Link fontSize='2xl' mr='3rem'>
                    Sign Up
                </Link>
            </NextLink>
        </Flex>
    )
}

export default Navbar