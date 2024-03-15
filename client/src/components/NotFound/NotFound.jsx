import { Container, Heading,VStack,Box,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container h={"90vh"} p={"16"} textAlign={"center"}>
        <Box display={"flex"} justifyContent={"center"}>
        <RiErrorWarningFill size={"20vh"}/>
        </Box>
      <Heading children="404 Page Not Found!" my={"8"}
      textAlign={"center"}/>
      <Link to={"/"}>
        <Button colorScheme='yellow'
        variant={"ghost"}
        >
            Go to Home
        </Button>
      </Link>
    </Container>
  )
}

export default NotFound
