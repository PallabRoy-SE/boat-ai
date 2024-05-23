import { Paper, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variable";

function BtiSuggestionCard({ title, subTitle }) {
  return (
    <Paper
      component="div"
      sx={{
        width: "100%",
        padding: "1rem",
      }}
      elevation={3}
    >
      <Typography component="p" fontWeight={700} fontSize="1.25rem">
        {title}
      </Typography>
      <Typography color={colors.grey} my={2}>
        {subTitle}
      </Typography>
    </Paper>
  );
}

export default BtiSuggestionCard;
