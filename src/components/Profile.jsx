import {
  Box,
  Avatar,
  Text,
  VStack,
  Image,
  Card,
  CardBody,
} from "@chakra-ui/react";
import profilebg from "../assets/images/profile-bg.png";
import profile from "../assets/images/profile-avatar.png";
import StatsCard from "./StatsCard";
import CalendarSelect from "./CalenderSelect";
const ProfileCard = () => {
  return (
    <>
      <Card sx={{base: "100%", md: "90%" }} borderRadius="10px" overflow="hidden" boxShadow="sm">
        {/* Background Image */}
        <Box position="relative">
          <Image
            src={profilebg}
            alt="Background"
            w="full"
            h="130px"
            objectFit="cover"
          />
          {/* Avatar */}
          <Avatar
            src={profile}
            size="xl"
            position="absolute"
            bottom="-30px"
            left="50%"
            transform="translateX(-50%)"
            border="3px solid white"
          />
        </Box>

        {/* User Info */}
        <CardBody textAlign="center" mt="6">
          <VStack spacing={1}>
            <Text fontWeight="600" color="headingColor" fontSize="lg">
              Albert Flores
            </Text>
            <Text
              fontSize="md"
              maxW="300px"
              color="headingColor"
              textAlign="center"
            >
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </Text>
            <Text fontSize="sm" color="textColor">
              Clinton, Maryland
            </Text>
          </VStack>
        </CardBody>
      </Card>
      <StatsCard />
      <CalendarSelect />
    </>
  );
};

export default ProfileCard;
