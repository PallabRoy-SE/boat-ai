import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variable";
import { Menu } from "@mui/icons-material";

function BtiNavbar({ onToggleSidebar }) {
  return (
    <Box
      component="section"
      height="3rem"
      display="flex"
      alignItems="center"
      mx={{ xs: 0, sm: 4 }}
    >
      <IconButton
        size="lg"
        sx={{
          display: { sm: "none" },
        }}
        onClick={() => onToggleSidebar((prev) => !prev)}
      >
        <Menu sx={{ fontSize: "2rem" }} />
      </IconButton>
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
