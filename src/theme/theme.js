import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#869d7a",
      light: "#ffcda2",
    },
    secondary: {
      main: "#564946",
    },
  },
  typography: {
    fontFamily: "Times New Roman, Times, serif",
    h1: {
      color: "#ffffff",
      textAlign: "center",
    },
    h5: {
      // fontWeight: 600,
    },
  },
});

export default theme;
