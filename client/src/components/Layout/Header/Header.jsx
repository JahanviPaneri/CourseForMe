import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link to={url}>
    <Button variant={'ghost'} onClick={onClose}>
      {title}
    </Button>
  </Link>
);

const isAuthenticated = false;
const user = {
  role: 'admin',
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logOutHandler = () => {
    console.log("Log Out");
    onClose(); // Close the drawer after logging out
  };

  return (
    <div>
      <div className="ColorModeSwitcher">
        <ColorModeSwitcher zIndex="overlay" />
      </div>
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        zIndex='overlay'
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottom={'1px'} borderColor={'rgba(0,0,0,0.2)'}>
            COURSE FOR YOU
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <LinkButton url="/" title="Home" onClose={onClose} />
              <LinkButton url="/courses" title="Browse All Courses" onClose={onClose} />
              <LinkButton url="/request" title="Request a Course" onClose={onClose} />
              <LinkButton url="/contact" title="Contact Us" onClose={onClose} />
              <LinkButton url="/about" title="About Us" onClose={onClose} />
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={'ghost'} colorScheme="yellow" onClick={onClose}>
                            Profile
                          </Button>
                        </Link>
                        <Link to="/logout">
                          <Button variant={'ghost'} onClick={logOutHandler}>
                            Log Out
                          </Button>
                          <RiLogoutBoxLine />
                        </Link>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button colorScheme="purple" variant={'ghost'} onClick={onClose}>
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow" onClick={onClose}>
                        Login
                      </Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register">
                      <Button colorScheme="yellow" onClick={onClose}>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
