import { Container, Heading,VStack,Box,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container h={"90vh"} p={"16"}>
      <Heading children="You have Pro Pack." my={"8"}
      textAlign={"center"}/>
      <VStack boxShadow="lg" pb="16"
      alignItems="center" borderRadius="lg">
        <Box width="full" bg="yellow.400" p="4" css={{
            borderRadius:"8px 8px 0 0"
        }}>
            <Text>
                Payment Success!!
            </Text>
        </Box>
        <Box p={"4"}>
            <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8  "}>
                <Text>
                    Congratulations!!!You're a pro member now.You have access to premium content.
                </Text>
                <Heading size={"4xl"}>
                    <RiCheckboxCircleFill />
                </Heading>
            </VStack>
        </Box>
        <Link to={"/profile"}>
            <Button variant={"ghost"}>
                Go to Profile
            </Button>
        </Link>
        <Heading size={"xs"}>
            Reference : fdxgch
        </Heading>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess
