import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Image,
} from "@chakra-ui/react";
import CustomButton from "../components/CustomButton";
import Container from "./wrapper";
import { navItems } from "../mockdata";
import logo from "../assets/images/logo.png";
import { MenuIcon, SearchIcon } from "../icons";
import ProfileImage from "../assets/images/profile.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          onClick={onClose}
          style={({ isActive }) => ({
            color: isActive ? "#0154AA" : "#737A91",
            fontWeight: isActive ? "700" : "lighter",
            fontSize: "md",
          })}
          _hover={{ color: "#0154AA", fontWeight: "700" }}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <Box position="sticky" top="0" bg="white" zIndex="sticky" w="full">
      <Container>
        <Flex py={4} align="center" gap={4}>
          {/* Logo */}
          <Box w="40px">
            <Image src={logo} alt="Logo" />
          </Box>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: "none", xl: "flex" }}>
            <NavItems />
          </HStack>

          {/* Right Section */}
          <HStack ml="auto" gap={3}>
            {/* Search Bar */}
            <InputGroup maxW="500px" display={{ base: "none", md: "block" }}>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                placeholder="Search"
                bg="#F6F9FF"
                border="1px solid"
                borderColor="#F6F9FF"
                height="45px"
                borderRadius="8px"
                _placeholder={{ color: "gray.400" }}
              />
            </InputGroup>
            <CustomButton
              borderRadius="8px"
              height="45px"
              py="1"
              px="10"
              size="sm"
              bg="bgbtn"
              color="white"
              display={{ base: "none", md: "flex" }}
            >
              Resume Builder
            </CustomButton>
            <Avatar size={{ base: "sm" }} src={ProfileImage} />
          </HStack>

          {/* Mobile Menu Button */}
          <Box
            as="span"
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
          >
            <MenuIcon />
          </Box>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        motionPreset="slideInRight"
        transitionDuration={{
          enter: "0.3s",
          exit: "0.2s",
        }}
      >
        <DrawerOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px)"
          transition="all 0.3s ease-in-out"
        />
        <DrawerContent
          sx={{
            transition: "transform 0.2s ease-in-out !important",
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <DrawerCloseButton />
          <DrawerBody pt={10}>
            <VStack spacing={4} align="start">
              <InputGroup mb={4} mt="5">
                <InputLeftElement>
                  {/* <SearchIcon color="gray.400" /> */}
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  placeholder="Search"
                  bg="#F6F9FF"
                  border="1px solid"
                  borderColor="#F6F9FF"
                  height="45px"
                  borderRadius="8px"
                  _placeholder={{ color: "gray.400" }}
                />
              </InputGroup>
              <NavItems />
              <CustomButton bg="bgbtn" color="white" borderRadius={"8px"}>
                Resume Builder
              </CustomButton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
