import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";

function Home() {
  return (
    <Box component="main">
      <Typography component="p" fontWeight="500" fontSize="1.75rem">
        How Can I Help You Today?
      </Typography>
      <Avatar
        alt="main_logo"
        src={logo}
        sx={{
          width: "4rem",
          height: "4rem",
          "& img": {
            transform: "scale(2)",
          },
        }}
      />
    </Box>
  );
}

export default Home;
