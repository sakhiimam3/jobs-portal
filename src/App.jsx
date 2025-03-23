import "./App.css";
import Navbar from "./layout/navbar";
import MainLayout from "./layout/mainLayout";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
     <Navbar />
     <Box h="screen"    bg="#F4F4F4">
     <MainLayout />
     </Box>
    </>
  );
}

export default App;
