import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variable";
import BtiChat from "../chat/BtiChat";

function BtiHistoryCard({ chatData }) {
  return (
    <Box
      component="div"
      sx={{
        background: colors.historyBg,
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
    >
      {chatData?.chats?.map((chat, index) => (
        <BtiChat
          key={chat.id}
          chat={chat}
          sx={{
            [`&:not(:nth-of-type(${chatData.chats.length}))`]: {
              mb: 4,
            },
          }}
          rating={
            index === chatData.chats.length - 1 && chatData.rating
              ? chatData.rating
              : 0
          }
          readOnly={true}
        />
      ))}
      {chatData?.feedBack ? (
        <Typography component="p" ml={{ sm: "8rem", xs: 0 }} mt={2}>
          <Typography component="span" fontWeight={700}>
            Feedback:{" "}
          </Typography>
          {chatData.feedBack}
        </Typography>
      ) : null}
    </Box>
  );
}

export default BtiHistoryCard;
