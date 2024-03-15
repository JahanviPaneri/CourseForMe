import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Grid,
  Text,
  Box,
  Heading,
  Stack,
  Button,
  Input,
  VStack,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBackFill } from 'react-icons/ri';
import fileUploadCss from "../CreateCourse/CreateCourse"
const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteLectureButtonHandler,
  courseTitle,
  addLectureHandler,
  lectures = [1,2,3,4,5,6,7,8,9],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPreview,setVideoPreview] = useState("");


  
const changeVideoHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        setVideoPreview(reader.result);
        setVideo(file);
    } 
    
  }
  const onCloseHandler=()=>{
    setTitle("")
    setDescription("")
    setVideo("")
    setVideoPreview("")
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onCloseHandler} size={'full'}
    scrollBehavior='outside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose}/>
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size="sm" opacity={0.4} />
              </Box>
              <Heading children={'Lectures'} size={'lg'} />
              
              {
                lectures.map((item,index)=>(
                    <VideoCard
                    key={index}
                title="React Intro"
                num={item}
                description="This is intro lecture"
                lectureId="qwertyuiop"
                courseId={id}
                deleteLectureButtonHandler={deleteLectureButtonHandler}
              />
                ))
              }
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children="Add Lecture"
                    size={'mb'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/*mp4"
                    required
                    type={"file"}
                    focusBorderColor="purple.300"
                    css={{
                        '&::file-selector-button':{
                            ...fileUploadCss,
                            color:'purple',
                            
                        }
                    }}
                    onChange={changeVideoHandler}
                  />
                  {
                    videoPreview && (
                        <video controlsList='nodownload' controls src={videoPreview}></video>
                    )
                  }
                  <Button w={"full"} colorScheme='purple' type='submit'>Upload</Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
            <Button onClick={onCloseHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  num,
  description,
  lectureId,
  courseId,
  deleteLectureButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      padding={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteLectureButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBackFill />
      </Button>
    </Stack>
  );
}

