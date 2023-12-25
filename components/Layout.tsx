import React from 'react';
import { Button, Flex, Spacer, useColorMode, Divider } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Flex direction="column">
        <Navbar />
        {children}
      </Flex>
    </>
  );
};
export default Layout;
