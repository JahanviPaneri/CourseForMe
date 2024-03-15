import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {Container, Heading, VStack,Input,Button,Stack,Box, Textarea} from "@chakra-ui/react"
const Request = () => {
    const [email,setEmail] = useState("");
    const [course,setCourse] = useState("");
    const [name,setName] = useState("");
  return (
    

    <Container h={"92vh"}>
        <VStack h={"full"}
                justifyContent={"center"}
                spacing={"16"}>
                <Heading children="Request New Course" />
                <Stack width={"100%"}
                    marginTop={"7vh"}
                    marginBottom={"4vh"}>
                    <Input id='name' value={name}
                        onChange={(e) => (setName(e.target.value))}
                        required
                        variant={"flushed"}
                        width={"90"}
                        type='name'
                        placeholder='Enter Your Name'
                        marginBottom={"4vh"}
                    />    
                    <Input id='email' value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        required
                        variant={"flushed"}
                        width={"90"}
                        type='email'
                        placeholder='Enter Your Email'
                        marginBottom={"4vh"}
                    />
                    <Textarea id='course' value={course}
                        onChange={(e) => (setCourse(e.target.value))}
                        variant={"flushed"}
                        width={"90"}
                        type='textbox'
                        placeholder='Course Name'
                        marginBottom={"4vh"}
                    />
                    <Button
                        colorScheme='yellow'
                        marginBottom={"2vh"}
                        width={"fit-content"}>Send Mail</Button>
                        <Box my={"2"}>
                        See Available Cources<Link to="/courses">
                            <Button variant={"link"}
                                colorScheme='yellow'>Click</Button>Here
                        </Link>
                    </Box>
                </Stack>
            </VStack>
      
    </Container>
  )
}

export default Request
