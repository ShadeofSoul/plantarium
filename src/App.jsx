import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import Router from "./routes";
import theme from "./theme/theme";

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
