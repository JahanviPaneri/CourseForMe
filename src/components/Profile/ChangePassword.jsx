import { Container, Input,Button, Heading, Box, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
  const [oldPassword,setOldPassword] = useState("");
    const [password,setPassword] = useState("");
  return (
    <Container minH={"92vh"} my={"16vh"} w={"full" }>
      <form>
            <VStack>
              <Heading textTransform="uppercase" children="Change Password" my="3vh" textAlign={["center","left"]}/>
            
            <Input type='password' required value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}
            placeholder='Enter Old Password' my="3vh" alignSelf={"center"}
            focusBorderColor='yellow.400'/>
            
            <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter New Password'my="3vh" alignSelf={"center"} focusBorderColor='yellow.400'/>
            
            <Button
            alignSelf={"center"}
            colorScheme='yellow'
            w={"full"} my="3vh"
            onClick={()=>{
              console.log(password)
            }}>
                Change
            </Button>
            </VStack>
      </form>
    </Container>
  )
}

export default ChangePassword
