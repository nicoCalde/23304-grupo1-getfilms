import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./Routes";

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes></Routes>
    </ThemeProvider>
  );
}

export default App;

