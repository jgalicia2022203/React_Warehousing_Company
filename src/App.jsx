import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import AppRoutes from "./routes";

const theme = createTheme({
  palette: {
    primary: { main: "#817f7f" },
    secondary: { main: "#949494" },
    error: { main: "#E53935" },
    background: { default: "#323232" },
    text: {
      primary: "#ffffff",
      secondary: "#6bf97b",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <SnackbarProvider maxSnack={3}>
        <AppRoutes />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
