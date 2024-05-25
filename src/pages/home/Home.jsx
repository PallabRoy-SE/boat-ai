import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { ReactComponent as Bulb } from "../../assets/bulb.svg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BtiSuggestionCard from "../../components/suggestion-card/BtiSuggestionCard";
import { Close, Save, Send } from "@mui/icons-material";
import { colors, fonts } from "../../theme/variable";
import BtiChatCard from "../../components/chat-card/BtiChatCard";
import moment from "moment";
import useLocalStorage from "../../hooks/useLocalStorage";

const suggestions = [
  {
    title: "Hi, what is the weather",
    subTitle: "Get immediate AI generated response",
  },
  {
    title: "Hi, what is my location",
    subTitle: "Get immediate AI generated response",
  },
  {
    title: "Hi, what is the temperature",
    subTitle: "Get immediate AI generated response",
  },
  { title: "Hi, how are you", subTitle: "Get immediate AI generated response" },
];

function Home() {
  const [, setLocalChats] = useLocalStorage("chats");
  const [chats, setChats] = useState([]);
  const [dialogOpened, toggleDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [feedBack, setFeedBack] = useState("");

  const addMessage = (message, type) => {
    const newChat = {
      id: `chat-${Math.random() * 10 * 9}-${new Date().getTime()}`,
      message: message,
      type: type,
      time: moment().format("hh:mm A"),
    };
    setChats((prev) => [...prev, newChat]);
  };

  const askQuestion = () => {
    if (message) {
      addMessage(message, "YOU");
      setMessage("");
    }
  };

  const scrollToNewMessage = (id) => {
    const messageElement = document.getElementById(id);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      askQuestion();
    }
  };

  const handleDialogClose = () => {
    toggleDialog(false);
    setRating(0);
    setFeedBack("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (chats.length) {
      setLocalChats((prev) => [
        ...prev,
        { date: new Date(), chats, rating, feedBack },
      ]);
      setChats(() => []);
    }

    handleDialogClose();
  };

  useEffect(() => {
    if (chats.length > 0) {
      const lastChat = chats[chats.length - 1];
      scrollToNewMessage(lastChat.id);
    }
  }, [chats]);

  return (
    <>
      <Box
        component="main"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="end"
        flexDirection="column"
        py={3}
      >
        {chats.length > 0 ? (
          <Box component="section" width="100%" mt={3} p={3} overflow="auto">
            {chats.map((chat) => (
              <BtiChatCard
                key={chat.id}
                type={chat.type}
                message={chat.message}
                time={chat.time}
                like={chat.like}
                id={chat.id}
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
              {suggestions.map((suggestion, index) => (
                <Grid2 key={`suggestion-${index + 1}`} md={6} width="100%">
                  <BtiSuggestionCard
                    title={suggestion.title}
                    subTitle={suggestion.subTitle}
                  />
                </Grid2>
              ))}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={onEnterPress}
          />
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              fontSize: "1.25rem",
              marginInline: "0.5rem",
            }}
            startIcon={<Send />}
            disabled={message.trim().length === 0}
            onClick={askQuestion}
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
            onClick={() => toggleDialog(true)}
            disabled={chats.length === 0}
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
            disabled={message.trim().length === 0}
            onClick={askQuestion}
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
            onClick={() => toggleDialog(true)}
            disabled={chats.length === 0}
          >
            <Save />
          </IconButton>
        </Box>
      </Box>
      <Dialog
        open={dialogOpened}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>
          <Box
            component="header"
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box
              component="div"
              display="flex"
              alignItems="center"
              flexDirection="row"
            >
              <Box component="div" display={{ sm: "block", xs: "none" }} mr={2}>
                <Bulb width="2.5rem" height="2.5rem" />
              </Box>
              <Typography
                fontFamily={fonts.openSans}
                fontSize="1.3rem"
                color={colors.black}
                mt={2}
                display={{ sm: "block", xs: "none" }}
              >
                Provide Additional Feedback
              </Typography>
              <Typography
                fontFamily={fonts.openSans}
                fontSize="1.2rem"
                color={colors.black}
                display={{ sm: "none", xs: "block" }}
              >
                Provide Feedback
              </Typography>
            </Box>
            <IconButton onClick={handleDialogClose}>
              <Close
                sx={{
                  width: { sm: "2rem", xs: "1.5rem" },
                  height: { sm: "2rem", xs: "1.5rem" },
                  color: colors.black,
                }}
              />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ pb: 0 }}>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Rating
              value={rating}
              onChange={(e, v) => setRating(v)}
              size="large"
              sx={{
                width: "max-content",
              }}
            />
          </Box>
          <TextField
            autoFocus
            required
            margin="dense"
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            defaultValue={feedBack}
            onChange={(e) => setFeedBack(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontWeight: 400, py: "0.3rem" }}
            size="large"
            disabled={feedBack.trim().length === 0}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Home;
