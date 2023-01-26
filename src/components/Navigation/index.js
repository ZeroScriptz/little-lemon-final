import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

const Navigation = ({ ...props }) => {
    return (
        <Stack
            as='nav'
            spacing={4}
            {...props}
        >
            <Link as={HashLink} smooth to='/'>Home</Link>
            <Link as={HashLink} smooth to='/#about'>About</Link>
            <Link as={HashLink} smooth to='/#menu'>Menu</Link>
            <Link as={HashLink} smooth to='/booking'>Reservations</Link>
            <Link as={HashLink} smooth to='/#menu'>Order Online</Link>
            <Link as={HashLink} smooth to='/login'>Login</Link>
        </Stack>
    )
}

export default Navigation;