import { Box } from "@chakra-ui/react";

const Container = ({ children }) => {
  return (
    <Box
      w="full"
      maxW="1480px"
      mx="auto"
      px={{ base: "4", md: "6", lg: "8" }}
    >
      {children}
    </Box>
  );
};

export default Container;