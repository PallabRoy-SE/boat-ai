import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import BtiSidebar from "../../components/sidebar/BtiSidebar";
import BtiNavbar from "../../components/navbar/BtiNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { Container, Drawer } from "@mui/material";
import History from "../history/History";
import Feedbacks from "../feedbacks/Feedbacks";

function Layout() {
  const [sidebar, toggleSidebar] = useState(false);
  return (
    <Grid2 container>
      <Grid2 display={{ xs: "none", sm: "flex" }} sm={4} md={3} xl={2}>
        <BtiSidebar />
      </Grid2>
      <Grid2 display={{ xs: "flex", sm: "none" }} xs={0}>
        <Drawer
          variant="temporary"
          open={sidebar}
          onTransitionEnd={() => {}}
          onClose={() => {
            toggleSidebar(false);
          }}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: "80vw",
            },
          }}
        >
          {<BtiSidebar onToggleSidebar={toggleSidebar} />}
        </Drawer>
      </Grid2>
      <Grid2 xs={12} sm={8} md={9} xl={10}>
        <BtiNavbar onToggleSidebar={toggleSidebar} />
        <Container
          maxWidth="xl"
          sx={{
            height: "calc(100vh - 3rem)",
          }}
        >
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/new" Component={Home} />
            <Route path="/history" Component={History} />
            <Route path="/feedbacks" Component={Feedbacks} />
          </Routes>
        </Container>
      </Grid2>
    </Grid2>
  );
}

export default Layout;
