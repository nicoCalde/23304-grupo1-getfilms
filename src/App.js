import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AuthProvider from "./components/useAuth";
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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

