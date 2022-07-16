import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinalPage from "./routes/FinalPage/FinalPage";
import Puzzle002 from "./routes/Puzzle002/Puzzle002";
import Puzzle003 from "./routes/Puzzle003/Puzzle003";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    mode: "dark",
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="finalpage" element={<FinalPage />} />
        <Route path="puzzle002" element={<Puzzle002 />} />
        <Route path="puzzle003" element={<Puzzle003 />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
