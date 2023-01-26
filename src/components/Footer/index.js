import React from 'react'
import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import Navigation from '../Navigation'
import Logo from '../../assets/image/logo2.png'
import SocialMedia from '../SocialMedia'
import ContactInfo from '../ContactInfo'

const Footer = () => {
    return (
        <Box as='footer' bgColor='brand.500' p={6}>
            <Container>
                <Flex gap={8} justifyContent='space-between' wrap='wrap'>
                    <Image
                        src={Logo}
                        maxWidth='200px'
                        alt='Little Lemon Logo'
                    />

                    <Box as='section'>
                        <Heading color='brand.100' as='h6' size='lg' mb={2}>Navigation</Heading>
                        <Navigation spacing={2} />
                    </Box>

                    <Box as='section'>
                        <Heading color='brand.100' as='h6' size='lg' mb={2}>Contact Info</Heading>
                        <ContactInfo spacing={2} />
                    </Box>

                    <Box as='section'>
                        <Heading color='brand.100' as='h6' size='lg' mb={2}>Social Media</Heading>
                        <SocialMedia display='flex' alignItems='baseline' gap={4} flexWrap='wrap' />
                    </Box>

                </Flex>

            </Container>
        </Box>
    )
}

export default Footer