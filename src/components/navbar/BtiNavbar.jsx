import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variable";

function BtiNavbar() {
  return (
    <Box
      component="section"
      height="3rem"
      display="flex"
      alignItems="center"
      mx={4}
    >
      <Typography
        component="span"
        fontWeight={700}
        fontSize="1.75rem"
        color={colors.textViolet}
      >
        Bot AI
      </Typography>
    </Box>
  );
}

export default BtiNavbar;
