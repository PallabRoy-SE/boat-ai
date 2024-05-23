import { createTheme } from "@mui/material";
import { colors, fonts } from "./variable";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily: fonts.ubuntu,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
