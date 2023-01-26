import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
} from '@chakra-ui/react';


const Login = () => {
    return (
        <Flex
            minH='80vh'
            align='center'
            justify='center'
            backgroundColor='brand.100' >
            <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
                <Stack align='center'>
                    <Heading fontSize='4xl' color='white'>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded='lg'
                    bg='white'
                    boxShadow='lg'
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align='start'
                                justify='space-between'>
                                <Checkbox>Remember me</Checkbox>
                                <Link color='brand.100'>Forgot password?</Link>
                            </Stack>
                            <Button
                                variant='brandThin'>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Login