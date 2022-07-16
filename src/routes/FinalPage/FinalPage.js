import { Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";
import cake from "./cake.gif";
import { Box } from "@mui/material";

export default function FinalPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ flexDirection: "column" }}
    >
      <Image
        showLoading
        src={cake}
        width={128}
        alt={"Cake is a lie"}
        shift="bottom"
        distance="100px"
        shiftDuration={900}
      />
      <Typography variant={"h3"}> You Quit! </Typography>
    </Box>
  );
}
