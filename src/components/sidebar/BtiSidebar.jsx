import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import edit from "../../assets/edit.png";
import { colors } from "../../theme/variable";
import { Link, useNavigate } from "react-router-dom";
import { HistoryOutlined } from "@mui/icons-material";

function BtiSidebar({ onToggleSidebar }) {
  const navigate = useNavigate();
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
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/?new=true");
          onToggleSidebar && onToggleSidebar((prev) => !prev);
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
          <Typography component="span" mx={2} fontSize="1.25rem">
            New Chat
          </Typography>
          <Avatar variant="square" alt="edit" src={edit} />
        </Box>
      </Box>
      <Link
        to="/history"
        style={{
          marginInline: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={() => onToggleSidebar && onToggleSidebar((prev) => !prev)}
          sx={{
            width: "100%",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "1rem",
          }}
          startIcon={<HistoryOutlined />}
        >
          Past Conversations
        </Button>
      </Link>
    </Box>
  );
}

export default BtiSidebar;
