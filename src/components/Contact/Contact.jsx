import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {Container, Heading, VStack,Input,Button,Stack,Box, Textarea} from "@chakra-ui/react"
const Contact = () => {
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [name,setName] = useState("");
  return (
    

    <Container h={"92vh"}>
        <VStack h={"full"}
                justifyContent={"center"}
                spacing={"16"}>
                <Heading children="Contact US" />
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
                    <Textarea id='message' value={message}
                        onChange={(e) => (setMessage(e.target.value))}
                        variant={"flushed"}
                        width={"90"}
                        type='textbox'
                        placeholder='Enter Your Message'
                        marginBottom={"4vh"}
                    />
                    <Button
                        colorScheme='yellow'
                        marginBottom={"2vh"}
                        width={"fit-content"}>Send Mail</Button>
                        <Box my={"2"}>
                        Request for a cource? <Link to="/request">
                            <Button variant={"link"}
                                colorScheme='yellow'>Click</Button>Here
                        </Link>
                    </Box>
                </Stack>
            </VStack>
      
    </Container>
  )
}

export default Contact
