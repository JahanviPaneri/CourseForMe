import { Avatar, Box, Button, Container, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"transparent"
}
const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss,
}




const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imagePrev,setImagePrev] = useState("");
    const [image,setImage] = useState("");


    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setImagePrev(reader.result);
            setImage(file);
        } 
    }
    return (
        <Container h={"full"}>
            
            <VStack h={"full"}
                justifyContent={"center"}
                spacing={"16"}>
                <Heading textTransform="uppercase"
                children="Registration" />
                
                <Stack width={"100%"}
                    marginTop={"4vh"}
                    marginBottom={"4vh"}>
                       
                        <Box my={"4"}
                        display={"flex"}
                        justifyContent={"center"}>
                        <Avatar size={"2xl"}
                        src={imagePrev}/>
                        </Box>
                        <Box my={"4"}
                size="2xl"
                display={"flex"}
                border={"none"}
                borderColor={"transparent"}
                        justifyContent={"center"}>
                        <Input
                        accept='image/*'
                        required
                        id='chooseAvatar'
                        type='file'
                        focusBorderColor='yellow.500'
                        width={"25"}
                        css={fileUploadStyle}
                        onChange={changeImageHandler}/>
                        
                    </Box>
                    <Input id='name' value={name}
                        onChange={(e) => (setName(e.target.value))}
                        variant={"flushed"}
                        width={"90"}
                        type='text'
                        placeholder='Enter Your Name'
                        marginBottom={"4vh"}
                    />
                    <Input id='email' value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        required='true'
                        variant={"flushed"}
                        width={"90"}
                        type='email'
                        placeholder='Enter Your Email'
                        marginBottom={"4vh"}
                    />
                    <Input id='password' value={password}
                        onChange={(e) => (setPassword(e.target.value))}
                        variant={"flushed"}
                        width={"90"}
                        type='password'
                        placeholder='Enter Your Password'
                        marginBottom={"4vh"}
                    />
                    <Button
                        colorScheme='yellow'
                        marginBottom={"2vh"}>Register</Button>
                    <Box my={"2"}>
                        Already a User? <Link to="/login">
                            <Button variant={"link"}
                                colorScheme='yellow'>Login</Button>
                        </Link>
                    </Box>
                </Stack>
            </VStack>
        </Container>
    )
}

export default Register
