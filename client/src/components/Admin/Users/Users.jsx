// import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Th, Tr,Thead,Td } from '@chakra-ui/react'
// import React from 'react'
// import Sidebar from '../Sidebar'
// import { RiDeleteBin7Fill } from 'react-icons/ri'

// const Users = () => {
//   const users = [
//     {
//       _id:"fcgvh",
//       name:"nina",
//       email:"fcgvhb@gmail.com",
//       role:"admin",
//       subscription:{
//         status:"active",
//       }
//     }
//   ]
//   const updateHandler = (userId)=>{
//     console.log(userId);
//   }
//   const deleteButtonHandler = (userId)=>{
//     console.log(userId);
//   }
// const Row = ({item,updateHandler,deleteButtonHandler}) =>{
//   return(
//     <Tr>
//       <Td>{item._id}</Td>
//       <Td>{item.name}</Td>
//       <Td>{item.email}</Td>
//       <Td>{item.role}</Td>
//       <Td>{item.subscription.status === "active"?"Active" : "Not Active"}</Td>
//       <Td isNumeric>
//         <HStack justifyContent={"flex-end"}>
//           <Button variant={"outline"} color={"purple.500"}
//           onClick={()=>deleteButtonHandler(item._id)}>Change Role</Button>
//           <Button color={"purple.600"}
//           onClick={()=>updateHandler(item._id)}>
//             <RiDeleteBin7Fill />
//           </Button>
//         </HStack> 
//       </Td>
//     </Tr>
//   )
// }



//   return (
//     <Grid minH={"100vh"}
//     templateColumns={['1fr','5fr 1fr']}>
//       <Box p={['0','16']} overflowX={"auto"}>
//         <Heading
//         textTransform={"uppercase"}
//         children="All Users"
//         my={"16"}
//         textAlign={["center","left"]} /> 
//         <TableContainer w={["100vw","full"]}>
//         <Table variant={"simple"} size={"lg"}>
//           <TableCaption>All available uers in the database</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>Id</Th>
//               <Th>Name</Th>
//               <Th>Email</Th>
//               <Th>Role</Th>
//               <Th>Subscription</Th>
//               <Th isNumeric>Action</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {users.map((item)=>(
//               <Row updateHandler={updateHandler} deleteButtonHandler ={deleteButtonHandler} key={item._id} item = {item}/>
//             ))}
//           </Tbody>
//         </Table>
//         </TableContainer>
//       </Box>
//       <Sidebar />
//     </Grid>
//   )
// }

// export default Users

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
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const users = [
    {
      _id: 'fcgvh',
      name: 'nina',
      email: 'fcgvhb@gmail.com',
      role: 'admin',
      subscription: {
        status: 'active',
      },
    },
  ];

  const updateHandler = (userId) => {
    console.log(userId);
  };

  const deleteButtonHandler = (userId) => {
    console.log(userId);
  };

  const Row = ({ item, updateHandler, deleteButtonHandler }) => {
    return (
      <Tr>
        <Td>{item._id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.role}</Td>
        <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              variant={'outline'}
              color={'purple.500'}
              onClick={() => updateHandler(item._id)}>
              Update Role
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
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((item) => (
                <Row
                  updateHandler={updateHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

