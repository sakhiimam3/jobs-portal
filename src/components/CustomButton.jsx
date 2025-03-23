import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, variant = "primary", ...props }) => {
  const isPrimary = variant === "primary";
  
  return (
    <Button
      h="50px"
      fontWeight={"500"}
      borderRadius="14px"
      bg={isPrimary ? "blue.500" : "transparent"}
      color={isPrimary ? "white" : "gray.700"}
      border={isPrimary ? "1px solid transparent" : "1px solid gray.200"}
      _hover={{
        bg: isPrimary ? "blue.600" : "gray.50",
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      transition="all 0.3s ease"
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton; 