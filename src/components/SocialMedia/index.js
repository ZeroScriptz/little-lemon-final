import React from 'react';
import { Link, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialMedia = ({ ...props }) => {
    return (
        <List {...props}>
            <ListItem>
                <Link href="#"><ListIcon as={FaInstagram} /></Link>
            </ListItem>
            <ListItem>
                <Link href="#"><ListIcon as={FaFacebook} /></Link>
            </ListItem>
            <ListItem>
                <Link href="#"><ListIcon as={FaTwitter} /></Link>
            </ListItem>
        </List>
    )
}

export default SocialMedia;