import {
  Box,
  Card,
  CardBody,
  Stack,
  Text,
  Button,
  Link,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import JobCard from "./JobCard";

const jobData = [
  {
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
  {
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
  {
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
  {
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
];

const FeaturedJobs = ({ title, link }) => {
  return (
    <Box>
      <HStack mb={4}>
        <Text 
          fontSize={{ base: "md", sm: "lg", md: "xl" }} 
          fontWeight="bold"
        >
          {title}
        </Text>
        <Link 
          color="bgbtn" 
          fontWeight="medium" 
          textDecoration="underline"
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
        >
          {link}
        </Link>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedJobs;
