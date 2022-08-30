import React, { useState } from 'react'
import NextLink from "next/link"
import { HStack, Box, Spacer, Flex, Text, Link, Image, Button, useColorMode, IconButton, Icon } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
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

                <Text fontSize='2xl' color='#d3d3d3' >
                    Practice Room
                </Text>

                <Text fontSize='2xl' color='#d3d3d3' >
                    Battle of the Bands
                </Text>

                <Spacer />

                <Text fontSize='2xl' color='#d3d3d3' >
                    Log in
                </Text>

                <Text fontSize='2xl' mr='3rem' color='#d3d3d3'>
                    Sign Up
                </Text>

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
                        onClick={() => changeDisplay('none')} />
                </Flex>
                <Flex direction='column' align='center'>

                    <NextLink href='/' passHref>
                        <Link fontSize='2xl' >
                            Home
                        </Link>
                    </NextLink>

                    <Text fontSize='2xl' color='#d3d3d3' >
                        Practice Room
                    </Text>

                    <Text fontSize='2xl' color='#d3d3d3' >
                        Battle of the Bands
                    </Text>

                    <Spacer />

                    <Text fontSize='2xl' color='#d3d3d3' >
                        Log in
                    </Text>

                    <Text fontSize='2xl' color='#d3d3d3' >
                        Sign Up
                    </Text>

                </Flex>
            </Flex>
        </Flex>

    )
}

export default Navbar