import { Container, Input,Button, Heading, Box, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
  const [name,setName] = useState("");
    const [email,setEmail] = useState("");
  return (
    <Container minH={"92vh"} my={"16vh"} w={"full" }>
      <form>
            <VStack>
              <Heading textTransform="uppercase" children="Update Profile" my="3vh" textAlign={["center","left"]}/>
            
            <Input type='text' value={name} onChange={(e)=>setName(e.target.value)}
            placeholder='Enter New Name' my="3vh" alignSelf={"center"}
            focusBorderColor='yellow.400'/>
            
            <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter New Email'my="3vh" alignSelf={"center"}
            focusBorderColor='yellow.400'/>
            
            <Button
            alignSelf={"center"}
            colorScheme='yellow'
            w={"full"} my="3vh"
            onClick={()=>{
              console.log(name)
            }}>
                Change
            </Button>
            </VStack>
      </form>
    </Container>
  )
}




export default UpdateProfile
