import "../styles/globals.css";
import type { AppProps } from "next/app";
import { colors, createTheme, Theme, ThemeProvider } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import { wrapper } from "../redux/store";

const theme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
