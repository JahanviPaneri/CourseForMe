import { Box, HStack, Heading,Stack,VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from "react-icons/di"
const Footer = () => {
  return (
    <Box padding={"4"}
    bg={"blackAlpha.900"}
    minH={'10vh'}>

        <Stack direction={["column","row"]}>
            <VStack
            alignItems={["center","flex-start"]}
            width="full">
                <Heading children="All Rights Reserved"
                color={"white"}
                fontFamily={"body"}
                size={"sm"}/>
                <Heading
                fontFamily={"body"}
                size={"sm"} children="@Cource For You"
                color={"yellow.400"}/>
            </VStack>
            <HStack 
            spacing={["2","10"]}
            justifyContent={["center"]}>
                <a href="https://instagram.com/courceforyou" target='blank'>
                    <TiSocialInstagramCircular />
                </a>
                <a href='https://youtube.com/courceforyou' target='blank'>
                <TiSocialYoutubeCircular />  
                </a>
                <a href='https://github.com/courceforyou' target='blank'>
                <DiGithub />
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer
