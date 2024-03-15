import { Container,Heading,VStack,Box,Text,Button } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h={"92vh"}
    p={"16"}>
      <Heading children="Welcome" my="8" textAlign="center" />
      <VStack boxShadow="lg" alignItems="stretch" 
      borderRadius="lg"
      spacing="0"
      >
        <Box bg="yellow.400" p="4" css={{borderRadius:"8px 8px 0 0"}}>
          <Text color="black" children={"Pro Pack - 299.00Rs"} />
        </Box>
        <Box p="4">
            <VStack textAlign={"center"} px={"8"}
            mt={"4"} spacing={"8"}>
            <Text children={"Join pro pack and get access to all content!!"} />
            <Heading size={"md"} children="299.00Rs Only"/>
            </VStack>
        </Box>
            <Button my="8" w="50%" colorScheme="yellow"
            alignSelf={"center"}
            >Buy Now</Button>
          <Box
          bg={"blackAlpha.600"}
          p={"4"}
          css={{borderRadius:"0 0 8px 8px"}}>


<Heading size={"sm"} color={"white"} 
textTransform="uppercase" children="100% refund at cancellation"/>
<Text children="*Terms and conditions applies" fontSize={"xs"} color={"white"}/>
          </Box>
      </VStack>


    </Container>
  )
}

export default Subscribe
