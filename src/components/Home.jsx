import React from 'react'
import {Stack,VStack,Heading,Text,Button,Image, Box, HStack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import "../styling/home.css"
import vg from "../assets/images/bg.png"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"

const Home = () => { 
  return (
    <section className='home'>
       <div className='container'>
            <Stack
            direction={["column","row"]}
            height="100%"
            justifyContent={["center","space-between"]}
            alignItems="center"
            spacing={["16","56"]}>
                <VStack
                width={"full"}
                alignItems={["center","flex-end"]}>
                    <Heading children="LEARN FROM THE EXPERTS" size="2xl"/>
                    <Text children="Find Valueable Content At Reasonable Price" 
                    textAlign={["center","left"]} spacing="8"/>
                    <Link to="/courses">
                        <Button
                        size={"lg"}
                        colorScheme='yellow'>
                            Explore Now
                        </Button>
                    </Link>
                </VStack>
                <Image className='vector-graphics' boxSize={"md"} src={vg} fill={"white"}/>
            </Stack>
       </div>
       <Box
       padding={"8"}
       bg="blackAlpha.800">
        <Heading textAlign={"center"} fontFamily={"body"} 
        color="yellow.400" children="OUR BRANDS" />
        <HStack className='brandsBanner' justifyContent={"space-evenly"} margin={"10px"}>
            <CgGoogle />
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>

        </HStack>
       </Box>
       <div className="container2">
        
       </div>
    </section>
  )
}

export default Home
