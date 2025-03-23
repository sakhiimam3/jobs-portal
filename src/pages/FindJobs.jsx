import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import JobSearchBar from '../components/JobsSearchbar'
import FeaturedJobs from '../components/jobsSections'

const FindJobs = () => {
  return (
    <Box>
       <Box>
        <Box as="h1" fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" color="headingColor">
          Find your Dream Job, <Box as="span" color="bgbtn">Albert!</Box>
        </Box>  
        <Text color="link" fontSize={["xs", "sm"]} maxW="600px">
          Explore the latest job openings and apply for the best opportunities available today!
        </Text>
       </Box>

       <Box my={4}>
        <JobSearchBar />
        <Divider color="link" mt={4} borderWidth="1px" />
       </Box>
       
       <Box my={5}>
        <FeaturedJobs title="Featured Jobs" link="See Featured Jobs" />
       </Box>
       <Box my={5}>
        <FeaturedJobs title="Recommended Jobs" link="See Recommended Jobs" />
       </Box>

    </Box>
  )
}
        
export default FindJobs 