import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Flex direction="column">
        <Navbar />
      </Flex>
    </>
  );
};
export default Layout;
