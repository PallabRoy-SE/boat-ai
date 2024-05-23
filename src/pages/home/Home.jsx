import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BtiSuggestionCard from "../../components/suggestion-card/BtiSuggestionCard";
import { Save, Send } from "@mui/icons-material";

function Home() {
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
          sx={{
            width: "85%",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          sx={{
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
            fontSize: "1.25rem",
          }}
          startIcon={<Save />}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
