import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import theme from "./theme/theme";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
