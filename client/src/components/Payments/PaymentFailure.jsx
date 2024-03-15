import { Container, Heading,VStack,Box,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFailure = () => {
  return (
    <Container h={"90vh"} p={"16"} textAlign={"center"}>
        <Box display={"flex"} justifyContent={"center"}>
        <RiErrorWarningFill size={"20vh"}/>
        </Box>
      <Heading textTransform="uppercase" children="Payment Failure!" my={"8"}
      textAlign={"center"}/>
      <Link to={"/subscribe"}>
        <Button colorScheme='yellow'
        variant={"ghost"}
        >
            Try Again
        </Button>
      </Link>
    </Container>
  )
}

export default PaymentFailure;