import { Box } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variable";
import BtiChat from "../chat/BtiChat";

function BtiChatCard({
  type = "AI",
  message = "message text",
  time = "00:00 AM",
  like = 1,
  handleLikeDislike,
  ...attributes
}) {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: colors.chatBg,
        boxShadow: "-4px 4px 15px 0px #0000001A",
        borderRadius: "20px",
        p: 2,
        mb: 3,
        "&:hover": {
          "#likeDislikeContainer": {
            visibility: "visible",
          },
        },
      }}
      {...attributes}
    >
      <BtiChat
        type={type}
        message={message}
        time={time}
        like={like}
        handleLikeDislike={handleLikeDislike}
      />
    </Box>
  );
}

export default BtiChatCard;
