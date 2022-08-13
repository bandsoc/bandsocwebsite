import React from 'react'
import { Box, Image, Badge, Center, Text } from '@chakra-ui/react'

interface IProps {
    image: string,
    imageAlt: string,
    name: string,
    role: string,
    description: string,
}

const ExecCard = ({ image, name, role, description }: IProps) => {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='20rem' borderWidth='3px' borderRadius='lg' minH='30rem'>

            <Center>
                <Image src={image} alt={property.imageAlt} borderRadius='full' boxSize='200px' mt='1rem' />
            </Center>


            <Box >
                <Center>
                    <Box display='flex' alignItems='baseline'>
                        <Text fontSize='4xl'> <b>President</b></Text>
                    </Box>
                </Center>
                <Box
                    ml='2'
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    About me:
                </Box>

                <Box display='flex' maxH='10rem' overflowY='scroll' height='100%' p='0.5rem'>
                    <Text>
                        Name: Taylor Adam
                        Discord: @Taylor (Presidente)
                        Instagram: @ taylortka
                        Bio: hiii I&apos;m a fourth year systems engineer and my job is to run this whole thing smoothly and boss about my amazing exec team and do anything that needs doing ! I play bass in Rattlesnake, drum for The Kellys, and sing in Red Lamp. And also I really love music and live music and this society !!
                        Top 3 Artists: Hippo Campus, King Gizzard and the Wizard Lizard, Peach Pit
                        Favourite Album: iliwysfyasbysuoi by the 1975
                        Guilty Pleasure: Carly Rae Jepsen except I don&apos;t feel guilty at all bcos she&apos;s incredible
                    </Text>

                                        
                </Box>
            </Box>
        </Box>
    )
}

export default ExecCard