import React from 'react'
import { Button, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({ children }: any) => {

    return (
        <>
            <Flex direction='column' width='100%' minWidth='max-content' >
                <Navbar />
                {children}
            </Flex>
            
        </>
    )
}

export default Layout