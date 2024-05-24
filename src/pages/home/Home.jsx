import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BtiSuggestionCard from "../../components/suggestion-card/BtiSuggestionCard";
import { Save, Send } from "@mui/icons-material";
import BtiChat from "../../components/chat/BtiChat";
import { colors } from "../../theme/variable";

const demoChats = [
  { id: 1, message: "Hi!", type: "YOU", time: "10:33 AM" },
  {
    id: 2,
    message: "Hi There. How can I assist you today?",
    type: "AI",
    time: "10:33 AM",
    like: -1,
  },
  {
    id: 3,
    message: "How are you today?",
    type: "YOU",
    time: "10:34 AM",
  },
  {
    id: 4,
    message: "As an AI Language Model, I don't have the details",
    type: "AI",
    time: "10:34 AM",
    like: 1,
  },
  {
    id: 5,
    message: "How are you?",
    type: "YOU",
    time: "10:35 AM",
  },
];

function Home() {
  const [chatStarted, setChatStarted] = useState(true);
  return (
    <Box
      component="main"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="end"
      flexDirection="column"
      py={3}
    >
      {chatStarted ? (
        <Box component="section" width="100%" mt={3} p={3} overflow="auto">
          {demoChats.map((chat) => (
            <BtiChat
              key={`chat-item-${chat.id}`}
              type={chat.type}
              message={chat.message}
              time={chat.time}
              like={chat.like}
            />
          ))}
        </Box>
      ) : (
        <>
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
          <Grid2 container spacing={2} width="100%" mt={3} overflow="auto">
            <Grid2 md={6} width="100%">
              <BtiSuggestionCard
                title="Hi, what is the weather"
                subTitle="Get immediate AI generated response"
              />
            </Grid2>
            <Grid2 md={6} width="100%">
              <BtiSuggestionCard
                title="Hi, what is my location"
                subTitle="Get immediate AI generated response"
              />
            </Grid2>
            <Grid2 md={6} width="100%">
              <BtiSuggestionCard
                title="Hi, what is the temperature"
                subTitle="Get immediate AI generated response"
              />
            </Grid2>
            <Grid2 md={6} width="100%">
              <BtiSuggestionCard
                title="Hi, how are you"
                subTitle="Get immediate AI generated response"
              />
            </Grid2>
          </Grid2>
        </>
      )}
      <Box
        component="div"
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        px={1}
        mt={4}
      >
        <TextField
          type="text"
          placeholder="Ask questions..."
          sx={{
            width: "85%",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            fontSize: "1.25rem",
            marginInline: "0.5rem",
          }}
          startIcon={<Send />}
        >
          Ask
        </Button>
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            fontSize: "1.25rem",
          }}
          startIcon={<Save />}
        >
          Save
        </Button>
        <IconButton
          sx={{
            fontSize: "1.25rem",
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            marginInline: "0.5rem",
            backgroundColor: colors.primary,
            "&:hover": {
              "& svg": {
                color: colors.textGrey,
              },
            },
            width: "3rem",
            height: "3rem",
          }}
        >
          <Send sx={{ transform: "translateX(2px)" }} />
        </IconButton>
        <IconButton
          sx={{
            fontSize: "1.25rem",
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary,
            "&:hover": {
              "& svg": {
                color: colors.textGrey,
              },
            },
            width: "3rem",
            height: "3rem",
          }}
        >
          <Save />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Home;
