import { Box, Typography } from "@mui/material";
import React from "react";
import BtiHistoryCard from "../../components/histroy-card/BtiHistoryCard";
import { colors, fonts } from "../../theme/variable";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getDateStringFromNow } from "../../services/helperService";
function History() {
  const [chats] = useLocalStorage("chats");
  return (
    <Box component="section">
      <Typography component="p" fontSize="1.75rem" textAlign="center" mb={6}>
        Conversation History
      </Typography>
      <Box
        component="section"
        height="calc(100vh - 150px)"
        overflow="auto"
        px={2}
      >
        {chats.length ? (
          chats
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((dChat, index) => (
              <React.Fragment key={`date-wise-history-chat-${index + 1}`}>
                <Typography component="p" fontSize="1.25rem" mb={2}>
                  {getDateStringFromNow(dChat.date)}'s Chats
                </Typography>
                <BtiHistoryCard chatData={dChat} />
              </React.Fragment>
            ))
        ) : (
          <Typography
            variant="h3"
            textAlign="center"
            color={colors.textGrey}
            fontFamily={fonts.openSans}
            sx={{ opacity: 0.5, fontSize: { xs: "1.5rem", sm: "3rem" } }}
          >
            No history Available.
            <br /> Save chats to show history !
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default History;
