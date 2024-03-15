import React from 'react'
import {Avatar, Box, Button, Container, Heading, Stack, VStack} from "@chakra-ui/react"
import "../styling/aboutus.css"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <Container h={"92vh"} maxW={"container.lg"}
    padding={"16"}>
      <Heading textAlign={"center"} marginBottom={"9vh"}>
        About Us
        <Link to='/subscribe'>
        <Button marginLeft={"10vh"}
        colorScheme='yellow'>
          Subscribe!
        </Button>
      </Link>
      </Heading>
      
      <Box textAlign={"center"}
      className='aboutus'>
      Welcome to Course For You, an online learning haven tailored exclusively for children, where curiosity meets education! Our mission is to empower young minds through captivating courses led by expert instructors. We understand that each child is unique, and our platform reflects that diversity by offering a range of subjects taught by the best in their respective fields. With interactive and age-appropriate content, we prioritize the joy of learning, ensuring an engaging and safe online environment. At Course For You, we invite children to embark on an educational adventure, fostering creativity and curiosity while providing a solid foundation for future success. Join us, where learning becomes a thrilling journey, and your child can explore, discover, and flourish.
      </Box>
      
    </Container>
  )
}

export default About
