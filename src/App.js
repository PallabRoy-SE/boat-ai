import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Layout from "./pages/layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
