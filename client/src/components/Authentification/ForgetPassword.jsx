import { Container, Heading, VStack,Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
    const[email,setEmail] = useState("");
  return (
    <Container py={"16"} h={"90vh"}>
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform="uppercase"
          textAlign={['center', 'left']}
        />
      </form>
      <VStack spacing={'8'}>
        <Input
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required="true"
          variant={'flushed'}
          width={'100%'}
          type="email"
          placeholder="Enter Your Email"
          marginBottom={'4vh'}
        />
        <Button 
        type='submit'
        w={"full"}
        colorScheme='yellow'
        width={"fit-content"}>
            Send Reset Link
        </Button>
      </VStack>
    </Container>
  );
};

export default ForgetPassword;
