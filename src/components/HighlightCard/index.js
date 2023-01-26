import React from 'react'
import { Button, Heading, Image, Text, Card as DefaultCard, CardHeader, CardBody, Box, HStack } from '@chakra-ui/react'
import Bike from '../../assets/svg/bike.svg';

const HighlightCard = ({ title, price, description, image, ...props }) => {
    return (
        <DefaultCard
            roundedTop='lg'
            roundedBottom='none'
            backgroundColor='brand.500'
            {...props}
        >
            <Box height='178px'>
                <Image
                    src={require(`../../${image}`)}
                    alt={title}
                    roundedTop='lg'
                    objectFit='cover'
                    height='full'
                    width='full'
                />
            </Box>

            <CardHeader display='flex' justifyContent='space-between' alignContent='center'>
                <Heading as='h3' size='md'>{title}</Heading>
                <Text color='brand.300'>$ {price}</Text>
            </CardHeader>

            <CardBody display='flex' flexDirection='column' alignItems='flex-start' gap={8}>
                <Box flex={1}>
                    <Text>{description}</Text>
                </Box>
                <HStack spacing={4}>
                    <Button variant='link'>Order a delivery</Button> <Image src={Bike} alt="Bike icon" ml={2} />
                </HStack>
            </CardBody>
        </DefaultCard>
    )
}

export default HighlightCard