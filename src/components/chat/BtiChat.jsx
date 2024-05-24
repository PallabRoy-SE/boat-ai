import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import userLogo from "../../assets/user.png";
import aiLogo from "../../assets/logo.png";
import { colors, fonts } from "../../theme/variable";
import { ThumbDownOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

function BtiChat({
  type = "AI",
  message = "message text",
  time = "00:00 AM",
  like = 1,
  handleLikeDislike,
}) {
  return (
    <Box
      component="div"
      flexDirection={{ sm: "row", xs: "column" }}
      sx={{
        backgroundColor: colors.chatBg,
        boxShadow: "-4px 4px 15px 0px #0000001A",
        borderRadius: "20px",
        display: "flex",
        p: 2,
        mb: 3,
        "&:hover": {
          "#likeDislikeContainer": {
            visibility: "visible",
          },
        },
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
          alt={type === "AI" ? "ai_logo" : "user_logo"}
          src={type === "AI" ? aiLogo : userLogo}
          sx={{
            width: { xs: "3rem", sm: "5rem" },
            height: { xs: "3rem", sm: "5rem" },
            "& img": {
              transform:
                type === "AI" ? "scale(2)" : "scale(1.8) translateY(0.6rem)",
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
          {type === "AI" ? "Boat AI" : "You"}
        </Typography>
      </Box>
      <Box component="div">
        <Typography
          display={{ xs: "none", sm: "block" }}
          component="p"
          fontWeight={700}
          fontSize="1rem"
        >
          {type === "AI" ? "Boat AI" : "You"}
        </Typography>
        <Typography
          component="p"
          fontSize="1rem"
          fontFamily={fonts.openSans}
          mt={0.5}
          mx={{ xs: 1, sm: 0 }}
        >
          {message}
        </Typography>
        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          mt={2.5}
        >
          <Typography
            component="span"
            fontFamily={fonts.openSans}
            fontSize="0.75rem"
            color={colors.textGrey}
          >
            {time}
          </Typography>
          {type === "AI" ? (
            <Box
              visibility="hidden"
              component="div"
              id="likeDislikeContainer"
              ml={3}
              sx={{
                transition: "0.1s all ease-in-out",
              }}
            >
              <IconButton
                onClick={() => handleLikeDislike && handleLikeDislike(true)}
                sx={{
                  backgroundColor: like > 0 ? colors.textViolet : "initial",
                  "&:hover": {
                    "& svg": {
                      color: colors.textGrey,
                    },
                  },
                }}
              >
                <ThumbUpAltOutlined
                  sx={{
                    color: like > 0 ? colors.white : colors.textGrey,
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => handleLikeDislike && handleLikeDislike(false)}
                sx={{
                  ml: 1,
                  backgroundColor: like < 0 ? colors.textViolet : "initial",
                  "&:hover": {
                    "& svg": {
                      color: colors.textGrey,
                    },
                  },
                }}
              >
                <ThumbDownOutlined
                  sx={{
                    color: like < 0 ? colors.white : colors.textGrey,
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

export default BtiChat;
