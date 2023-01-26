import React from 'react';
import { Button, Container, Heading, Flex, Stack, Box } from '@chakra-ui/react';
import HighlightCard from '../HighlightCard';


const data = [{
    title: "Greek Salad",
    price: "12.99",
    description: "The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crounts.",
    image: "assets/image/greek_salad.jpg"
},
{
    title: "Bruchetta",
    price: "5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "assets/image/bruchetta.jpg"
},
{
    title: "Lemon Dessert",
    price: "5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "assets/image/lemon_dessert.jpg"
}]

const Highlights = () => {
    return (
        <Box as='section' id="menu" my={3}>
            <Container>
                <Flex justifyContent='space-between' pt={4} pb={9}>
                    <Heading>This weeks specials!</Heading>
                    <Button variant='brandThick'>Online Menu</Button>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    {data.map(({ title, price, description, image }, index) => {
                        return (
                            <HighlightCard key={index} title={title} price={price} description={description} image={image} flex={1} />
                        )
                    })}
                </Stack>
            </Container>
        </Box >

    )
}

export default Highlights;