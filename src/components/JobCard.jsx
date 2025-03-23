import { Card, CardBody, Stack, Text, HStack ,Box } from "@chakra-ui/react";
import { ClockIcon, JobIcon, SaveIcon } from "../icons";
import { LocationIcon } from "../icons";
import CustomButton from "./CustomButton";

const JobCard = ({ job }) => {
  return (
    <Card w="100%" borderRadius="10px" boxShadow="sm">
      <CardBody p={4} >
        <Text fontSize="sm" fontWeight="bold" color="headingColor" mb={2}>Promoted</Text>
        <Stack spacing={2} >
          <Box display="flex" alignItems="start" gap={2}>
          <Box width={"40px"} height={"40px"} display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"9.11px"} boxShadow={"sm"} bg={"#FAFAFA"}>
            <JobIcon/>
          </Box>
          <Box>
          <Text  fontSize={"14px"} color="headingColor">{job.title}</Text>
          <Text fontSize="sm" color="link">{job.company}</Text>

          </Box>
          </Box>
          <HStack >
            <LocationIcon />
            <Text fontSize="xs" color="link">{job.location}</Text>
          </HStack>
          <HStack fontSize="xs">
            <ClockIcon />
            <Box display="flex" alignItems="center" gap={1}>
              <Text fontSize="xs" color="link">{job.time}</Text>
              <Box as="span">|</Box>
              <Text fontSize="xs" color="bgbtn" fontWeight={"semibold"}>{job.applicants}</Text>
            </Box>
          </HStack>
          <Box display={"flex"} my={2} justifyContent={"space-between"} alignItems={"center"} gap={2}>
          <CustomButton py="2px" px="30px"  bg="bgbtn" color="white" fontSize="sm">Apply Now</CustomButton>
          <Box>
            <SaveIcon />
          </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default JobCard; 