import { Avatar, Box, IconButton, Rating, Typography } from "@mui/material";
import React from "react";
import userLogo from "../../assets/user.png";
import aiLogo from "../../assets/logo.png";
import { colors, fonts } from "../../theme/variable";
import { ThumbDownOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

function BtiChat({ chat, handleLikeDislike, sx, rating, readOnly }) {
  return (
    <Box
      component="div"
      flexDirection={{ sm: "row", xs: "column" }}
      sx={{
        display: "flex",
        ...sx,
      }}
    >
      <Box
        component="div"
        display="flex"
        justifyContent={{ sm: "center", xs: "start" }}
        alignItems={{ sm: "start", xs: "center" }}
        mx={{ sm: 3, xs: 0 }}
        my={1}
      >
        <Avatar
          alt={chat.type === "AI" ? "ai_logo" : "user_logo"}
          src={chat.type === "AI" ? aiLogo : userLogo}
          sx={{
            width: { xs: "3rem", sm: "5rem" },
            height: { xs: "3rem", sm: "5rem" },
            "& img": {
              transform:
                chat.type === "AI"
                  ? "scale(2)"
                  : "scale(1.8) translateY(0.6rem)",
            },
          }}
        />
        <Typography
          display={{ xs: "block", sm: "none" }}
          component="p"
          fontWeight={700}
          fontSize="1rem"
          ml={2}
        >
          {chat.type === "AI" ? "Boat AI" : "You"}
        </Typography>
      </Box>
      <Box component="div">
        <Typography
          display={{ xs: "none", sm: "block" }}
          component="p"
          fontWeight={700}
          fontSize="1rem"
        >
          {chat.type === "AI" ? "Boat AI" : "You"}
        </Typography>
        <Typography
          component="p"
          fontSize="1rem"
          fontFamily={fonts.openSans}
          mt={0.5}
          mx={{ xs: 1, sm: 0 }}
        >
          {chat.message}
        </Typography>
        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          mt={2.5}
        >
          <Typography
            component="span"
            fontFamily={fonts.openSans}
            fontSize="0.75rem"
            color={colors.textGrey}
            mr={3}
          >
            {chat.time}
          </Typography>
          {chat.type === "AI" ? (
            <Box
              visibility={readOnly ? null : { sm: "hidden", xs: "visible" }}
              component="div"
              id="likeDislikeContainer"
              mr={3}
              sx={{
                transition: "0.1s all ease-in-out",
              }}
            >
              <IconButton
                onClick={() =>
                  !readOnly &&
                  handleLikeDislike &&
                  handleLikeDislike(1, chat.id)
                }
                sx={{
                  backgroundColor:
                    chat.like > 0 ? colors.textViolet : "initial",
                  "&:hover": {
                    "& svg": {
                      color: colors.textGrey,
                    },
                  },
                }}
              >
                <ThumbUpAltOutlined
                  sx={{
                    color: chat.like > 0 ? colors.white : colors.textGrey,
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() =>
                  !readOnly &&
                  handleLikeDislike &&
                  handleLikeDislike(-1, chat.id)
                }
                sx={{
                  ml: 1,
                  backgroundColor:
                    chat.like < 0 ? colors.textViolet : "initial",
                  "&:hover": {
                    "& svg": {
                      color: colors.textGrey,
                    },
                  },
                }}
              >
                <ThumbDownOutlined
                  sx={{
                    color: chat.like < 0 ? colors.white : colors.textGrey,
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
            </Box>
          ) : null}
          {rating ? (
            <Rating
              sx={{
                color: colors.black,
                width: "5rem",
              }}
              value={rating}
              readOnly={readOnly}
            />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

export default BtiChat;
