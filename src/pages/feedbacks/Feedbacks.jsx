import {
  Box,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function Feedback() {
  const [chats] = useLocalStorage("chats");
  const [mainFeedBacks, setMainFeedBacks] = useState([]);
  const [feedBacks, setFeedBacks] = useState([]);
  const [order, setOrder] = useState(false);

  const handleSort = () => {
    setOrder((prev) => {
      const status = !prev
        ? "asc"
        : prev === "asc"
        ? "desc"
        : prev === "desc"
        ? false
        : false;
      return status;
    });
  };

  useEffect(() => {
    if (!feedBacks.length) {
      const extFeedbacks = [];
      chats.forEach((chat) => {
        if (chat.feedBack) {
          extFeedbacks.push({
            message: chat.feedBack,
            rating: chat.rating ?? 0,
          });
        }
      });
      setFeedBacks(() => [...extFeedbacks]);
      setMainFeedBacks(() => [...extFeedbacks]);
    } else {
      setFeedBacks(() => [
        ...[...mainFeedBacks].sort((a, b) =>
          order === "asc"
            ? a.rating - b.rating
            : order === "desc"
            ? b.rating - a.rating
            : 0
        ),
      ]);
    }
  }, [order]);

  return (
    <Box component="section">
      <Typography component="p" fontSize="1.75rem" textAlign="center" mb={6}>
        Feedbacks
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          px: 2,
          maxHeight: "calc(100vh - 150px)",
          overflow: "auto",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Feedback</TableCell>
              <TableCell sortDirection={order}>
                <TableSortLabel
                  active={order ? true : false}
                  direction={order ? order : undefined}
                  onClick={handleSort}
                >
                  Rating
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedBacks.length ? (
              feedBacks.map((feedback, index) => (
                <TableRow key={`feedback-${index + 1}`}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{feedback.message}</TableCell>
                  <TableCell>
                    <Rating
                      value={feedback.rating}
                      readOnly
                      sx={{ width: "max-content" }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography
                    component="p"
                    textAlign="center"
                    variant="caption"
                  >
                    No feedback given.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Feedback;
