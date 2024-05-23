import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import BtiSidebar from "../../components/sidebar/BtiSidebar";
import BtiNavbar from "../../components/navbar/BtiNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { Container } from "@mui/material";

function Layout() {
  return (
    <Grid2 container>
      <Grid2 md={4} xl={2}>
        <BtiSidebar />
      </Grid2>
      <Grid2 md={8} xl={10}>
        <BtiNavbar />
        <Container maxWidth="xl">
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Home} />
            </Routes>
          </BrowserRouter>
        </Container>
      </Grid2>
    </Grid2>
  );
}

export default Layout;
