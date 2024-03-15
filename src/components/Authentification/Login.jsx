import { Box, Button, Container, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container h={"100vh"}>
            <VStack h={"full"}
                justifyContent={"center"}
                spacing={"16"}>
                <Heading children="WELCOME TO COURSE FOR YOU!!" />
                <Stack width={"100%"}
                    marginTop={"7vh"}
                    marginBottom={"4vh"}>
                    <Input id='email' value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        required
                        variant={"flushed"}
                        width={"90"}
                        type='email'
                        placeholder='Enter Your Email'
                        marginBottom={"4vh"}
                    />
                    <Input id='password' value={password}
                        onChange={(e) => (setPassword(e.target.value))}
                        variant={"flushed"}
                        width={"90"}
                        type='password'
                        placeholder='Enter Your Password'
                        marginBottom={"4vh"}
                    />
                    <Link to="/forgetpassword">
                        <Button
                            fontSize={'sm'}
                            variant={"link"}
                            marginBottom={"2vh"}>Forget Password</Button>
                    </Link>
                    <Button
                        colorScheme='yellow'
                        marginBottom={"2vh"}>Login</Button>
                    <Box my={"2"}>
                        New User? <Link to="/register">
                            <Button variant={"link"}
                                colorScheme='yellow'>Register</Button>
                        </Link>
                    </Box>
                </Stack>
            </VStack>
        </Container>
    )
}

export default Login
