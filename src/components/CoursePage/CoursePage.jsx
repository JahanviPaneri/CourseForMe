import React, { useState } from 'react';
import { Grid, Box, Heading,Text, VStack } from '@chakra-ui/react';
import sampleVideo from "../../assets/videos/sample.mp4"
const CoursePage = () => {
    const lectureTitle = "lectureTitle";
    const [lectureNumber,setLectureNumber] = useState(0);
    const lectures = [{
        _id:"fcghjk",
        title:"sample1",
        description:"wedrt",
        video:{
            url:sampleVideo,
        }
    },
    {
        _id:"asd",
        title:"sample2",
        description:"234567",
        video:{
            url:sampleVideo,
        }
    },
    {
        _id:"sfg",
        title:"sample3",
        description:"cgvhbjnk",
        video:{
            url:sampleVideo,
        }
    },
];
  return (
    <Grid minH="90vh" templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width="100%"
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={lectures[lectureNumber].video.url}
        >
          
        </video>

        <Heading margin="4" children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />
        <Heading margin="4" children="Description" />
        <Text m="4" children={`${lectures[lectureNumber].description}`}/>
      </Box>
      <VStack>
        {
            lectures.map((item,index)=>(
                <button
                onClick={()=>(setLectureNumber(index))}
                key={item._id}
                style={{
                    width:"100%",
                    padding:"1rem",
                    textAlign:"center",
                    margin:0,
                    borderBottom:"1px solid rgba(0,0,0,0.2)"
                }}>
                    <Text noOfLines={1}>
                        #{index+1} {item.title}
                    </Text>
                </button>
            ))
        }
      </VStack>
    </Grid>
  );
};
 
export default CoursePage;
