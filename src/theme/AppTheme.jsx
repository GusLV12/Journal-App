import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purple";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline /> {/* Reinicia la línea base de CSS */}
      {children}
    </ThemeProvider>
  );
};
