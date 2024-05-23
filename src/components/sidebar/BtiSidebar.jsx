import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import edit from "../../assets/edit.png";
import { colors } from "../../theme/variable";

function BtiSidebar() {
  return (
    <Box
      component="section"
      width="100%"
      height="100vh"
      backgroundColor={colors.white}
      display="flex"
      flexDirection="column"
    >
      <Box
        component="header"
        height="3rem"
        sx={{
          background: colors.primary,
        }}
      >
        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          height="100%"
        >
          <Avatar
            alt="logo"
            src={logo}
            sx={{
              boxShadow: "0px 4px 4px 0px #00000040",
              "& img": {
                transform: "scale(4) translate(0.8rem, 0.4rem)",
              },
            }}
          />
          <Typography
            component="span"
            mx={2}
            fontSize="1.25rem"
            sx={{ cursor: "pointer" }}
          >
            New Chat
          </Typography>
          <Avatar
            sx={{ cursor: "pointer" }}
            variant="square"
            alt="edit"
            src={edit}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "10px",
          marginInline: "1rem",
          marginTop: "1rem",
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        Past Conversations
      </Button>
    </Box>
  );
}

export default BtiSidebar;
