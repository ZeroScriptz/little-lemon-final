import React from 'react';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaMapSigns, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const ContactInfo = ({ ...props }) => {
    return (
        <List {...props}>
            <ListItem>
                <ListIcon as={FaMapSigns} />
                Chicago
            </ListItem>
            <ListItem>
                <ListIcon as={FaPhoneAlt} />
                111-111-111
            </ListItem>
            <ListItem>
                <ListIcon as={FaPaperPlane} />
                littlelemon@llr.com
            </ListItem>
        </List>
    )
}

export default ContactInfo;