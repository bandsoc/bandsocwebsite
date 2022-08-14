import React from 'react'
import { Button, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({ children }: any) => {

    return (
        <>
            <Flex direction='column' maxW='100%' minWidth='max-content' >
                <Navbar />
                {children}
            </Flex>
            
        </>
    )
}

export default Layout