import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import TestimonialCard from '../TestimonialCard'


const data = [
    {
        name: 'Brandon P.',
        rating: '54',
        description: 'It was a great experience.',
        avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        name: 'Krysta B.',
        rating: '5',
        description: 'Just think of a cozy place with wonderful food.',
        avatar: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        name: 'Darcy L.',
        rating: '5',
        description: 'Desserts are my favorite!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    },
    {
        name: 'Daniel T.',
        rating: '4',
        description: 'I will come back!',
        avatar: 'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    }
]


const Testimonials = () => {
    return (
        <Box as='section' id="testimonials" my={5} backgroundColor='brand.500'>
            <Container>
                <Heading as="h2" textAlign='center' my={4}>Testimonials</Heading>

                <Flex direction={{ base: 'column', md: 'row' }} alignItems='stretch' gap={4} py={8}>
                    {
                        data.map(({ rating, name, description, avatar }, index) => {
                            return (
                                <TestimonialCard key={index} rating={rating} name={name} description={description} avatar={avatar} flex={1} />
                            )
                        })
                    }
                </Flex>
            </Container >
        </Box >
    )
}

export default Testimonials