import { Container, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Navigation from '../Navigation';
import Logo from '../../assets/svg/logo.svg';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <Container as="header">
                <Flex alignItems={'center'} justifyContent={'space-between'} gap={8}>
                    <IconButton
                        size={'md'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={onOpen}
                    />

                    <img src={Logo} alt="Little Lemon Restaurant" />
                    <Navigation direction='row' display={{ base: 'none', md: 'flex' }} />
                </Flex>

            </Container>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <Navigation onClick={onClose} p={4} mt={4} />
                </DrawerContent>
            </Drawer>
        </>

    )
}

export default Header;