import React from 'react'
import { HStack, Box, Spacer, Flex, Text, Link } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Flex gap='5' direction="row" height="100%" mt='1rem'>           
            <Link ml='3rem'>
                Home
            </Link>
            <Link>
                Practice Room
            </Link>
            <Link>
                BotB
            </Link>
            <Spacer />
            <Link>
                Log in
            </Link>
            <Link mr='3rem'>
                Sign Up
            </Link>        
        </Flex>
    )
}

export default Navbar