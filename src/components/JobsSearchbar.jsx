import {
  Box,
  Input,
  Select,
  HStack,
  Text,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { SearchIcon } from "../icons";
import CustomButton from "./CustomButton";

const JobSearchBar = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        p={4}
        borderRadius="lg"
        boxShadow="sm"
        bg="white"
        width="100%"
      >
        <HStack
          spacing={0}
          width="100%"
          borderRadius="md"
          overflow="hidden"
          bg="white"
          py={2}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 2, md: 4 }}
        >
          <Input
            placeholder="Job Title, Company, or Keywords"
            flex={2}
            border="none"
            borderRight={{ base: "none", lg: "2px solid #E9ECEF" }}
            borderBottom={{ base: "2px solid #E9ECEF", lg: "none" }}
            _placeholder={{ color: "gray.500" }}
            _focus={{ outline: "none", border: "none" }}
            _active={{ outline: "none", border: "none" }}
            borderRadius="none"
            px={4}
            py={5}
          />
          <Select
            placeholder="Select Location"
            flex={{ base: 1, md: 1 }}
            
            border="none"
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none"}}
            borderRadius="none"
            px={2}
            color="link"
            borderBottom={{ base: "2px solid #E9ECEF", lg: "none" }}
          >
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
          </Select>
          <Select
            placeholder="Job Type"
            flex={{ base: 1, md: 1 }}
            border="none"
            borderRadius="none"
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none"}}
            borderLeft={{ base: "none", lg: "2px solid #E9ECEF" }}
            color="link"
            px={2}
          >
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
          </Select>
          <CustomButton
            variant="primary"
            width={{ base: "100%", md: "auto" }}
            leftIcon={<SearchIcon />}
            bg="bgbtn"
            px={8}
            py={2}
            borderRadius={"8px"}
          >
            Search
          </CustomButton>
        </HStack>
      </Box>
      <HStack 
        spacing={{ base: 1, lg: 2 }}
        mt={3} 
        align="center"
        flexWrap="wrap"
        gap={{ base: 1, md: 2 }}
      >
        <Text fontSize={{ base: "xs", md: "sm" }} color="link">
          Similar:
        </Text>
        {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
          <Tag
            key={tag}
            variant="outline"
            color="link"
            cursor="pointer"
            borderRadius="5px"
            px={{ base: 2, md: 4 }}
            py={{ base: 1, md: 2 }}
            fontSize={{ base: "xs", md: "sm" }}
            borderColor="link"
            _hover={{ bg: "bgbtn", color: "white" }}
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </>
  );
};

export default JobSearchBar;
