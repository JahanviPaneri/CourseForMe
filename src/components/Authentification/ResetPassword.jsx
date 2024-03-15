import { Container, Heading, VStack,Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const[password,setPassword] = useState("");
    const params = useParams();
    console.log(params.token);

  return (
    <Container py={"16"}
    h="90vh">
      <form
      height="full">
        <Heading
          children="Reset Password"
          my="16"
          textTransform="uppercase"
          textAlign={['center', 'left']}
        />
      </form>
      <VStack spacing={'8'}>
        <Input
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          variant={'flushed'}
          width={'100%'}
          type="password"
          placeholder="New Password"
          marginBottom={'4vh'}
        />
        <Button 
        type='submit'
        w={"full"}
        colorScheme='yellow'
        width={"fit-content"}>
            Reset Password
        </Button>
      </VStack>
    </Container>
  );
};

export default ResetPassword;
