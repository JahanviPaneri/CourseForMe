import { Container,Grid,Input,Heading,VStack, Select, Button,Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Authentification/Register';

const CreateCourse = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [createdBy,setCreatedBy] = useState("");
  const [image,setImage] = useState("");
  const [imagePrev,setImagePrev] = useState("");
  const [category,setCategory] = useState("");
  const categories = [
    "Web Development",
    "Ai",
    "Python",
    "DSA",
    "CP"
]
const fileUploadStyle = {
  "&::file-selector-button":{...fileUploadCss,color:'purple'},
}
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
    <Grid 
    css={{
      cursor: 'default',
    }}
    minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form>
        <Heading textTransform={"uppercase"} children="Create Course" 
        my="16" textAlign={['center','left']}/> 

<VStack m="auto" spacing={"8"}>
<Input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}
            placeholder='Title' my="3vh" alignSelf={"center"}
            focusBorderColor='purple'/>
<Input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}
            placeholder='Description' my="3vh" alignSelf={"center"}
            focusBorderColor='purple'/>
<Input type='text' value={createdBy} onChange={(e)=>setCreatedBy(e.target.value)}
            placeholder='Created By' my="3vh" alignSelf={"center"}
            focusBorderColor='purple'/>
            <Select focusBorderColor='purple'
            value={category}
            onChange={e=>setCategory(e.target.value)}>

            <option value="">Category</option>
            {categories.map((item)=>(
              <option key={item} value={item}>{item}</option>
            ))}
            </Select>
            <Input
                        accept='image/*'
                        required
                        type='file'
                        focusBorderColor='purple'
                        width={"25"}
                        css={fileUploadStyle}
                        onChange={changeImageHandler}/>

           {imagePrev &&(
            <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
           )}    
           <Button w={"full"} colorScheme='purple' type='submit'>Create Course</Button>         
</VStack>

</form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
