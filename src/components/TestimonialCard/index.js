import { Avatar, Box, Card, CardBody, Flex, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import Rating from '../Rating'
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ rating, name, description, avatar, ...props }) => {
    return (
        <Card {...props}>
            <CardBody>

                <Flex height='full' direction='column' gap={2}>
                    <Rating rating={rating} />
                    <HStack align='center'>
                        <Avatar src={avatar} />
                        <Text fontSize='sm'>{name}</Text>
                    </HStack>

                    <Box flex={1}
                        position='relative'
                        mt={4}>
                        <Icon as={FaQuoteLeft} fill='brand.100' position='absolute' left='0' />
                        <Text textIndent={19} >{description}</Text>
                    </Box>

                </Flex>

            </CardBody>
        </Card>
    )
}

export default TestimonialCard