import { useState } from "react";
import {
  Card,
  CardBody,
  HStack,
  Text,
  Icon,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CalendarSelect = () => {
  const [selectedOption, setSelectedOption] = useState("Upcoming Interviews");

  const options = [
    "Upcoming Interviews",
    "Scheduled Meetings",
    "Completed Interviews",
  ];

  return (
    <Menu>
      <Card
        sx={{base: "100%", md: "90%" }}
        borderRadius="10px"
        my={4}
        boxShadow="sm"
        p={4}
        cursor="pointer"
      >
        <MenuButton as={Button} variant="unstyled" w="full" textAlign="left">
          <CardBody p={0}>
            <HStack justify="space-between">
              <VStack align="start" spacing={0}>
                <Text fontSize="md" fontWeight="600" color="headingColor">
                  My calendar
                </Text>
                <Text fontSize="sm" fontWeight="normal" color="link">
                  {selectedOption}
                </Text>
              </VStack>
              <Icon as={ChevronDownIcon} boxSize={5} color="headingColor" />
            </HStack>
          </CardBody>
        </MenuButton>
      </Card>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => setSelectedOption(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CalendarSelect;
