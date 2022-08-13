import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({children} : any) => {
    return (
        <Flex color="black" direction='column' width='100%' minWidth='max-content' >
            <Navbar />
            {children}
        </Flex>
    )
}

export default Layout