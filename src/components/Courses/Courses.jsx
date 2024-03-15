import { Button, Container, HStack, Heading, Input,Text, VStack, Image,Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const addToPlayListHandler = ()=>{
    console.log("Added to PLayl")
}
const Cource = ({views,title,imageSrc,id,addToPlayListHandler,creator,description,lectureCount})=>{
    
    return(
        <VStack className='course' 
        alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading 
            textAlign={["center","left"]}
            maxW={"200px"}
            fontFamily={"sans-serif"}
            noOfLines={3}
            size={"sm"}
            children={title}/>
            <Text 
            noOfLines={2}
            children={description} />
            <HStack>
            <Text 
            fontWeight={"bold"}
            textTransform={"uppercase"}
            children={"Creator"} />
            <Text 
            fontFamily={"body"}
            textTransform={"uppercase"}
            children={creator} />
            </HStack>
            <Heading 
            textAlign={"center"}
            size="xs"
            children={`Lectures - ${lectureCount}`}
            textTransform={"uppercase"}
            />
            <Heading 
            textAlign={"center"}
            size="xs"
            children={`Views - ${views}`}
            textTransform={"uppercase"}
            />
            <Stack direction={["column","row"]}
            alignItems={"center"} >
                <Link to={`/course/${id}`}>
                    <Button
                    colorScheme='yellow'>Watch Now</Button>
                </Link>
                <Button
                onClick={()=>(
                    addToPlayListHandler(id)
                )}
                colorScheme='yellow'
                variant={"ghost"}>
                    Add To Playlist
                </Button>

            </Stack>
        </VStack>
    )
}

const Cources = () => {
    const [keyword,setKeyword] = useState("");
    const [category,setCategory] = useState("");
    const categories = [
        "Web Development",
        "Ai",
        "Python",
        "DSA",
        "CP"
    ]
  return (
    <Container minH={'95vh'} maxW={"container.lg"} paddingY={'8'}>
        <Heading children="All Courses" m={'8'} />
        <Input value={keyword} onChange={(e)=>(
            setKeyword(e.target.value)
            )} placeholder='Search A cource...'
            type='text'
            focusBorderColor='yellow.500'
            />
        <HStack overflowX={"auto"}
        paddingY={"8"}
        css={{"&::-webkit-scrollbar":{
            display:'none'
        }}}
        alignItems={"center"}>
           {categories.map((value,index)=>(
            <Button minW={"60"} 
            onClick={(value)=>(
                setCategory(value)
           )}
           key={index}>
                <Text children={value}/>
            </Button>
           ))}
        </HStack>
        <Stack
        direction={["column","row"]}
        flexWrap="wrap"
        justifyContent={["flex-start","space-evenly"]}
        alignItems={["center","flex-start"]}
        >
            <Cource 
            views={23}
            title={"Sample"}
            imageSrc={"https://cdn.pixabay.com/photo/2023/10/19/21/08/sunset-8327637_1280.jpg"}
            id={":id"}
            creator={"sb"}
            addToPlayListHandler={addToPlayListHandler}
            description={"Sample 1"}
            lectureCount={2}
            />

        </Stack>
    </Container>
  )
}

export default Cources
