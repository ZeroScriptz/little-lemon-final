import React from 'react'
import { Box, Container, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Restaurant from '../../assets/image/restaurant.jpg'
import Chef from '../../assets/image/chef.jpg'

const About = () => {
    return (
        <Box as='section' id="about">
            <Container>
                <Flex direction={{ base: 'column', md: 'row' }} justify='space-between' gap={4} alignItems='center'>
                    <Box>
                        <VStack spacing={0} align='start'>
                            <Heading as='h1' color='brand.200'>
                                Little Lemon
                            </Heading>
                            <Text fontSize='2xl' fontWeight='100'>Chicago</Text>

                        </VStack>

                        <VStack spacing={2} align='start'>
                            <Text mt={4} maxW='sm'>
                                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                            </Text>

                        </VStack>
                    </Box>

                    <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' maxH='400px'>

                        <GridItem rowStart='2' rowEnd='3' colStart='1' colEnd='3'>
                            <Box
                                height='300px'
                                width='100%'
                                maxWidth='250px'
                            >
                                <Image
                                    fit='cover'
                                    align='center'
                                    width='100%'
                                    height='100%'
                                    src={Restaurant}
                                />
                            </Box>
                        </GridItem>

                        <GridItem rowStart='1' rowEnd='3' colStart='2' colEnd='4'>
                            <Box
                                width='100%'
                                maxWidth='250px'
                                height='300px'
                            >

                                <Image
                                    fit='cover'
                                    align='center'
                                    width='100%'
                                    height='100%'
                                    src={Chef}
                                />
                            </Box>

                        </GridItem>
                    </Grid>
                </Flex>
            </Container>
        </Box>
    )
}

export default About