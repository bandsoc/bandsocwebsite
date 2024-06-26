import React from 'react';
import { Box, Image, Center, Text } from '@chakra-ui/react';

interface IProps {
  itemId?: number;
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  description: string;
}

const ExecCard = ({ image, imageAlt, name, role, description }: IProps) => {
  return (
    <Box
      maxW="20rem"
      borderWidth="4px"
      borderRadius="lg"
      minH="30rem"
      borderColor="#E1E5EC"
    >
      <Center>
        <Image
          src={image}
          alt={imageAlt}
          borderRadius="full"
          boxSize="180px"
          mt="1rem"
        />
      </Center>
      <Box>
        <Center>
          <Box display="flex" alignItems="baseline" maxW="100%">
            <Text fontSize="3xl" noOfLines={1}>
              {' '}
              {name}
            </Text>
          </Box>
        </Center>
        <Center>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="2xl">
              {' '}
              <b>{role}</b>
            </Text>
          </Box>
        </Center>
        <Box
          ml="2"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          About me:
        </Box>

        <Box
          display="flex"
          maxH="10rem"
          overflowY="scroll"
          height="100%"
          p="0.5rem"
        >
          <Text>{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ExecCard;
