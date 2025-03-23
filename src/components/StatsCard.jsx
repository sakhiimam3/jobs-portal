import { Card, CardBody, VStack, HStack, Text, Divider } from "@chakra-ui/react";

const StatsCard = () => {
  return (
    <Card sx={{base: "100%", md: "90%" }} my={4} borderRadius="10px" boxShadow="sm">
      <CardBody>
        <VStack align="stretch" spacing={3}>
          <HStack justify="space-between">
            <Text fontSize="sm" color="headingColor">Profile Visitors</Text>
            <Text fontSize="sm" color="bgbtn" fontWeight="bold">140</Text>
          </HStack>
          <Divider />
          <HStack justify="space-between">
            <Text fontSize="sm" color="headingColor">Resume Viewers</Text>
            <Text fontSize="sm" color="bgbtn" fontWeight="bold">20</Text>
          </HStack>
          <Divider />
          <HStack justify="space-between">
            <Text fontSize="sm" color="headingColor">My Jobs</Text>
            <Text fontSize="sm" color="bgbtn" fontWeight="bold">88</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
