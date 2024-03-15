import { VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser2Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton url={'dashboard'} Icon={RiDashboardFill} text={"Dashboard"} active={location.pathname === '/admin/dashboard'}/>
      <LinkButton url={'courses'} Icon={RiEyeFill} text={"Courses"} active={location.pathname === '/admin/courses'}/>
      <LinkButton url={'users'} Icon={RiUser2Fill} text={"users"} active={location.pathname === '/admin/users'}/>
      <LinkButton url={'createcourse'} Icon={RiAddCircleFill} text={"Create Course"} active={location.pathname === '/admin/createcourse'}/>

    </VStack>
  );
};

export default Sidebar;


function LinkButton({url,Icon,text,active}){
    return(
        <Link to={`/admin/${url}`}>
        <Button fontSize={'larger'} variant={'ghost'} colorScheme={active?'purple':''}>
          <Icon style={{ margin: '4px' }} />
          {text}
        </Button>
      </Link>
    )
}