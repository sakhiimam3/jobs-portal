import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FindJobs from "../pages/FindJobs";
import TopCompanies from "../pages/TopCompanies";
import JobTracker from "../pages/JobTracker";
import MyCalendar from "../pages/MyCalendar";
import Documents from "../pages/Documents";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Sidebar from "./sidebar";
import Container from "./wrapper";
import { Grid, GridItem } from "@chakra-ui/react";

const mainLayout = () => {
  return (
    <Container>
      <Grid 
        templateColumns={{
          base: "1fr",          
          md: "300px 1fr",        // Fixed sidebar width
          lg: "350px 1fr"         // Consistent across larger screens
        }}  
        py="10" 
        width="100%"
        gap={5}                
      >
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          <main>
            <Routes>
              <Route path="/" element={<FindJobs />} />
              <Route path="/top-companies" element={<TopCompanies />} />
              <Route path="/job-tracker" element={<JobTracker />} />
              <Route path="/calendar" element={<MyCalendar />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default mainLayout;
