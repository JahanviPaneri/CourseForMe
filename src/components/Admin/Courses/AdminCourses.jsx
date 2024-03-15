import React from 'react';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Tr,
  Thead,
  Td,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'fcgvh',
      title: 'React Course',
      category: 'Web-Dev',
      poster:{
        url:"https://th.bing.com/th/id/OIP.pKofeY6dP0bN783wr9q5sAHaE3?rs=1&pid=ImgDetMain"
      },
      createdBy:"Jahanvi",
      views:123,
      numOfVideos:34,
    },
  ];
  const {isOpen,onClose,onOpen} = useDisclosure();
  const courseDetailHandler = (userId) => {
    onOpen();
    console.log(userId);
  };

  const deleteButtonHandler = (userId) => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId,lectuerId) =>{
    console.log(courseId);
    console.log(lectuerId); 
  }
  const addLectureHandler = (e,title,courseId,description,video)=>{
    e.preventDefault();
  }

  const Row = ({ item, courseDetailHandler, deleteButtonHandler }) => {
    return (
      <Tr>
        <Td>{item._id}</Td>
        <Td>
<Image src={item.poster.url}/>

        </Td>
        <Td>{item.title}</Td>
        <Td textTransform={"uppercase"}>{item.category}</Td>
        <Td>{item.createdBy}</Td>
        <Td isNumeric>{item.views}</Td>
        <Td isNumeric>{item.numOfVideos}</Td>
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              variant={'outline'}
              color={'purple.500'}
              onClick={() => courseDetailHandler(item._id)}>
              View Lectures
            </Button>
            <Button color={'purple.600'} onClick={() => deleteButtonHandler(item._id)}>
              <RiDeleteBin7Fill />
            </Button>
          </HStack>
        </Td>
      </Tr>
    );
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item) => (
                <Row
                courseDetailHandler={courseDetailHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table> 
        </TableContainer>
        <Button onClick={onOpen} my={"10px"}>View Course</Button>
        <CourseModal isOpen={isOpen} onClose={onClose} id={courses._id} 
        deleteLectureButtonHandler={deleteLectureButtonHandler}
        addLectureHandler = {addLectureHandler}
        courseTitle={courses.title}/>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

