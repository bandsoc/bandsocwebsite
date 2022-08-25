import React, { useState } from 'react'
import NextLink from "next/link"
import { HStack, Box, Spacer, Flex, Text, Link, Image, Button, useColorMode, IconButton, Icon } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [display, changeDisplay] = useState('none');

    return (
        <Flex justifyContent='space-between'>
            <Box boxSize='4rem' ml='1rem' borderRadius='full' mt={1}>
                <Image src='/images/logo.png' alt='Bandsoc Logo' />
            </Box>

            <Flex gap='5' direction="row" height="100%" mt='1rem' alignItems='center'
                display={['none', 'none', 'flex', 'flex', 'flex']} width='100%'>

                <NextLink href='/' passHref>
                    <Link fontSize='2xl' ml={4}>
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
            <IconButton aria-label='open menu' size='lg' mr={3} mt={3}
                icon={<HamburgerIcon />} display={['flex', 'flex', 'none', 'none']} 
                onClick={() => changeDisplay('flex')} />

            <Flex w='100vw'
            bgColor="gray.50"
            zIndex={20}
            h='100vh'
            pos='fixed'
            top='0'
            left='0'
            overflow='auto'
            flexDirection='column'
            display={display}
            >
                <Flex justifyContent='flex-end'>
                    <IconButton mt={3} mr={3} aria-label='close menu' size='lg' 
                    icon={<CloseIcon />} 
                    onClick={() => changeDisplay('none')}/>
                </Flex>
                <Flex direction='column' align='center'>
                    <NextLink href='/' passHref>
                        <Link fontSize='2xl' >
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

                    <NextLink href='/login' passHref>
                        <Link fontSize='2xl'>
                            Log in
                        </Link>
                    </NextLink>

                    <NextLink href='/signup' passHref>
                        <Link fontSize='2xl'>
                            Sign Up
                        </Link>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex>

    )
}

export default Navbar