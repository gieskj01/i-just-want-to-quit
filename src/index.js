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
import { ThemeProvider, createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="finalpage" element={<FinalPage />} />
        <Route path="puzzle002" element={<Puzzle002 />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
