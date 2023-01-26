import React from 'react';
import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Food from '../../assets/image/food.jpg';

const Hero = () => {
    return (
        <Box as='section' my={3} backgroundColor='brand.100' bgGradient={{ base: 'brand.100', md: 'linear(to-b, brand.100 75%, white 75%)' }}>
            <Container>
                <Flex direction={{ base: 'column-reverse', md: 'row' }} justify='space-between' wrap='wrap' gap={4}>
                    <Box>
                        <VStack spacing={0} align='start'>
                            <Heading as='h1' color='brand.200'>
                                Little Lemon
                            </Heading>
                            <Text fontSize='2xl' color='white' fontWeight='100'>Chicago</Text>

                        </VStack>

                        <VStack spacing={2} align='start'>
                            <Text color='white' mt={4} maxW='sm'>
                                We are a family owned Mediterranean restaurant, focused on traditional recipes served with morden twist.
                            </Text>

                            <Button variant='brandThin'>Reserve a Table</Button>

                        </VStack>

                    </Box>

                    <Box
                        width='300px'
                        height='300px'
                        rounded='2xl'
                        overflow='hidden'
                        display={{ base: 'none', md: 'block' }}
                    >
                        <Image
                            src={Food}
                            fit='cover'
                            align='center'
                            width='100%'
                            height='100%'
                        />
                    </Box>

                </Flex>
            </Container>
        </Box>
    )
}

export default Hero;