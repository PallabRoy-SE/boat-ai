import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
