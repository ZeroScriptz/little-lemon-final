import React from 'react'
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const BookingConfirmation = () => {
    return (
        <Box as='main' height='63vh' position='relative'>
            <Container height='100%'>
                <Flex height='full' justifyContent='center' alignItems='center' direction='column'>
                    <Heading as='h1' mb={4}>Your booking has been confirmed.</Heading>
                    <Button variant='brandThin' as={Link} to='/booking'>Make a new reservation</Button>
                </Flex>

            </Container>
        </Box>
    )
}

export default BookingConfirmation